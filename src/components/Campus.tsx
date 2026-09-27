import { useCallback, useEffect, useRef, useState } from "react";
import { facilities, gallery } from "../lib/data";
import { ArrowRight, Close, Leaf } from "./Icons";
import { Reveal } from "../lib/motion";
import { cn } from "../utils/cn";

const greenStats = [
  { value: "6", label: "acres of grounds" },
  { value: "120", label: "mature rain trees" },
  { value: "18", label: "class garden beds" },
  { value: "74%", label: "waste diverted" },
];

export default function Campus() {
  const rail = useRef<HTMLDivElement>(null);
  const [railProgress, setRailProgress] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const onRailScroll = () => {
    const el = rail.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setRailProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  const nudge = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setLightbox((l) => ((l ?? 0) + 1) % gallery.length);
      if (e.key === "ArrowLeft") setLightbox((l) => ((l ?? 0) - 1 + gallery.length) % gallery.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close]);

  return (
    <section id="campus" className="grain relative overflow-hidden bg-ink py-24 text-bone lg:py-32">
      <div aria-hidden className="dark-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-52 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full opacity-45 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(147,201,63,0.35) 0%, transparent 68%)" }}
      />
      <Leaf className="pointer-events-none absolute top-24 right-[6%] hidden size-24 animate-float text-leaf/15 lg:block" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] text-bone/45 uppercase">
              <span className="h-px w-10 bg-bone/30" />
              Green concept campus
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,6.4vw,4.6rem)] font-extrabold tracking-[-0.04em]">
              Six green acres in the
              <br />
              middle of <span className="text-leaf">Kuala Lumpur</span>.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <p className="text-[15.5px] leading-relaxed text-bone/65">
              Two FIFA-standard pitches, three science laboratories, an open library and a mini zoo — all under one
              canopy of rain trees. Most of the learning that matters here happens outside a classroom.
            </p>
          </Reveal>
        </div>

        {/* green stats */}
        <Reveal className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-bone/12 bg-bone/10 sm:grid-cols-4">
          {greenStats.map((s) => (
            <div key={s.label} className="bg-ink px-5 py-6 transition-colors duration-400 hover:bg-ink-700">
              <p className="font-display text-[clamp(1.8rem,3.6vw,2.6rem)] leading-none font-extrabold text-leaf">
                {s.value}
              </p>
              <p className="mt-2 text-[11.5px] font-semibold tracking-[0.12em] text-bone/55 uppercase">{s.label}</p>
            </div>
          ))}
        </Reveal>

        {/* facilities rail */}
        <div className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <h3 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold tracking-[-0.03em]">
              Facilities
            </h3>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => nudge(-1)}
                aria-label="Previous facilities"
                className="flex size-11 items-center justify-center rounded-full border border-bone/25 transition hover:bg-bone hover:text-ink"
              >
                <ArrowRight className="size-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => nudge(1)}
                aria-label="Next facilities"
                className="flex size-11 items-center justify-center rounded-full bg-marigold text-ink transition hover:bg-bone"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          <div
            ref={rail}
            onScroll={onRailScroll}
            className="no-bar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
          >
            {facilities.map((f, i) => (
              <article
                key={f.name}
                data-card
                className="group relative w-[268px] shrink-0 snap-start overflow-hidden rounded-[1.5rem] border border-bone/12 bg-ink-800 sm:w-[312px]"
              >
                <div className="relative aspect-4/5 overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.name}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.09]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                  <span className="absolute top-4 left-4 font-display text-[11px] font-bold tracking-[0.18em] text-bone/55">
                    0{i + 1}
                  </span>
                  <span className="absolute top-4 right-4 rounded-full bg-bone/12 px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-bone/85 uppercase backdrop-blur">
                    {f.meta}
                  </span>
                </div>
                <div className="relative -mt-14 p-5">
                  <h4 className="font-display text-[20px] font-bold tracking-[-0.02em]">{f.name}</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-bone/60 transition-colors duration-500 group-hover:text-bone/85">
                    {f.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-bone/12">
            <div
              className="h-full rounded-full bg-marigold transition-[width] duration-150"
              style={{ width: `${Math.max(8, railProgress * 100)}%` }}
            />
          </div>
        </div>

        {/* scattered postcards */}
        <div className="mt-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold tracking-[-0.03em]">
              Campus life, unposed
            </h3>
            <p className="text-[12.5px] tracking-[0.14em] text-bone/45 uppercase">Tap any frame to enlarge</p>
          </Reveal>

          <div className="mt-8 gap-3 sm:gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3 xl:columns-4">
            {gallery.map((g, i) => (
              <Reveal
                key={g.src}
                delay={(i % 4) * 80}
                dir="zoom"
                className="mb-3 break-inside-avoid sm:mb-4"
              >
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  className={cn(
                    "group relative block w-full overflow-hidden rounded-[1.2rem] border border-bone/12 transition-all duration-500 hover:-translate-y-1.5 hover:border-marigold/50",
                    g.tall ? "aspect-3/4" : "aspect-4/3",
                  )}
                  style={{ rotate: `${i % 2 === 0 ? -0.7 : 0.8}deg` }}
                >
                  <img
                    src={g.src}
                    alt={g.label}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
                  <span className="absolute bottom-3 left-3.5 translate-y-2 text-left text-[12px] font-semibold text-bone opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {g.label}
                  </span>
                  <span className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-bone/15 text-bone opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
                    <ArrowRight className="size-3.5 -rotate-45" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/94 p-4 backdrop-blur-md"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={gallery[lightbox].label}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close image"
            className="absolute top-5 right-5 flex size-12 items-center justify-center rounded-full border border-bone/25 text-bone transition hover:bg-bone hover:text-ink"
          >
            <Close className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((l) => ((l ?? 0) - 1 + gallery.length) % gallery.length);
            }}
            className="absolute left-3 flex size-12 items-center justify-center rounded-full border border-bone/25 text-bone transition hover:bg-bone hover:text-ink sm:left-8"
          >
            <ArrowRight className="size-5 rotate-180" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((l) => ((l ?? 0) + 1) % gallery.length);
            }}
            className="absolute right-3 flex size-12 items-center justify-center rounded-full border border-bone/25 text-bone transition hover:bg-bone hover:text-ink sm:right-8"
          >
            <ArrowRight className="size-5" />
          </button>
          <figure className="max-h-[86vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[lightbox].src}
              alt={gallery[lightbox].label}
              className="max-h-[74vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center font-display text-[15px] font-semibold text-bone/80">
              {gallery[lightbox].label}
              <span className="ml-3 text-[12px] text-bone/40">
                {lightbox + 1} / {gallery.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
