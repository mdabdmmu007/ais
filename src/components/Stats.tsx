import { stats } from "../lib/data";
import { useCountUp } from "../lib/motion";

function Stat({ value, suffix, label, sub }: { value: number; suffix: string; label: string; sub: string }) {
  const { ref, value: n } = useCountUp(value);
  return (
    <div
      ref={ref}
      className="group relative px-5 py-9 transition-colors duration-500 hover:bg-ink/[0.06] sm:px-7"
    >
      <p className="font-display text-[clamp(2.8rem,7vw,4.6rem)] leading-[0.85] font-extrabold tracking-[-0.05em] text-ink">
        {n}
        <span className="text-ink/60">{suffix}</span>
      </p>
      <p className="mt-4 text-[13px] leading-snug font-bold text-ink/80">{label}</p>
      <p className="mt-1 text-[11.5px] tracking-[0.1em] text-ink/45 uppercase">{sub}</p>
      <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-ink transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-2 sm:px-6 lg:px-10">
        <div className="grain relative -rotate-[1.1deg] scale-[1.02] overflow-hidden rounded-[2rem] bg-marigold shadow-[0_40px_80px_-50px_rgba(10,42,33,0.9)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(10,42,33,1) 0 1px, transparent 1px 14px)",
            }}
          />
          <div className="relative grid grid-cols-2 divide-x divide-y divide-ink/15 lg:grid-cols-5 lg:divide-y-0">
            {stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
