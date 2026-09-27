import { useEffect, useRef, useState } from "react";
import { dayAt } from "../lib/data";
import { Clock } from "./Icons";
import { Reveal } from "../lib/motion";
import { cn } from "../utils/cn";

const toMinutes = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

export default function Day() {
  const wrap = useRef<HTMLDivElement>(null);
  const [fill, setFill] = useState(0);
  const [nowIndex, setNowIndex] = useState<number | null>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = wrap.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const anchor = window.innerHeight * 0.55;
        const p = (anchor - r.top) / r.height;
        setFill(Math.max(0, Math.min(1, p)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const check = () => {
      const d = new Date();
      const mins = d.getHours() * 60 + d.getMinutes();
      const weekday = d.getDay() >= 1 && d.getDay() <= 5;
      if (!weekday || mins < toMinutes("07:10") || mins > toMinutes("18:00")) {
        setNowIndex(null);
        return;
      }
      let idx = 0;
      dayAt.forEach((item, i) => {
        if (mins >= toMinutes(item.time)) idx = i;
      });
      setNowIndex(idx);
    };
    check();
    const t = setInterval(check, 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="day" className="relative overflow-hidden bg-bone py-24 lg:py-32">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-35" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] text-ink/45 uppercase">
              <span className="h-px w-10 bg-ink/30" />
              A day at AIS
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,6.4vw,4.6rem)] font-extrabold tracking-[-0.04em]">
              07:15 <span className="text-ink/30">→</span> 18:00,
              <br />
              nothing wasted.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
            <div className="rounded-2xl border border-ink/12 bg-bone-100 p-5">
              <div className="flex items-center gap-2.5 text-[11px] font-bold tracking-[0.18em] text-ink/45 uppercase">
                <Clock className="size-4 text-marigold-600" />
                Bell schedule
              </div>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink/70">
                Seven academic periods, thirty minutes outside every single day, a co-curricular hour before buses and
                homework club until six. Extended care is included in tuition for every family that needs it.
              </p>
            </div>
          </Reveal>
        </div>

        <div ref={wrap} className="relative mt-16 lg:mt-20">
          {/* track */}
          <div className="absolute top-0 bottom-0 left-[13px] w-[2px] bg-ink/12 lg:left-1/2 lg:-translate-x-1/2">
            <div
              className="w-full bg-gradient-to-b from-leaf-600 via-marigold to-clay"
              style={{ height: `${fill * 100}%` }}
            />
          </div>

          <ol className="space-y-8 lg:space-y-2">
            {dayAt.map((item, i) => {
              const right = i % 2 === 1;
              const isNow = nowIndex === i;
              return (
                <Reveal
                  as="li"
                  key={item.time}
                  dir={right ? "right" : "left"}
                  className="relative lg:min-h-[112px]"
                >
                  <div
                    className={cn(
                      "relative flex gap-5 pl-10 lg:w-1/2 lg:pl-0",
                      right ? "lg:ml-auto lg:pl-14" : "lg:pr-14 lg:text-right",
                    )}
                  >
                    {/* node */}
                    <span
                      className={cn(
                        "absolute top-2 left-0 z-10 flex size-7 items-center justify-center rounded-full border-2 bg-bone transition-all duration-500 lg:left-auto",
                        right ? "lg:-left-3.5" : "lg:-right-3.5",
                        isNow ? "border-marigold text-marigold-600" : "border-ink/20 text-ink/35",
                      )}
                    >
                      {isNow ? (
                        <>
                          <span className="absolute size-full animate-ring rounded-full bg-marigold/70" />
                          <span className="size-2 rounded-full bg-marigold" />
                        </>
                      ) : (
                        <span className="size-2 rounded-full bg-current" />
                      )}
                    </span>

                    <div
                      className={cn(
                        "group w-full rounded-2xl border p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_48px_-30px_rgba(10,42,33,0.7)]",
                        isNow ? "border-marigold/50 bg-marigold/10" : "border-ink/10 bg-bone-100 hover:border-ink/25",
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-baseline gap-3",
                          !right && "lg:flex-row-reverse",
                        )}
                      >
                        <span className="font-display text-[24px] leading-none font-extrabold tracking-[-0.02em] text-ink">
                          {item.time}
                        </span>
                        <span className="text-[11px] font-bold tracking-[0.16em] text-ink/40 uppercase">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {isNow && (
                          <span className="rounded-full bg-marigold px-2.5 py-1 text-[9.5px] font-extrabold tracking-[0.16em] text-ink uppercase">
                            Happening now
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2.5 font-display text-[19px] font-bold tracking-[-0.02em]">{item.title}</h3>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/62">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
