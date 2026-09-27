import { useState } from "react";
import { events, gallery, news } from "../lib/data";
import { ArrowRight, Instagram, Plus } from "./Icons";
import { Reveal } from "../lib/motion";
import { cn } from "../utils/cn";

export default function News() {
  const featured = news.find((n) => n.featured) ?? news[0];
  const rest = news.filter((n) => !n.featured);
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section id="news" className="relative overflow-hidden bg-bone py-24 lg:py-32">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] text-ink/45 uppercase">
              <span className="h-px w-10 bg-ink/30" />
              Newsroom & diary
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,6.4vw,4.6rem)] font-extrabold tracking-[-0.04em]">
              What is happening
              <br />
              on campus.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <a
              href="#diary"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-ink/15 px-6 py-3.5 text-[13px] font-bold text-ink transition hover:border-ink/50 hover:bg-ink hover:text-bone"
            >
              All news & events
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* featured */}
          <Reveal className="lg:col-span-7" dir="left">
            <button
              type="button"
              onClick={() => setOpenItem(openItem === featured.title ? null : featured.title)}
              aria-expanded={openItem === featured.title}
              className="group relative flex h-full min-h-[420px] w-full flex-col justify-end overflow-hidden rounded-[2rem] rounded-br-[5rem] border border-ink/10 text-left"
            >
              <div className="absolute inset-0">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/5" />
              </div>
              <div className="relative p-7 sm:p-9">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-marigold px-3 py-1.5 text-[10px] font-extrabold tracking-[0.16em] text-ink uppercase">
                    {featured.tag}
                  </span>
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] text-bone/60 uppercase">
                    {featured.date} 2025
                  </span>
                </div>
                <h3 className="mt-5 max-w-lg font-display text-[clamp(1.7rem,3.6vw,2.6rem)] font-extrabold tracking-[-0.035em] text-bone">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-bone/70">{featured.body}</p>
                <div
                  className={cn(
                    "grid transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    openItem === featured.title ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <p className="overflow-hidden max-w-lg text-[13.5px] leading-relaxed text-bone/60">
                    {featured.full}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2.5 text-[12.5px] font-bold text-bone">
                  <span className="link-swipe">
                    {openItem === featured.title ? "Close the story" : "Read the story"}
                  </span>
                  <span className="flex size-8 items-center justify-center rounded-full bg-bone text-ink transition-transform duration-300 group-hover:translate-x-1.5">
                    <ArrowRight className="size-4" />
                  </span>
                </span>
              </div>
            </button>
          </Reveal>

          {/* list */}
          <div className="grid gap-4 lg:col-span-5">
            {rest.map((n, i) => (
              <Reveal key={n.title} delay={i * 90} dir="right">
                <button
                  type="button"
                  onClick={() => setOpenItem(openItem === n.title ? null : n.title)}
                  aria-expanded={openItem === n.title}
                  className="group flex w-full items-stretch gap-4 overflow-hidden rounded-2xl border border-ink/10 bg-bone-100 p-3 text-left transition-all duration-500 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_24px_46px_-32px_rgba(10,42,33,0.8)]"
                >
                  <div className="relative size-24 shrink-0 overflow-hidden rounded-xl sm:size-28">
                    <img
                      src={n.image}
                      alt={n.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center py-1 pr-2">
                    <div className="flex items-center gap-2.5 text-[10px] font-bold tracking-[0.16em] uppercase">
                      <span className="text-clay">{n.tag}</span>
                      <span className="text-ink/25">•</span>
                      <span className="text-ink/40">{n.date}</span>
                    </div>
                    <h4 className="mt-1.5 font-display text-[17px] leading-tight font-bold tracking-[-0.02em] transition-colors group-hover:text-leaf-600">
                      {n.title}
                    </h4>
                    <p
                      className={cn(
                        "mt-1.5 text-[13px] leading-snug text-ink/58 transition-all duration-500",
                        openItem === n.title ? "line-clamp-none" : "line-clamp-2",
                      )}
                    >
                      {n.body}
                    </p>
                    <span className="mt-2 flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-ink/40 uppercase transition-colors group-hover:text-ink">
                      <Plus
                        className={cn(
                          "size-3.5 transition-transform duration-500",
                          openItem === n.title && "rotate-135",
                        )}
                      />
                      {openItem === n.title ? "Read less" : "Read more"}
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        {/* diary */}
        <Reveal id="diary" className="mt-16 scroll-mt-28">
          <div className="flex items-center gap-4">
            <h3 className="font-display text-[clamp(1.4rem,2.6vw,1.9rem)] font-extrabold tracking-[-0.03em]">
              Upcoming dates
            </h3>
            <span className="h-px flex-1 bg-ink/12" />
            <span className="text-[11px] font-bold tracking-[0.18em] text-ink/40 uppercase">Term 2 · 2026</span>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-ink/12 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 70}>
              <a
                href="#admissions"
                className="group flex h-full flex-col justify-between gap-6 bg-bone p-5 transition-colors duration-500 hover:bg-ink"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-display text-[38px] leading-none font-extrabold tracking-[-0.04em]">
                      {e.day}
                    </p>
                    <p className="mt-1 text-[11px] font-bold tracking-[0.2em] text-clay uppercase transition-colors group-hover:text-marigold">
                      {e.month}
                    </p>
                  </div>
                  <span className="flex size-8 items-center justify-center rounded-full border border-ink/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-bone/40 group-hover:bg-bone/10">
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
                <div>
                  <p className="font-display text-[16px] leading-tight font-bold transition-colors group-hover:text-bone">
                    {e.title}
                  </p>
                  <p className="mt-1.5 text-[12px] text-ink/50 transition-colors group-hover:text-bone/60">
                    {e.time} · {e.place}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* social strip */}
        <Reveal className="mt-16 overflow-hidden rounded-[1.8rem] border border-ink/12 bg-ink-800">
          <div className="grid lg:grid-cols-12">
            <div className="flex flex-col justify-between gap-6 p-7 sm:p-9 lg:col-span-4">
              <div>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-marigold text-ink">
                  <Instagram className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-[-0.03em] text-bone">
                  @ais.kl
                </h3>
                <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-bone/62">
                  Every No-Bag Day, every goal, every harvest. The campus feed is run by our student media club —
                  unpolished, unfiltered and mostly about rabbits.
                </p>
              </div>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-fit items-center gap-2.5 rounded-full bg-bone px-5 py-3 text-[12.5px] font-bold text-ink transition hover:bg-marigold"
              >
                Follow along
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-px bg-bone/10 sm:grid-cols-4 lg:col-span-8">
              {gallery.slice(0, 4).map((g) => (
                <a
                  key={g.src}
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={cn("group relative aspect-square overflow-hidden")}
                >
                  <img
                    src={g.src}
                    alt={g.label}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/45" />
                  <span className="absolute bottom-3 left-3 translate-y-3 text-[11.5px] font-semibold text-bone opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {g.label}
                  </span>
                </a>
              ))}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="col-span-2 flex items-center justify-between gap-4 bg-ink px-5 py-4 text-bone transition hover:bg-ink-700 sm:col-span-4"
              >
                <span className="text-[12.5px] font-semibold text-bone/70">
                  12,400 followers · 640 posts · Student media club
                </span>
                <span className="flex items-center gap-2 text-[12.5px] font-bold">
                  Open Instagram <ArrowRight className="size-4" />
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


