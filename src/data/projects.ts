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
  accent: string;
  badges?: string[];
};

export const projects: Project[] = [
  {
    id: "lidya-travel-ui-react",
    name: "Lidya Travel — Tenant Platform",
    brand: "Lidya Teknoloji",
    category: "platform",
    oneLiner:
      "Modern multi-tenant Next.js + Payload CMS platform powering all Lidya Travel brands.",
    role: "Frontend Engineer (lead UI on tenant app)",
    myWork: [
      "Built tenant-app routes with the Next.js App Router under [locale]/hotel, [locale]/[slug] and search-results.",
      "Designed locale-aware hotel detail and search-results pages with server components and client islands.",
      "Integrated Payload CMS collections and live-preview into the tenant frontend via @payloadcms/sdk.",
      "Owned the Mantine UI design system pieces shared across brands and connected them to TanStack Query.",
      "Wired up multi-tenant theming so each travel brand renders with its own colors, copy and SEO.",
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
      "Monorepo: tenant + cms apps with shared design tokens",
      "App Router with i18n via [locale] segment",
      "Live preview & on-demand revalidation from Payload",
    ],
    accent: "from-violet-500 via-fuchsia-500 to-pink-500",
    badges: ["Next.js", "Payload", "Multi-tenant"],
  },
  {
    id: "consilium",
    name: "Consilium — UK Risk Advisory",
    brand: "Consilium Risk Advisory Group",
    category: "advisory",
    oneLiner:
      "Marketing & content site for a UK-based professional risk advisory firm — built on Next.js + Payload.",
    role: "Frontend Engineer",
    myWork: [
      "Implemented the public marketing surface in Next.js App Router with Mantine and Tabler icons.",
      "Modeled Payload collections, blocks and a layout-builder for the editorial team.",
      "Configured next-sitemap, redirects and SEO plugin for production publishing.",
      "Wired live preview, draft content and on-demand revalidation end-to-end.",
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
      "Editor-friendly layout builder",
      "Production-grade SEO and redirects",
      "Draft preview & live preview workflows",
    ],
    accent: "from-sky-500 via-cyan-500 to-teal-400",
    badges: ["Next.js", "Payload", "UK Client"],
  },
  {
    id: "gezibank-ui",
    name: "Gezibank UI",
    brand: "Gezibank",
    category: "platform",
    liveUrl: "https://www.gezibank.com/",
    oneLiner:
      "Next.js + Payload UI for the Gezibank booking brand with a Mantine-based design system.",
    role: "Frontend Engineer",
    myWork: [
      "Built the Next.js (App Router) frontend with Mantine, custom theme tokens and a generated theme.css pipeline.",
      "Hooked up Payload-powered content (importmap + types generation) via the shared monorepo workflow.",
      "Set up email previews with react-email and a dedicated dev server.",
      "Configured Turbopack/Webpack dev modes and HTTPS local development.",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "Payload CMS 3",
      "Mantine UI",
      "Tailwind preset for Mantine",
      "react-email",
    ],
    highlights: [
      "Custom Mantine → Tailwind theme bridge",
      "HTTPS dev with Turbopack",
      "Transactional emails in-repo",
    ],
    accent: "from-indigo-500 via-blue-500 to-cyan-400",
    badges: ["Next.js", "Payload", "Mantine"],
  },
  {
    id: "fulltrip-web",
    name: "Fulltrip",
    brand: "Fulltrip",
    category: "travel",
    liveUrl: "https://www.fulltrip.com/",
    oneLiner:
      "Full-service online travel agency: flights, hotels, buses, car rental, transfers.",
    role: "Frontend Developer",
    myWork: [
      "Maintained and extended the ASP.NET Core MVC frontend — Razor views, jQuery, Bootstrap.",
      "Built and tuned search, listing and detail pages for flights, hotels and bus.",
      "Integrated 3D-secure payment flows and partial-payment success/failure pages.",
      "Connected static CDN assets and language bundles served from fulltripstatic.mncdn.com.",
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
      "Multi-product OTA: flight, hotel, bus, car, transfer",
      "3D-secure payment + partial-payment flows",
      "CDN-backed static + language pipeline",
    ],
    accent: "from-fuchsia-500 via-pink-500 to-rose-500",
    badges: ["OTA", "ASP.NET", "jQuery"],
  },
  {
    id: "parafly-web",
    name: "Parafly Travel",
    brand: "Parafly Travel",
    category: "travel",
    liveUrl: "https://www.paraflytravel.com/",
    oneLiner:
      "Online travel agency with hotels, flights, buses and TripAdvisor integration.",
    role: "Frontend Developer",
    myWork: [
      "Worked on the ASP.NET Core MVC frontend with Razor, jQuery and Bootstrap.",
      "Wired the TripAdvisor partner API for hotel review widgets.",
      "Implemented account, callback and Mobile Connect (Turkcell) screens.",
      "Tuned CDN paths, language files and recaptcha integration for production.",
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
      "TripAdvisor partner integration",
      "Turkcell Mobile Connect auth",
      "Recaptcha v2 + v3 hardened login",
    ],
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    badges: ["OTA", "TripAdvisor", "ASP.NET"],
  },
  {
    id: "denizleseyahat",
    name: "Denizle Seyahat",
    brand: "Denizle Seyahat",
    category: "travel",
    oneLiner:
      "Travel brand with both a web and a mobile-optimized variant, sharing core booking flows.",
    role: "Frontend Developer",
    myWork: [
      "Maintained the Web project (DenizleSeyahat.Web) — Razor views, jQuery, Bootstrap.",
      "Maintained a parallel Mobile project (DenizleSeyahat.Mobile) tuned for low-bandwidth devices.",
      "Tied both into the same Lidya OL/API gateway and CDN.",
    ],
    stack: ["ASP.NET Core MVC", "Razor", "jQuery", "Bootstrap", "Docker"],
    highlights: [
      "Twin web + mobile-optimized projects",
      "Shared API gateway + CDN",
      "Brand-specific theming via Lidya scope codes",
    ],
    accent: "from-amber-500 via-orange-500 to-rose-500",
    badges: ["Web", "Mobile", "ASP.NET"],
  },
  {
    id: "salam-booking",
    name: "Salam Booking",
    brand: "Salam Booking",
    category: "booking",
    oneLiner:
      "Hotel-booking-focused brand targeting Arabic-speaking travelers.",
    role: "Frontend Developer",
    myWork: [
      "Worked on the SalamBooking.Web ASP.NET Core MVC project (otel-arama, hotel detail, hotel search).",
      "Built and styled hotel-detail and hotel-search templates from scratch on the Angular template repo.",
      "Adapted layouts for RTL-friendly rendering and Arabic content.",
    ],
    stack: ["ASP.NET Core MVC", "Razor", "jQuery", "Bootstrap", "Grunt"],
    highlights: [
      "Arabic / RTL-aware UI",
      "Standalone hotel search & detail flows",
      "Grunt-driven static template build",
    ],
    accent: "from-lime-500 via-emerald-500 to-teal-500",
    badges: ["Hotels", "RTL"],
  },
  {
    id: "iremtour",
    name: "İrem Tour",
    brand: "İrem Tour",
    category: "travel",
    oneLiner:
      "Travel agency template with flight, hotel, bus and car-rental search.",
    role: "Frontend Developer",
    myWork: [
      "Owned the IremTour.Web ASP.NET Core MVC frontend — Razor views, helpers, bundleconfig.",
      "Maintained the Angular template repo (iremtur) used as the static design source.",
    ],
    stack: ["ASP.NET Core MVC", "Razor", "Angular template", "jQuery", "Bootstrap"],
    highlights: [
      "Static template → MVC integration",
      "Multi-product search UI",
    ],
    accent: "from-rose-500 via-pink-500 to-fuchsia-500",
    badges: ["OTA", "Template"],
  },
  {
    id: "prontotatil",
    name: "Pronto Tatil",
    brand: "Pronto Tatil",
    category: "travel",
    oneLiner:
      "Holiday & tour-focused travel brand on the Lidya stack.",
    role: "Frontend Developer",
    myWork: [
      "Worked on the ProntoTatil ASP.NET Core MVC frontend.",
      "Maintained the matching Angular template (pronto) shared across multiple brand sites.",
    ],
    stack: ["ASP.NET Core MVC", "Razor", "Angular template", "jQuery", "Bootstrap"],
    highlights: ["Tour-product oriented UX", "Shared static template stack"],
    accent: "from-orange-500 via-amber-500 to-yellow-400",
    badges: ["Holidays", "ASP.NET"],
  },
  {
    id: "troyacar",
    name: "Troyecar",
    brand: "Troyecar",
    category: "travel",
    liveUrl: "https://preprod.troyecar.com/",
    oneLiner:
      "Car-rental and transfer-focused brand on the Lidya travel stack.",
    role: "Frontend Developer",
    myWork: [
      "Built the Troyacar ASP.NET Core MVC frontend with shared Lidya helpers.",
      "Maintained the matching Angular template (troyacar) — yarn-managed static build.",
    ],
    stack: ["ASP.NET Core MVC", "C#", "Angular template", "jQuery", "Bootstrap"],
    highlights: ["Car-rental & transfer flows", "Yarn-driven static template"],
    accent: "from-cyan-500 via-blue-500 to-indigo-500",
    badges: ["Car Rental", "Transfer"],
  },
  {
    id: "gezibank-web",
    name: "Gezibank (.NET)",
    brand: "Gezibank",
    category: "booking",
    liveUrl: "https://www.gezibank.com/",
    oneLiner:
      "The original .NET Gezibank booking site — predecessor of the current Next.js Gezibank UI.",
    role: "Frontend Developer",
    myWork: [
      "Maintained the GeziBank.Web ASP.NET Core MVC project: Razor views, jQuery, Bootstrap.",
      "Worked alongside the rewrite to the modern Next.js + Payload Gezibank UI.",
    ],
    stack: ["ASP.NET Core MVC", "Razor", "jQuery", "Bootstrap"],
    highlights: ["Live booking brand", "Bridged legacy to Next.js rewrite"],
    accent: "from-blue-500 via-indigo-500 to-violet-500",
    badges: ["Booking", "ASP.NET"],
  },
  {
    id: "ykmturizm",
    name: "YKM Turizm",
    brand: "YKM Turizm",
    category: "travel",
    liveUrl: "https://www.ykmturizm.com.tr/",
    oneLiner:
      "Established Turkish travel brand running on the Lidya OTA stack.",
    role: "Frontend Developer",
    myWork: [
      "Worked on YkmTurizm.Web ASP.NET Core MVC frontend — Razor views, helpers, CDN-backed assets.",
    ],
    stack: ["ASP.NET Core MVC", "Razor", "jQuery", "Bootstrap"],
    highlights: ["Brand on the shared Lidya OTA stack", "CDN-backed static delivery"],
    accent: "from-red-500 via-rose-500 to-pink-500",
    badges: ["OTA", "ASP.NET"],
  },
  {
    id: "vodafone-template",
    name: "Vodafone — Travel Template",
    brand: "Lidya Teknoloji (white-label)",
    category: "template",
    oneLiner:
      "White-label travel template prepared for a Vodafone-branded experience.",
    role: "Frontend Developer",
    myWork: [
      "Built the static Angular/Bootstrap template repo (vodafone) used for the white-label travel surface.",
    ],
    stack: ["Angular template", "Bootstrap", "jQuery", "SCSS"],
    highlights: ["White-label friendly design", "Carrier-grade styling system"],
    accent: "from-red-600 via-rose-600 to-pink-600",
    badges: ["White-label", "Template"],
  },
  {
    id: "denizle-mobile",
    name: "Denizle Seyahat — Mobile Web",
    brand: "Denizle Seyahat",
    category: "mobile",
    oneLiner:
      "Mobile-first web variant of Denizle Seyahat tuned for slow connections.",
    role: "Frontend Developer",
    myWork: [
      "Tuned layouts and bundles in DenizleSeyahat.Mobile for small screens and limited bandwidth.",
      "Reused the same Lidya backend gateway as the desktop variant.",
    ],
    stack: ["ASP.NET Core MVC", "Razor", "jQuery", "Bootstrap"],
    highlights: [
      "Mobile-first delivery",
      "Shared API with the desktop site",
    ],
    accent: "from-teal-500 via-cyan-500 to-sky-500",
    badges: ["Mobile", "Performance"],
  },
];

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "platform", label: "Platforms" },
  { id: "advisory", label: "Advisory" },
  { id: "travel", label: "Travel / OTA" },
  { id: "booking", label: "Booking" },
  { id: "template", label: "Templates" },
  { id: "mobile", label: "Mobile" },
];
