import { cn } from "../utils/cn";

type Props = {
  words: string[];
  tone?: "ink" | "marigold" | "leaf";
  reverse?: boolean;
  size?: string;
  className?: string;
};

const tones = {
  ink: "bg-ink text-bone",
  marigold: "bg-marigold text-ink",
  leaf: "bg-leaf-600 text-ink",
};

export default function Marquee({
  words,
  tone = "ink",
  reverse = false,
  size = "clamp(2.2rem,6vw,5rem)",
  className,
}: Props) {
  const row = (
    <div className="flex w-max shrink-0 items-center gap-8 pr-8">
      {words.map((w, i) => (
        <span key={i} className="flex items-center gap-8">
          <span className="font-display font-extrabold tracking-[-0.03em] whitespace-nowrap">{w}</span>
          <svg viewBox="0 0 24 24" className="size-[0.32em] shrink-0 opacity-70" aria-hidden style={{ width: "0.34em", height: "0.34em" }}>
            <path
              d="M12 0c.9 6.1 5.9 11.1 12 12-6.1.9-11.1 5.9-12 12-.9-6.1-5.9-11.1-12-12C6.1 11.1 11.1 6.1 12 0Z"
              fill="currentColor"
            />
          </svg>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("relative overflow-hidden py-6 select-none", tones[tone], className)}>
      <div
        className={cn("flex w-max", reverse ? "animate-marquee-slow" : "animate-marquee")}
        style={{
          fontSize: size,
          animationDirection: reverse ? "reverse" : undefined,
        }}
      >
        {row}
        {row}
      </div>
    </div>
  );
}
