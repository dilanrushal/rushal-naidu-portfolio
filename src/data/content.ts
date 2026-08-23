export const profile = {
  name: "Rushal Naidu",
  role: "Senior Software Engineer",
  location: "Bengaluru, India",
  email: "dilanrushal@gmail.com",
  github: "https://github.com/dilanrushal",
  linkedin: "https://www.linkedin.com/in/rushal-naidu-7ba535152",
  tagline: "I build and own enterprise web applications end to end.",
  intro:
    "Whether you need a new feature shipped, a legacy screen rebuilt, an API designed from scratch, or AI agents wired into your existing workflow — I take it from requirements through PR review and release.",
};

export type Layer = {
  id: string;
  index: string;
  name: string;
  blurb: string;
  tech: string[];
};

export const layers: Layer[] = [
  {
    id: "interface",
    index: "L1",
    name: "Interface",
    blurb: "Data-dense enterprise UIs that stay fast and legible as they grow.",
    tech: ["React 19", "TypeScript", "RTK Query", "MUI", "DataGrid"],
  },
  {
    id: "api",
    index: "L2",
    name: "API",
    blurb:
      "REST APIs designed from scratch, with the business logic where it belongs.",
    tech: ["Python", "Django", "DRF", "REST design"],
  },
  {
    id: "infrastructure",
    index: "L3",
    name: "Infrastructure",
    blurb:
      "Serverless backends that scale down to zero and up when it matters.",
    tech: ["AWS Lambda", "Step Functions", "Athena", "DynamoDB"],
  },
  {
    id: "agents",
    index: "L4",
    name: "Agents",
    blurb:
      "LLM tooling wired into real engineering workflows, not bolted on beside them.",
    tech: ["Claude agents", "MCP servers", "Code review", "RCA tooling"],
  },
];

export const experience = [
  {
    company: "VeARC Technologies",
    role: "Senior Software Engineer",
    period: "Present",
    current: true,
    points: [
      "Own enterprise web features end to end across frontend, API, and infrastructure.",
      "Build Claude-based agents and MCP integrations for internal engineering workflows.",
      "Maintain Playwright end-to-end suites wired into CI.",
    ],
  },
  {
    company: "Toshiba Software India",
    role: "Software Engineer",
    period: "Earlier",
    current: false,
    points: [
      "Contributed to enterprise software development.",
      "Built the foundation of a full-stack skill set across the product lifecycle.",
    ],
  },
];

export const education = [
  {
    title: "BE, Computer Science",
    org: "University Visvesvaraya College of Engineering",
    meta: "UVCE",
  },
  {
    title: "Python & Django Full Stack Bootcamp",
    org: "Udemy — certified",
    meta: "Dec 2024",
  },
];

export const projects = [
  {
    name: "Shopping Cart",
    desc: "Cart state, line items, and totals handled in vanilla JavaScript.",
    tech: ["JavaScript"],
    href: "https://github.com/dilanrushal/ShoppingCart",
  },
  {
    name: "Weather App",
    desc: "React client that fetches and renders live forecast data.",
    tech: ["React", "API"],
    href: "https://github.com/dilanrushal/react-weather-app1",
  },
  {
    name: "Music Player",
    desc: "Playback controls, track list, and player state in JavaScript.",
    tech: ["JavaScript"],
    href: "https://github.com/dilanrushal/Music",
  },
  {
    name: "Portfolio",
    desc: "This site — React 19 and TypeScript, no UI framework.",
    tech: ["React 19", "TypeScript", "Vite"],
    href: "https://github.com/dilanrushal/rushal-naidu-portfolio",
  },
];

export const services = [
  {
    title: "Feature development",
    desc: "New features shipped across the whole stack, not just one slice of it.",
  },
  {
    title: "Legacy rebuilds",
    desc: "Aging screens and services rebuilt into something maintainable.",
  },
  {
    title: "API design",
    desc: "REST APIs designed from scratch on Django and AWS.",
  },
  {
    title: "AI agent integration",
    desc: "Claude agents and MCP servers wired into your existing workflow.",
  },
  {
    title: "Test automation",
    desc: "Playwright end-to-end coverage and CI integration.",
  },
  {
    title: "Project ownership",
    desc: "Requirements through PR review and release. No hand-off gaps.",
  },
];

export const nav = [
  { id: "stack", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];
