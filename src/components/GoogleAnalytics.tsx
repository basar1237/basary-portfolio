"use client";

import Script from "next/script";
import { useConsent } from "@/lib/consent";

/**
 * Google Analytics 4 — city-level geo, sessions, traffic sources.
 * Set NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXXXXX) in Vercel to enable it; renders
 * nothing until then. Skipped during `next dev` so local coding sessions
 * don't pollute real analytics. Loads only after the visitor accepts the
 * consent banner. View data at analytics.google.com.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  const consent = useConsent();
  if (consent !== "granted" || !GA_ID || process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
