import { useEffect, useState } from "react";
import { PALETTES } from "../data/palettes";

const KEY = "portfolio:palette";

/**
 * Temporary explorer for choosing a palette on the live site.
 * Delete this component and src/data/palettes.ts once one is picked.
 */
export default function ThemePicker() {
  const [active, setActive] = useState<string>(
    () => localStorage.getItem(KEY) ?? PALETTES[0].id
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const palette = PALETTES.find((p) => p.id === active) ?? PALETTES[0];
    const root = document.documentElement;
    for (const [key, value] of Object.entries(palette.vars)) {
      root.style.setProperty(key, value);
    }
    localStorage.setItem(KEY, palette.id);
  }, [active]);

  return (
    <div className="tp" data-open={open}>
      <button
        className="tp__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Change colour theme"
      >
        Theme
      </button>

      {open && (
        <div className="tp__panel" role="group" aria-label="Colour themes">
          {PALETTES.map((p) => (
            <button
              key={p.id}
              className="tp__opt"
              data-on={p.id === active}
              onClick={() => setActive(p.id)}
            >
              <span className="tp__chips" aria-hidden="true">
                {p.chip.map((c) => (
                  <i key={c} style={{ background: c }} />
                ))}
              </span>
              <span className="tp__text">
                <strong>{p.label}</strong>
                <em>{p.note}</em>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
