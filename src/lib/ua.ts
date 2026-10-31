const BOT_RE =
  /bot|crawl|spider|slurp|preview|facebookexternalhit|headless|lighthouse|python|curl|wget|axios|node-fetch/i;

export function parseUserAgent(ua: string) {
  const bot = BOT_RE.test(ua);

  const device =
    /ipad|tablet/i.test(ua) || (/android/i.test(ua) && !/mobile/i.test(ua))
      ? "Tablet"
      : /mobi|iphone|android/i.test(ua)
        ? "Mobil"
        : "Masaüstü";

  const os = /windows nt/i.test(ua)
    ? "Windows"
    : /iphone|ipad|ipod/i.test(ua)
      ? "iOS"
      : /mac os x/i.test(ua)
        ? "macOS"
        : /android/i.test(ua)
          ? "Android"
          : /cros/i.test(ua)
            ? "ChromeOS"
            : /linux/i.test(ua)
              ? "Linux"
              : "Diğer";

  const browser = /edg(e|a|ios)?\//i.test(ua)
    ? "Edge"
    : /opr\/|opera/i.test(ua)
      ? "Opera"
      : /samsungbrowser/i.test(ua)
        ? "Samsung"
        : /yabrowser/i.test(ua)
          ? "Yandex"
          : /firefox|fxios/i.test(ua)
            ? "Firefox"
            : /chrome|crios/i.test(ua)
              ? "Chrome"
              : /safari/i.test(ua)
                ? "Safari"
                : "Diğer";

  return { bot, device, os, browser };
}
