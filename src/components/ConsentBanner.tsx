"use client";

import Link from "next/link";
import { setConsent, useConsent } from "@/lib/consent";

export default function ConsentBanner() {
  if (useConsent() !== null) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-lg md:flex-row md:items-center">
        <p className="text-sm leading-relaxed text-neutral-600">
          Bu site, ziyaretleri anlamak için IP adresi, yaklaşık konum ve cihaz
          bilgisi kaydeder. Kabul edersen Google Analytics ve Microsoft Clarity
          da çalışır. Ayrıntılar{" "}
          <Link href="/gizlilik" className="text-accent underline-offset-2 hover:underline">
            Gizlilik ve KVKK
          </Link>{" "}
          sayfasında.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setConsent("denied")}
            className="btn btn-secondary"
          >
            Reddet
          </button>
          <button
            type="button"
            onClick={() => setConsent("granted")}
            className="btn btn-primary"
          >
            Kabul et
          </button>
        </div>
      </div>
    </div>
  );
}
