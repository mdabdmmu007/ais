import { useEffect, useState } from "react";
import { voices } from "../lib/data";
import { ArrowRight, ProgressRing, Star } from "./Icons";
import { Reveal } from "../lib/motion";
import { cn } from "../utils/cn";

const HOLD = 8000;

export default function Voices() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (paused) return;
    setTick(0);
    const started = Date.now();
    const id = setInterval(() => {
      const elapsed = Date.now() - started;
      if (elapsed >= HOLD) {
        setI((v) => (v + 1) % voices.length);
      } else {
        setTick(elapsed / HOLD);
      }
    }, 60);
    return () => clearInterval(id);
  }, [i, paused]);

  const v = voices[i];

  return (
    <section
      id="voices"
      className="relative overflow-hidden bg-bone-100 py-24 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div aria-hidden className="rule-grid pointer-events-none absolute inset-0 opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 size-[36rem] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(196,86,47,0.16) 0%, transparent 68%)" }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] text-ink/45 uppercase">
              <span className="h-px w-10 bg-ink/30" />
              Voices of AIS
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-[-0.04em]">
              Ask the people
              <br />
              who are <span className="text-clay">here</span>.
            </h2>
            <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-ink/62">
              Students, parents and alumni, in their own words — collected across our last three annual surveys and
              graduation week.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex gap-0.5 text-marigold-600">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4" strokeWidth={1.4} />
                ))}
              </div>
              <p className="text-[12.5px] font-semibold text-ink/60">4.9 / 5 parent satisfaction · 2025 survey</p>
            </div>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-[2rem] rounded-tl-[5rem] border border-ink/10 bg-bone p-7 shadow-[0_34px_70px_-46px_rgba(10,42,33,0.8)] sm:p-10">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-8 right-4 font-quote text-[13rem] leading-none text-ink/6 select-none"
              >
                ”
              </span>

              <blockquote key={i} className="relative">
                <p
                  className="font-quote text-[clamp(1.3rem,2.9vw,2.05rem)] leading-[1.28] font-medium text-ink italic"
                  style={{ animation: "riseIn .7s cubic-bezier(.16,1,.3,1) both" }}
                >
                  {v.quote}
                </p>
              </blockquote>

              <div className="relative mt-9 flex flex-wrap items-center justify-between gap-6 border-t border-ink/10 pt-6">
                <div className="flex items-center gap-4">
                  <img
                    src={v.image}
                    alt={v.name}
                    loading="lazy"
                    className="size-14 rounded-full border-2 border-marigold/50 object-cover"
                  />
                  <div>
                    <p className="font-display text-[16px] font-bold tracking-[-0.01em]">{v.name}</p>
                    <p className="mt-0.5 text-[11.5px] font-semibold tracking-[0.12em] text-ink/45 uppercase">
                      {v.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setI((v2) => (v2 - 1 + voices.length) % voices.length)}
                    aria-label="Previous testimonial"
                    className="flex size-10 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:bg-ink hover:text-bone"
                  >
                    <ArrowRight className="size-4 rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setI((v2) => (v2 + 1) % voices.length)}
                    aria-label="Next testimonial"
                    className="flex size-10 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:bg-ink hover:text-bone"
                  >
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>

              {/* selector with autoplay ring */}
              <div className="mt-7 flex items-center gap-3">
                {voices.map((voice, idx) => {
                  const activeIdx = idx === i;
                  return (
                    <button
                      key={voice.name}
                      type="button"
                      onClick={() => setI(idx)}
                      aria-label={`Read testimonial from ${voice.name}`}
                      className="group relative size-11 shrink-0"
                    >
                      <img
                        src={voice.image}
                        alt=""
                        loading="lazy"
                        className={cn(
                          "size-full rounded-full object-cover transition-all duration-500",
                          activeIdx ? "opacity-100" : "opacity-45 grayscale group-hover:opacity-80 group-hover:grayscale-0",
                        )}
                      />
                      {activeIdx && (
                        <ProgressRing
                          progress={tick}
                          stroke={6}
                          className="pointer-events-none absolute -inset-1"
                        />
                      )}
                    </button>
                  );
                })}
                <span className="ml-auto hidden text-[11px] font-bold tracking-[0.18em] text-ink/35 uppercase sm:block">
                  {String(i + 1).padStart(2, "0")} / {String(voices.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
