import Script from "next/script";

/**
 * Microsoft Clarity — session recordings & heatmaps.
 * The project id is public (it ships in client JS on every Clarity site),
 * so it's fine to hardcode a default. It can still be overridden or disabled
 * via NEXT_PUBLIC_CLARITY_ID. Skipped during `next dev` so local coding
 * sessions don't pollute real analytics. View data at clarity.microsoft.com.
 */
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? "xivvg4c02v";

export default function Clarity() {
  if (!CLARITY_ID || process.env.NODE_ENV !== "production") return null;

  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
    </Script>
  );
}
