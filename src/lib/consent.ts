import { useSyncExternalStore } from "react";

/**
 * Cookie/analytics consent, kept in localStorage.
 * null = not decided yet, undefined = unknown (server render / hydration).
 */
export type Consent = "granted" | "denied" | null | undefined;

const KEY = "bs_consent";
const EVENT = "bs-consent";

export function getConsent(): Consent {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: "granted" | "denied" | null) {
  try {
    if (value) localStorage.setItem(KEY, value);
    else localStorage.removeItem(KEY);
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function useConsent() {
  return useSyncExternalStore(subscribe, getConsent, () => undefined);
}
