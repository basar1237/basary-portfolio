"use client";

import { setConsent } from "@/lib/consent";

export default function ConsentReset() {
  return (
    <button
      type="button"
      onClick={() => {
        setConsent(null);
        window.location.reload();
      }}
      className="btn btn-secondary"
    >
      Çerez tercihimi değiştir
    </button>
  );
}
