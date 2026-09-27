import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (p: IconProps) => ({
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

/** School crest / monogram mark */
export function Crest({ className, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 48 56" fill="none" className={className} {...p}>
      <path
        d="M24 2 44.5 8.6v22.1c0 12-8.6 19.9-20.5 23.3C12.1 50.6 3.5 42.7 3.5 30.7V8.6L24 2Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M24 2 44.5 8.6v22.1c0 12-8.6 19.9-20.5 23.3C12.1 50.6 3.5 42.7 3.5 30.7V8.6L24 2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M13 34.5V21.2l11-6 11 6v13.3" stroke="currentColor" strokeWidth="2" />
      <path d="M19.4 34.5v-7.1h9.2v7.1" stroke="currentColor" strokeWidth="2" />
      <path d="M24 15.2v-6.6" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="6.6" r="2.1" fill="currentColor" />
      <path d="M8.6 39.4h30.8" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export const Leaf = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M26.5 5.5C13 6.6 6.2 13 6.2 21.1c0 3.3 1.5 5.5 1.5 5.5s3.2-11 15.6-16.3" />
    <path d="M27.8 5.6c3.1 9.9-1.5 21.6-11.6 21.6-3.3 0-5.6-1.4-5.6-1.4s7.3-2.6 12.7-8.5" />
    <path d="M7.6 28.6 4.4 31.8" />
  </svg>
);

export const Seal = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="16" cy="13.4" r="9.2" />
    <path d="m11.4 21.4-1.7 8 6.3-3.2 6.3 3.2-1.7-8" />
    <path d="m16 8.8 1.8 3.7 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6L16 8.8Z" />
  </svg>
);

export const People = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11.6" cy="10.6" r="4.4" />
    <path d="M4 26.4c0-4.4 3.4-7.6 7.6-7.6s7.6 3.2 7.6 7.6" />
    <path d="M21.4 7.2a4.4 4.4 0 0 1 .6 8.6" />
    <path d="M23.4 19.4c3.1.9 5.4 3.8 5.4 7" />
  </svg>
);

export const Speech = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4.6 19.6V8.2A2.6 2.6 0 0 1 7.2 5.6h13.4a2.6 2.6 0 0 1 2.6 2.6v6.4a2.6 2.6 0 0 1-2.6 2.6h-8l-6 4v-4H7.2a2.6 2.6 0 0 1-2.6-2.6Z" />
    <path d="M25.6 11.4h1.6a1.2 1.2 0 0 1 1.2 1.2v7.6a1.2 1.2 0 0 1-1.2 1.2h-1.4l3 3.4" />
    <path d="M8.8 10.4h9M8.8 13.8h5.6" />
  </svg>
);

export const Clock = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="16" cy="17" r="10.4" />
    <path d="M16 11v6l4.2 2.6" />
    <path d="M12 3.4 9.6 6M20 3.4 22.4 6" />
  </svg>
);

export const Heart = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 27.6S4.4 21 4.4 13.2A6.2 6.2 0 0 1 16 10.2a6.2 6.2 0 0 1 11.6 3c0 7.8-11.6 14.4-11.6 14.4Z" />
  </svg>
);

export const Bus = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4.6" y="6.4" width="22.8" height="17" rx="3" />
    <path d="M4.6 14.8h22.8M16 14.8V6.4" />
    <circle cx="10" cy="26.4" r="2.2" />
    <circle cx="22" cy="26.4" r="2.2" />
    <path d="M7.8 23.4v1.6M24.2 23.4v1.6" />
  </svg>
);

export const Microscope = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12.4 5.6 19 12l-4.6 4.6a4.6 4.6 0 1 1-6.6-6.6l4.6-4.4Z" />
    <path d="M18.4 21.4c3 1.6 4.8 4 4.8 6.6H6.8c0-2.4 1.6-4.4 4-5.8" />
    <path d="M27.2 28H4.8" />
    <path d="m16.6 8.6 3.4 3.4" />
  </svg>
);

export const Book = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 9.4C13.4 6.8 9.4 6 5 6.8v17.6c4.4-.8 8.4 0 11 2.6 2.6-2.6 6.6-3.4 11-2.6V6.8c-4.4-.8-8.4 0-11 2.6Z" />
    <path d="M16 9.4V27" />
  </svg>
);

export const Ball = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="16" cy="16" r="11.4" />
    <path d="m16 9.6 5 3.6-1.9 5.9h-6.2L11 13.2l5-3.6Z" />
    <path d="M16 4.6v5M27.4 14l-6.4-.4M22.6 26.4l-3.5-7.3M9.4 26.4l3.5-7.3M4.6 14l6.4-.4" />
  </svg>
);

export const Paw = (p: IconProps) => (
  <svg {...base(p)}>
    <ellipse cx="16" cy="21.4" rx="6.4" ry="5.4" />
    <ellipse cx="8.2" cy="14.4" rx="2.6" ry="3.4" />
    <ellipse cx="23.8" cy="14.4" rx="2.6" ry="3.4" />
    <ellipse cx="13.2" cy="8.6" rx="2.5" ry="3.4" />
    <ellipse cx="18.8" cy="8.6" rx="2.5" ry="3.4" />
  </svg>
);

export const Chip = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="9" y="9" width="14" height="14" rx="2.4" />
    <rect x="13.4" y="13.4" width="5.2" height="5.2" rx="1" />
    <path d="M13 4.6V9M19 4.6V9M13 23v4.4M19 23v4.4M4.6 13H9M4.6 19H9M23 13h4.4M23 19h4.4" />
  </svg>
);

export const Cap = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 6.4 3 12.6l13 6.2 13-6.2-13-6.2Z" />
    <path d="M8 15.4v6.2c0 2.2 3.6 4 8 4s8-1.8 8-4v-6.2" />
    <path d="M29 12.6v8.2" />
  </svg>
);

export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5.6 16h20.8" />
    <path d="m19.2 8.8 7.2 7.2-7.2 7.2" />
  </svg>
);

export const ArrowDown = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 5.6v20.8" />
    <path d="m8.8 19.2 7.2 7.2 7.2-7.2" />
  </svg>
);

export const Phone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M11.4 5.6H7.2A2.6 2.6 0 0 0 4.6 8.4C4.6 18.6 13.4 27.4 23.6 27.4a2.6 2.6 0 0 0 2.8-2.6v-4.2l-5.4-2.2-2.6 3a19.6 19.6 0 0 1-8-8l3-2.6-5-5.2Z" />
  </svg>
);

export const Mail = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.6" y="7.4" width="24.8" height="17.2" rx="2.6" />
    <path d="m4.8 9.4 11.2 8 11.2-8" />
  </svg>
);

export const Pin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 28.4s9.4-8.6 9.4-15.4A9.4 9.4 0 0 0 6.6 13c0 6.8 9.4 15.4 9.4 15.4Z" />
    <circle cx="16" cy="12.8" r="3.4" />
  </svg>
);

export const Plus = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 6.8v18.4M6.8 16h18.4" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m6 16.8 6.4 6.4L26 8.4" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4.8 10h22.4M4.8 16h22.4M4.8 22h14" />
  </svg>
);

export const Close = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M8 8l16 16M24 8 8 24" />
  </svg>
);

export const Star = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m16 4.6 3.7 7.6 8.4 1.2-6.1 5.9 1.5 8.3L16 23.7l-7.5 3.9 1.5-8.3-6.1-5.9 8.4-1.2L16 4.6Z" />
  </svg>
);

export const Globe = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="16" cy="16" r="11.6" />
    <path d="M4.4 16h23.2" />
    <path d="M16 4.4c3 3.2 4.6 7.2 4.6 11.6S19 24.4 16 27.6c-3-3.2-4.6-7.2-4.6-11.6S13 7.6 16 4.4Z" />
  </svg>
);

export const Instagram = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="5.4" y="5.4" width="21.2" height="21.2" rx="6.2" />
    <circle cx="16" cy="16" r="5" />
    <circle cx="22.2" cy="9.8" r="1.3" fill="currentColor" stroke="none" />
  </svg>
);

export const Facebook = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M19.4 28V17.4h3.6l.6-4.2h-4.2v-2.6c0-1.2.4-2 2.2-2h2.2V4.9c-.4 0-1.8-.2-3.4-.2-3.4 0-5.8 2-5.8 5.9v2.6h-3.6v4.2h3.6V28" />
  </svg>
);

export const WhatsApp = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4.6 27.4 6.4 21A11 11 0 1 1 11 25.6l-6.4 1.8Z" />
    <path d="M12 12.4c.3 3 2.6 5.3 5.6 5.6l1.4-1.8 2.4 1v1.6c0 .8-.7 1.5-1.5 1.4-5.1-.4-9.3-4.6-9.7-9.7-.1-.8.6-1.5 1.4-1.5h1.6l1 2.4-2.2 1Z" />
  </svg>
);

export const YouTube = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.6" y="8" width="24.8" height="16" rx="4.6" />
    <path d="m13.8 12.6 6.6 3.4-6.6 3.4v-6.8Z" />
  </svg>
);

/** Circular autoplay / scroll progress ring (SVG — reliable everywhere). */
export function ProgressRing({
  progress,
  className,
  stroke = 4,
  color = "var(--color-marigold)",
  track = "rgba(10,42,33,0.14)",
}: {
  progress: number;
  className?: string;
  stroke?: number;
  color?: string;
  track?: string;
}) {
  const r = 50 - stroke / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r={r} fill="none" stroke={track} strokeWidth={stroke} />
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - Math.max(0, Math.min(1, progress)))}
        transform="rotate(-90 50 50)"
      />
    </svg>
  );
}

export const iconMap = {
  seal: Seal,
  leaf: Leaf,
  people: People,
  speech: Speech,
  clock: Clock,
  heart: Heart,
  bus: Bus,
  cap: Cap,
} as const;
