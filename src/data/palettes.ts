export type Palette = {
  id: string;
  label: string;
  note: string;
  /** Swatch shown in the picker: [background, surface, accent] */
  chip: [string, string, string];
  vars: Record<string, string>;
};

/**
 * Temporary explorer. Once a palette is chosen, copy its `vars` into
 * :root in global.css and delete this file plus <ThemePicker/>.
 */
export const PALETTES: Palette[] = [
  {
    id: "chocolate",
    label: "Chocolate",
    note: "Dominant brown, cream text. Warmest and most distinctive.",
    chip: ["#53392a", "#6b4d3b", "#e8b782"],
    vars: {
      "--bg": "#53392a",
      "--surface": "#5e4232",
      "--surface-2": "#6b4d3b",
      "--line": "rgba(250, 245, 239, 0.14)",
      "--line-strong": "rgba(250, 245, 239, 0.28)",
      "--ink": "#faf5ef",
      "--muted": "#cbb8a7",
      "--amber": "#e8b782",
      "--amber-soft": "rgba(232, 183, 130, 0.16)",
      "--mint": "#d9a06a",
    },
  },
  {
    id: "bone",
    label: "Bone",
    note: "Light, warm paper with deep ink. Reads editorial and current.",
    chip: ["#f7f4ef", "#ffffff", "#8b5e34"],
    vars: {
      "--bg": "#f7f4ef",
      "--surface": "#ffffff",
      "--surface-2": "#efe9e0",
      "--line": "rgba(38, 32, 26, 0.13)",
      "--line-strong": "rgba(38, 32, 26, 0.26)",
      "--ink": "#26201a",
      "--muted": "#6b5d50",
      "--amber": "#8b5e34",
      "--amber-soft": "rgba(139, 94, 52, 0.1)",
      "--mint": "#8f6033",
    },
  },
  {
    id: "clay",
    label: "Clay",
    note: "Mid-tone warm grey-brown. Softer than chocolate, still warm.",
    chip: ["#3a3430", "#4a423c", "#d9a06a"],
    vars: {
      "--bg": "#3a3430",
      "--surface": "#443c37",
      "--surface-2": "#4f4640",
      "--line": "rgba(245, 240, 235, 0.13)",
      "--line-strong": "rgba(245, 240, 235, 0.26)",
      "--ink": "#f5f0eb",
      "--muted": "#b8ada4",
      "--amber": "#e0a870",
      "--amber-soft": "rgba(224, 168, 112, 0.14)",
      "--mint": "#9fb8a5",
    },
  },
  {
    id: "ink",
    label: "Ink & Rust",
    note: "Deep neutral with a single saturated accent. Most restrained.",
    chip: ["#1c1b1a", "#282625", "#d4643c"],
    vars: {
      "--bg": "#1c1b1a",
      "--surface": "#242222",
      "--surface-2": "#2f2c2b",
      "--line": "rgba(240, 238, 235, 0.12)",
      "--line-strong": "rgba(240, 238, 235, 0.24)",
      "--ink": "#f0eeeb",
      "--muted": "#a39d97",
      "--amber": "#e07a52",
      "--amber-soft": "rgba(224, 122, 82, 0.14)",
      "--mint": "#c9a227",
    },
  },
];
