import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  /** Max tilt in degrees. 0 disables tilt but keeps the spotlight. */
  tilt?: number;
  style?: CSSProperties;
};

/**
 * Tracks the pointer and writes CSS custom properties on the element:
 *   --mx / --my  pointer position, for the spotlight gradient
 *   --rx / --ry  rotation, for the 3D tilt
 * Writes are batched into a single rAF so a fast pointer can't thrash layout.
 * Tilt is skipped for coarse pointers (touch) and when reduced motion is set.
 */
export default function MotionCard({
  children,
  className = "",
  href,
  tilt = 7,
  style,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const frame = useRef(0);
  const allowTilt = useRef(true);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    allowTilt.current = fine && !calm && tilt > 0;
  }, [tilt]);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);

        if (!allowTilt.current) return;
        // -0.5 .. 0.5 from centre
        const px = x / rect.width - 0.5;
        const py = y / rect.height - 0.5;
        el.style.setProperty("--ry", `${px * tilt * 2}deg`);
        el.style.setProperty("--rx", `${-py * tilt * 2}deg`);
      });
    },
    [tilt]
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }, []);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const shared = {
    ref: ref as never,
    className: `mcard ${className}`,
    onPointerMove,
    onPointerLeave,
    style,
  };

  const inner = (
    <>
      <span className="mcard__border" aria-hidden="true" />
      <span className="mcard__glow" aria-hidden="true" />
      <span className="mcard__body">{children}</span>
    </>
  );

  if (href) {
    return (
      <a {...shared} href={href} target="_blank" rel="noreferrer noopener">
        {inner}
      </a>
    );
  }

  return <article {...shared}>{inner}</article>;
}
