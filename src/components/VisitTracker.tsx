"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getConsent, useConsent } from "@/lib/consent";

/**
 * Logs page views + active time on page to /api/track (see src/lib/visitors.ts).
 * Visitor id lives in localStorage, session id in sessionStorage. Turned off
 * when the visitor rejects analytics, on /admin, and during `next dev`.
 */
function storedId(storage: () => Storage, key: string) {
  try {
    let v = storage().getItem(key);
    if (!v) {
      v = crypto.randomUUID();
      storage().setItem(key, v);
    }
    return v;
  } catch {
    return crypto.randomUUID();
  }
}

function send(data: object) {
  const body = JSON.stringify(data);
  if (navigator.sendBeacon?.("/api/track", new Blob([body], { type: "text/plain" }))) {
    return;
  }
  fetch("/api/track", { method: "POST", body, keepalive: true }).catch(() => {});
}

export default function VisitTracker() {
  const pathname = usePathname();
  const denied = useConsent() === "denied";

  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" ||
      denied ||
      getConsent() === "denied" ||
      pathname.startsWith("/admin")
    ) {
      return;
    }

    const vid = storedId(() => localStorage, "bs_vid");
    const sid = storedId(() => sessionStorage, "bs_sid");
    const pid = crypto.randomUUID();

    // Only the session's first page carries the external referrer.
    let ref = "";
    try {
      if (!sessionStorage.getItem("bs_ref")) {
        sessionStorage.setItem("bs_ref", "1");
        ref = document.referrer;
      }
    } catch {}

    send({ t: "view", vid, sid, pid, path: pathname, ref });

    let active = 0;
    let since = document.visibilityState === "visible" ? Date.now() : 0;
    const flush = () => {
      if (since) {
        active += Date.now() - since;
        since = 0;
      }
      send({ t: "leave", vid, pid, ms: active });
    };
    const onVisibility = () => {
      if (document.visibilityState === "hidden") flush();
      else since = Date.now();
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", flush);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", flush);
      flush();
    };
  }, [pathname, denied]);

  return null;
}
