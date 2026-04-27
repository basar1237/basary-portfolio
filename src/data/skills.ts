export type Skill = {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tooling" | "cms" | "data";
  note?: string;
};

export const skills: Skill[] = [
  { name: "React", level: 92, category: "frontend", note: "Hooks, Suspense, Server Components" },
  { name: "Next.js", level: 88, category: "frontend", note: "App Router, RSC, ISR, middleware" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 92, category: "frontend" },
  { name: "HTML5 / CSS3", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 88, category: "frontend" },
  { name: "Mantine UI", level: 85, category: "frontend", note: "Used in Lidya tenant app & Gezibank" },
  { name: "Framer Motion", level: 80, category: "frontend" },
  { name: "TanStack Query", level: 78, category: "frontend" },
  { name: "Payload CMS", level: 82, category: "cms", note: "Collections, blocks, live preview, multi-tenant" },
  { name: "jQuery / Bootstrap", level: 90, category: "frontend", note: "Legacy template sites" },
  { name: "Angular templates", level: 75, category: "frontend" },
  { name: ".NET / C#", level: 75, category: "backend", note: "ASP.NET Core MVC views & helpers" },
  { name: "Node.js", level: 78, category: "backend" },
  { name: "Git / GitHub", level: 90, category: "tooling" },
  { name: "Docker", level: 70, category: "tooling" },
  { name: "Turborepo / pnpm", level: 78, category: "tooling" },
  { name: "Python (Pandas, Sklearn)", level: 70, category: "data" },
];

export const stats = [
  { label: "Years in Production", value: "3+" },
  { label: "Shipped Travel Brands", value: "10+" },
  { label: "Languages Supported", value: "5+" },
  { label: "Tenants Powered", value: "Multi" },
];
