import { useEffect, useRef, useState } from "react";
import { programmes } from "../lib/data";
import { ArrowRight, Check } from "./Icons";
import { Reveal } from "../lib/motion";
import { cn } from "../utils/cn";

const DURATION = 7200;

export default function Programmes() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const raf = useRef(0);
  const start = useRef(0);

  const p = programmes[active];

  useEffect(() => {
    if (paused) return;
    start.current = performance.now() - progress * DURATION;
    const tick = (now: number) => {
      const elapsed = now - start.current;
      const ratio = elapsed / DURATION;
      if (ratio >= 1) {
        setProgress(0);
        setActive((a) => (a + 1) % programmes.length);
        start.current = now;
      } else {
        setProgress(ratio);
        raf.current = requestAnimationFrame(tick);
      }
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, active]);

  const select = (i: number) => {
    setActive(i);
    setProgress(0);
  };

  return (
    <section id="programmes" className="relative overflow-hidden bg-bone-100 py-24 lg:py-32">
      <div aria-hidden className="rule-grid pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 h-[38rem] w-[38rem] rounded-full opacity-50 blur-3xl transition-colors duration-1000"
        style={{ background: `radial-gradient(circle, ${p.accent}33 0%, transparent 68%)` }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] text-ink/45 uppercase">
              <span className="h-px w-10 bg-ink/30" />
              Our programmes
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,6.4vw,4.6rem)] font-extrabold tracking-[-0.04em]">
              Four stages,
              <br />
              one continuous journey.
            </h2>
          </Reveal>
          <Reveal delay={120} className="max-w-sm">
            <p className="text-[15px] leading-relaxed text-ink/65">
              From the mud kitchen in Nursery to the IGCSE exam hall, the same teachers, the same campus and the same
              expectation: that your child leaves able to think, speak and build for themselves.
            </p>
          </Reveal>
        </div>

        <div
          className="mt-14 grid gap-6 lg:grid-cols-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* ---------- rail ---------- */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="flex flex-col gap-2.5">
              {programmes.map((prog, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={prog.id}
                    type="button"
                    onClick={() => select(i)}
                    aria-pressed={isActive}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border text-left transition-all duration-500",
                      isActive
                        ? "border-transparent bg-ink text-bone shadow-[0_20px_44px_-26px_rgba(10,42,33,0.9)]"
                        : "border-ink/12 bg-bone/60 text-ink hover:border-ink/30 hover:bg-bone",
                    )}
                  >
                    <div className="relative flex items-center gap-4 p-4 sm:p-5">
                      <span
                        className={cn(
                          "font-display text-[13px] font-extrabold tracking-[0.1em] transition-colors",
                          isActive ? "text-marigold" : "text-ink/35",
                        )}
                      >
                        {prog.index}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-[20px] font-bold tracking-[-0.02em] sm:text-[23px]">
                          {prog.name}
                        </span>
                        <span className={cn("mt-0.5 block text-[12px]", isActive ? "text-bone/60" : "text-ink/50")}>
                          {prog.ages} · {prog.years}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-500",
                          isActive
                            ? "bg-marigold text-ink"
                            : "bg-ink/6 text-ink/40 group-hover:bg-ink group-hover:text-bone",
                        )}
                      >
                        <ArrowRight className="size-4" />
                      </span>
                    </div>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 h-[3px] bg-marigold" style={{ width: `${progress * 100}%` }} />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-between rounded-2xl border border-ink/12 bg-bone/70 px-5 py-4">
              <p className="text-[12.5px] leading-snug text-ink/60">
                Not sure which stage fits?
                <br />
                <span className="font-semibold text-ink">We will place your child with you.</span>
              </p>
              <a
                href="#admissions"
                className="shrink-0 rounded-full bg-ink px-4 py-2.5 text-[12px] font-bold text-bone transition hover:bg-marigold hover:text-ink"
              >
                Ask us
              </a>
            </div>
          </div>

          {/* ---------- panel ---------- */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="relative h-full overflow-hidden rounded-[2rem] rounded-tr-[5rem] border border-ink/10 bg-bone shadow-[0_30px_70px_-46px_rgba(10,42,33,0.8)]">
              <div className="grid h-full sm:grid-cols-2">
                <div className="relative min-h-[260px] overflow-hidden sm:min-h-full">
                  {programmes.map((prog, i) => (
                    <img
                      key={prog.id}
                      src={prog.image}
                      alt={`${prog.name} at AIS International School`}
                      loading="lazy"
                      className={cn(
                        "absolute inset-0 size-full object-cover transition-all duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)]",
                        i === active ? "scale-100 opacity-100" : "scale-105 opacity-0",
                      )}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-bone/10" />
                  <div className="absolute top-4 left-4 rounded-full bg-bone/95 px-3.5 py-1.5 text-[10.5px] font-bold tracking-[0.16em] uppercase backdrop-blur">
                    {p.ages}
                  </div>
                </div>

                <div key={p.id} className="flex flex-col justify-between gap-6 p-6 sm:p-8">
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className="h-2.5 w-2.5 rounded-full transition-colors duration-500"
                        style={{ background: p.accent }}
                      />
                      <span className="text-[10.5px] font-bold tracking-[0.2em] text-ink/45 uppercase">{p.years}</span>
                    </div>
                    <h3 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.7rem)] font-extrabold tracking-[-0.035em]">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-ink/70">{p.blurb}</p>

                    <ul className="mt-6 space-y-2.5">
                      {p.points.map((pt, i) => (
                        <li
                          key={pt}
                          className="flex items-start gap-3 text-[13.5px] leading-snug text-ink/80"
                          style={{ animation: `riseIn .6s cubic-bezier(.16,1,.3,1) ${120 + i * 90}ms both` }}
                        >
                          <span
                            className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full text-bone"
                            style={{ background: p.accent }}
                          >
                            <Check className="size-3" strokeWidth={2.6} />
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2">
                      {p.chips.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-ink/15 bg-bone-100 px-3 py-1.5 text-[11px] font-semibold text-ink/70 transition hover:-translate-y-0.5 hover:border-ink/40"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#admissions"
                      className="group mt-6 inline-flex items-center gap-2.5 text-[13px] font-bold text-ink"
                    >
                      <span className="link-swipe">Enquire about {p.name}</span>
                      <span
                        className="flex size-8 items-center justify-center rounded-full text-bone transition-transform duration-300 group-hover:translate-x-1"
                        style={{ background: p.accent }}
                      >
                        <ArrowRight className="size-4" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
