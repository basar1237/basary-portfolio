export type ProjectCategory =
  | "travel"
  | "booking"
  | "platform"
  | "advisory"
  | "template"
  | "mobile";

export type Project = {
  id: string;
  name: string;
  brand: string;
  category: ProjectCategory;
  liveUrl?: string;
  oneLiner: string;
  role: string;
  myWork: string[];
  stack: string[];
  highlights: string[];
  badges?: string[];
};

export const projects: Project[] = [
  {
    id: "lidya-travel-ui-react",
    name: "Lidya Travel — Tenant Platformu",
    brand: "Lidya Teknoloji",
    category: "platform",
    oneLiner:
      "Tüm Lidya Travel markalarına güç veren modern multi-tenant Next.js + Payload CMS platformu.",
    role: "Frontend Mühendisi (tenant uygulamasında UI lead)",
    myWork: [
      "Next.js App Router ile [locale]/hotel, [locale]/[slug] ve search-results altındaki tenant uygulaması route'larını geliştirdim.",
      "Server component'ler ve client island'lar ile dile duyarlı otel detay ve arama sonuçları sayfaları tasarladım.",
      "@payloadcms/sdk aracılığıyla Payload CMS collection'larını ve canlı önizlemeyi tenant frontend'ine entegre ettim.",
      "Markalar arasında paylaşılan Mantine UI tasarım sistemi parçalarının sorumluluğunu aldım ve bunları TanStack Query'ye bağladım.",
      "Her seyahat markasının kendi renkleri, metinleri ve SEO'su ile render edilmesi için multi-tenant temalandırmayı kurdum.",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Payload CMS 3",
      "Mantine UI",
      "TanStack Query",
      "Turborepo",
      "pnpm",
    ],
    highlights: [
      "Monorepo: ortak tasarım token'larıyla tenant + cms uygulamaları",
      "[locale] segmenti ile i18n destekli App Router",
      "Payload'dan canlı önizleme & on-demand revalidation",
    ],
    badges: ["Next.js", "Payload", "Multi-tenant"],
  },
  {
    id: "consilium",
    name: "Consilium — İngiltere Risk Danışmanlığı",
    brand: "Consilium Risk Advisory Group",
    category: "advisory",
    oneLiner:
      "İngiltere merkezli profesyonel bir risk danışmanlık firması için tanıtım & içerik sitesi — Next.js + Payload ile geliştirildi.",
    role: "Frontend Mühendisi",
    myWork: [
      "Herkese açık tanıtım sayfalarını Next.js App Router, Mantine ve Tabler ikonlarıyla geliştirdim.",
      "Editör ekibi için Payload collection'larını, block'larını ve bir layout builder modelledim.",
      "Canlı yayın için next-sitemap, yönlendirmeler ve SEO eklentisini yapılandırdım.",
      "Canlı önizleme, taslak içerik ve on-demand revalidation'ı uçtan uca kurdum.",
    ],
    stack: [
      "Next.js 15",
      "Payload CMS 3",
      "Mantine 9",
      "PostgreSQL",
      "TypeScript",
      "Vitest + Playwright",
    ],
    highlights: [
      "Editör dostu layout builder",
      "Canlıya hazır SEO ve yönlendirmeler",
      "Taslak önizleme & canlı önizleme akışları",
    ],
    badges: ["Next.js", "Payload", "İngiltere Müşterisi"],
  },
  {
    id: "gezibank-ui",
    name: "Gezibank UI",
    brand: "Gezibank",
    category: "platform",
    liveUrl: "https://www.gezibank.com/",
    oneLiner:
      "Gezibank rezervasyon markası için Mantine tabanlı tasarım sistemine sahip Next.js + Payload arayüzü.",
    role: "Frontend Mühendisi",
    myWork: [
      "Mantine, özel tema token'ları ve otomatik üretilen bir theme.css süreciyle Next.js (App Router) frontend'ini geliştirdim.",
      "Ortak monorepo akışı üzerinden Payload tabanlı içeriği (importmap + tip üretimi) bağladım.",
      "react-email ve ayrı bir geliştirme sunucusuyla e-posta önizlemelerini kurdum.",
      "Turbopack/Webpack geliştirme modlarını ve HTTPS ile yerel geliştirmeyi yapılandırdım.",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "Payload CMS 3",
      "Mantine UI",
      "Mantine için Tailwind preset",
      "react-email",
    ],
    highlights: [
      "Özel Mantine → Tailwind tema köprüsü",
      "Turbopack ile HTTPS geliştirme",
      "Repo içinde transactional e-postalar",
    ],
    badges: ["Next.js", "Payload", "Mantine"],
  },
  {
    id: "fulltrip-web",
    name: "Fulltrip",
    brand: "Fulltrip",
    category: "travel",
    liveUrl: "https://www.fulltrip.com/",
    oneLiner:
      "Tam hizmet online seyahat acentesi: uçak, otel, otobüs, araç kiralama, transfer.",
    role: "Frontend Geliştirici",
    myWork: [
      "ASP.NET Core MVC frontend'inin bakımını yaptım ve geliştirdim — Razor view'ları, jQuery, Bootstrap.",
      "Uçak, otel ve otobüs için arama, listeleme ve detay sayfalarını geliştirip optimize ettim.",
      "3D Secure ödeme akışlarını ve kısmi ödeme başarılı/başarısız sayfalarını entegre ettim.",
      "fulltripstatic.mncdn.com üzerinden sunulan statik CDN dosyalarını ve dil paketlerini bağladım.",
    ],
    stack: [
      "ASP.NET Core MVC",
      "Razor",
      "C#",
      "jQuery",
      "Bootstrap",
      "SCSS",
      "Docker",
    ],
    highlights: [
      "Çok ürünlü OTA: uçak, otel, otobüs, araç, transfer",
      "3D Secure ödeme + kısmi ödeme akışları",
      "CDN destekli statik dosya + dil süreci",
    ],
    badges: ["OTA", "ASP.NET", "jQuery"],
  },
  {
    id: "parafly-web",
    name: "Parafly Travel",
    brand: "Parafly Travel",
    category: "travel",
    liveUrl: "https://www.paraflytravel.com/",
    oneLiner:
      "Otel, uçak, otobüs ve TripAdvisor entegrasyonuna sahip online seyahat acentesi.",
    role: "Frontend Geliştirici",
    myWork: [
      "Razor, jQuery ve Bootstrap ile ASP.NET Core MVC frontend'inde çalıştım.",
      "Otel yorum widget'ları için TripAdvisor partner API'sini bağladım.",
      "Hesap, callback ve Mobile Connect (Turkcell) ekranlarını geliştirdim.",
      "Canlı ortam için CDN yollarını, dil dosyalarını ve reCAPTCHA entegrasyonunu optimize ettim.",
    ],
    stack: [
      "ASP.NET Core MVC",
      "Razor",
      "C#",
      "jQuery",
      "Bootstrap",
      "Application Insights",
    ],
    highlights: [
      "TripAdvisor partner entegrasyonu",
      "Turkcell Mobile Connect ile kimlik doğrulama",
      "reCAPTCHA v2 + v3 ile güçlendirilmiş giriş",
    ],
    badges: ["OTA", "TripAdvisor", "ASP.NET"],
  },
  {
    id: "denizleseyahat",
    name: "Denizle Seyahat",
    brand: "Denizle Seyahat",
    category: "travel",
    oneLiner:
      "Temel rezervasyon akışlarını paylaşan, hem web hem mobil için optimize edilmiş versiyonu olan seyahat markası.",
    role: "Frontend Geliştirici",
    myWork: [
      "Web projesinin (DenizleSeyahat.Web) bakımını yaptım — Razor view'ları, jQuery, Bootstrap.",
      "Düşük bant genişliğine sahip cihazlar için optimize edilmiş paralel Mobil projenin (DenizleSeyahat.Mobile) bakımını yaptım.",
      "Her ikisini de aynı Lidya OL/API gateway'ine ve CDN'e bağladım.",
    ],
    stack: ["ASP.NET Core MVC", "Razor", "jQuery", "Bootstrap", "Docker"],
    highlights: [
      "İkiz web + mobil optimize projeler",
      "Ortak API gateway + CDN",
      "Lidya scope kodlarıyla markaya özel temalandırma",
    ],
    badges: ["Web", "Mobil", "ASP.NET"],
  },
  {
    id: "salam-booking",
    name: "Salam Booking",
    brand: "Salam Booking",
    category: "booking",
    oneLiner:
      "Arapça konuşan gezginleri hedefleyen, otel rezervasyonu odaklı marka.",
    role: "Frontend Geliştirici",
    myWork: [
      "SalamBooking.Web ASP.NET Core MVC projesinde çalıştım (otel-arama, otel detay, otel arama).",
      "Angular şablon reposunda otel detay ve otel arama şablonlarını sıfırdan geliştirip stillendirdim.",
      "Yerleşimleri RTL uyumlu görüntüleme ve Arapça içerik için uyarladım.",
    ],
    stack: ["ASP.NET Core MVC", "Razor", "jQuery", "Bootstrap", "Grunt"],
    highlights: [
      "Arapça / RTL uyumlu arayüz",
      "Bağımsız otel arama & detay akışları",
      "Grunt tabanlı statik şablon build'i",
    ],
    badges: ["Oteller", "RTL"],
  },
  {
    id: "iremtour",
    name: "İrem Tour",
    brand: "İrem Tour",
    category: "travel",
    oneLiner:
      "Uçak, otel, otobüs ve araç kiralama aramasına sahip seyahat acentesi şablonu.",
    role: "Frontend Geliştirici",
    myWork: [
      "IremTour.Web ASP.NET Core MVC frontend'inin sorumluluğunu üstlendim — Razor view'ları, helper'lar, bundleconfig.",
      "Statik tasarım kaynağı olarak kullanılan Angular şablon reposunun (iremtur) bakımını yaptım.",
    ],
    stack: ["ASP.NET Core MVC", "Razor", "Angular şablonu", "jQuery", "Bootstrap"],
    highlights: [
      "Statik şablon → MVC entegrasyonu",
      "Çok ürünlü arama arayüzü",
    ],
    badges: ["OTA", "Şablon"],
  },
  {
    id: "prontotatil",
    name: "Pronto Tatil",
    brand: "Pronto Tatil",
    category: "travel",
    oneLiner:
      "Lidya altyapısı üzerinde tatil & tur odaklı seyahat markası.",
    role: "Frontend Geliştirici",
    myWork: [
      "ProntoTatil ASP.NET Core MVC frontend'inde çalıştım.",
      "Birden fazla marka sitesi arasında paylaşılan Angular şablonunun (pronto) bakımını yaptım.",
    ],
    stack: ["ASP.NET Core MVC", "Razor", "Angular şablonu", "jQuery", "Bootstrap"],
    highlights: ["Tur ürünü odaklı kullanıcı deneyimi", "Ortak statik şablon altyapısı"],
    badges: ["Tatil", "ASP.NET"],
  },
  {
    id: "troyacar",
    name: "Troyecar",
    brand: "Troyecar",
    category: "travel",
    liveUrl: "https://preprod.troyecar.com/",
    oneLiner:
      "Lidya seyahat altyapısı üzerinde araç kiralama ve transfer odaklı marka.",
    role: "Frontend Geliştirici",
    myWork: [
      "Ortak Lidya helper'larıyla Troyacar ASP.NET Core MVC frontend'ini geliştirdim.",
      "İlgili Angular şablonunun (troyacar) bakımını yaptım — yarn ile yönetilen statik build.",
    ],
    stack: ["ASP.NET Core MVC", "C#", "Angular şablonu", "jQuery", "Bootstrap"],
    highlights: ["Araç kiralama & transfer akışları", "Yarn tabanlı statik şablon"],
    badges: ["Araç Kiralama", "Transfer"],
  },
  {
    id: "gezibank-web",
    name: "Gezibank (.NET)",
    brand: "Gezibank",
    category: "booking",
    liveUrl: "https://www.gezibank.com/",
    oneLiner:
      "Orijinal .NET Gezibank rezervasyon sitesi — mevcut Next.js Gezibank arayüzünün öncülü.",
    role: "Frontend Geliştirici",
    myWork: [
      "GeziBank.Web ASP.NET Core MVC projesinin bakımını yaptım: Razor view'ları, jQuery, Bootstrap.",
      "Modern Next.js + Payload Gezibank arayüzüne yeniden yazım süreciyle paralel çalıştım.",
    ],
    stack: ["ASP.NET Core MVC", "Razor", "jQuery", "Bootstrap"],
    highlights: ["Canlı rezervasyon markası", "Legacy'den Next.js'e geçişte köprü"],
    badges: ["Rezervasyon", "ASP.NET"],
  },
  {
    id: "ykmturizm",
    name: "YKM Turizm",
    brand: "YKM Turizm",
    category: "travel",
    liveUrl: "https://www.ykmturizm.com.tr/",
    oneLiner:
      "Lidya OTA altyapısı üzerinde çalışan köklü bir Türk seyahat markası.",
    role: "Frontend Geliştirici",
    myWork: [
      "YkmTurizm.Web ASP.NET Core MVC frontend'inde çalıştım — Razor view'ları, helper'lar, CDN destekli dosyalar.",
    ],
    stack: ["ASP.NET Core MVC", "Razor", "jQuery", "Bootstrap"],
    highlights: ["Ortak Lidya OTA altyapısındaki marka", "CDN destekli statik içerik sunumu"],
    badges: ["OTA", "ASP.NET"],
  },
  {
    id: "vodafone-template",
    name: "Vodafone — Seyahat Şablonu",
    brand: "Lidya Teknoloji (white-label)",
    category: "template",
    oneLiner:
      "Vodafone markalı bir deneyim için hazırlanmış white-label seyahat şablonu.",
    role: "Frontend Geliştirici",
    myWork: [
      "White-label seyahat arayüzü için kullanılan statik Angular/Bootstrap şablon reposunu (vodafone) geliştirdim.",
    ],
    stack: ["Angular şablonu", "Bootstrap", "jQuery", "SCSS"],
    highlights: ["White-label uyumlu tasarım", "Operatör seviyesinde stil sistemi"],
    badges: ["White-label", "Şablon"],
  },
  {
    id: "denizle-mobile",
    name: "Denizle Seyahat — Mobil Web",
    brand: "Denizle Seyahat",
    category: "mobile",
    oneLiner:
      "Denizle Seyahat'in yavaş bağlantılar için optimize edilmiş mobile-first web versiyonu.",
    role: "Frontend Geliştirici",
    myWork: [
      "DenizleSeyahat.Mobile'da yerleşimleri ve bundle'ları küçük ekranlar ve sınırlı bant genişliği için optimize ettim.",
      "Masaüstü versiyonla aynı Lidya backend gateway'ini kullandım.",
    ],
    stack: ["ASP.NET Core MVC", "Razor", "jQuery", "Bootstrap"],
    highlights: [
      "Mobile-first sunum",
      "Masaüstü siteyle ortak API",
    ],
    badges: ["Mobil", "Performans"],
  },
];

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "Tümü" },
  { id: "platform", label: "Platformlar" },
  { id: "advisory", label: "Danışmanlık" },
  { id: "travel", label: "Seyahat / OTA" },
  { id: "booking", label: "Rezervasyon" },
  { id: "template", label: "Şablonlar" },
  { id: "mobile", label: "Mobil" },
];
