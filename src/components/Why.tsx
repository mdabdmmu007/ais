import { pillars } from "../lib/data";
import { iconMap, ArrowRight } from "./Icons";
import { Reveal } from "../lib/motion";
import { cn } from "../utils/cn";

const layout: Record<number, string> = {
  0: "sm:col-span-2 lg:col-span-3 lg:row-span-2",
  1: "sm:col-span-2 lg:col-span-3",
  2: "sm:col-span-2 lg:col-span-3",
  3: "sm:col-span-1 lg:col-span-2",
  4: "sm:col-span-1 lg:col-span-2",
  5: "sm:col-span-2 lg:col-span-2",
  6: "sm:col-span-1 lg:col-span-3",
  7: "sm:col-span-1 lg:col-span-3",
};

const tones: Record<string, string> = {
  ink: "bg-ink text-bone",
  leaf: "bg-leaf text-ink",
  bone: "border border-ink/12 bg-bone-100 text-ink",
  marigold: "bg-marigold text-ink",
  clay: "bg-clay text-bone",
  cobalt: "bg-cobalt text-bone",
};

export default function Why() {
  return (
    <section id="why" className="relative overflow-hidden bg-bone py-24 lg:py-32">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] text-ink/45 uppercase">
              <span className="h-px w-10 bg-ink/30" />
              The AIS difference
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,6.4vw,4.6rem)] font-extrabold tracking-[-0.04em]">
              Not a bigger school.
              <br />A <span className="text-leaf-600">closer</span> one.
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={140}>
            <p className="text-[16px] leading-relaxed text-ink/65">
              Seventeen years in Kuala Lumpur have taught us one thing: children rise when they are known. Every
              structure here — the class caps, the tutor groups, the feeding rota at the mini zoo — exists so that an
              adult always knows your child's name, their week, and what they need next.
            </p>
            <a
              href="#day"
              className="group mt-6 inline-flex items-center gap-2.5 text-[13px] font-bold tracking-wide text-ink"
            >
              <span className="link-swipe">See a full school day</span>
              <span className="flex size-8 items-center justify-center rounded-full bg-ink text-bone transition-transform duration-300 group-hover:rotate-45">
                <ArrowRight className="size-3.5" />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(190px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {pillars.map((p, i) => {
            const Icon = iconMap[p.icon as keyof typeof iconMap] ?? iconMap.seal;
            const featured = i === 0;

            return (
              <Reveal key={p.title} className={cn(layout[i], "group relative")} delay={(i % 3) * 90}>
                <article
                  className={cn(
                    "relative flex h-full flex-col justify-between overflow-hidden p-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 sm:p-7",
                    tones[p.tone],
                    featured
                      ? "rounded-[2rem] rounded-bl-[5rem] shadow-[0_28px_60px_-34px_rgba(10,42,33,0.75)]"
                      : "rounded-[1.6rem]",
                  )}
                >
                  {featured && (
                    <>
                      <img
                        src={p.image}
                        alt="Teacher guiding AIS students through a lesson"
                        className="absolute inset-0 size-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/72 to-ink/12" />
                    </>
                  )}

                  <div className="relative flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "flex size-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110",
                        featured ? "border-bone/25 bg-bone/10 text-marigold backdrop-blur" : "border-current/20 bg-current/10",
                      )}
                    >
                      <Icon className="size-6" />
                    </span>
                    <span
                      className={cn(
                        "font-display text-[11px] font-bold tracking-[0.18em]",
                        featured ? "text-bone/45" : "opacity-35",
                      )}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <h3
                      className={cn(
                        "font-display font-extrabold tracking-[-0.03em]",
                        featured ? "text-[clamp(1.8rem,3.4vw,2.6rem)]" : "text-[22px]",
                      )}
                    >
                      {p.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-2.5 leading-relaxed",
                        featured ? "max-w-sm text-[14.5px] text-bone/72" : "text-[13.5px] opacity-75",
                      )}
                    >
                      {p.body}
                    </p>

                    {p.stat && (
                      <div className={cn("mt-5 flex items-baseline gap-2.5", featured && "text-bone")}>
                        <span className="font-display text-[34px] leading-none font-extrabold">{p.stat.value}</span>
                        <span className="text-[11px] font-bold tracking-[0.16em] uppercase opacity-60">
                          {p.stat.label}
                        </span>
                      </div>
                    )}
                  </div>

                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100",
                      featured ? "bg-marigold" : "bg-ink/70",
                    )}
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
