import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { heroFacts, px, school } from "../lib/data";
import { useScrollY } from "../lib/motion";
import { ArrowDown, ArrowRight, Crest, Leaf, Star } from "./Icons";

const partners = [
  "Cambridge Assessment International Education",
  "Council of International Schools",
  "COBIS · British Schools Overseas",
  "Microsoft Showcase School",
  "Cambridge English Qualifications",
  "FIFA Quality Programme pitches",
];

function Line({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="mask-line">
      <span style={{ ["--reveal-delay" as string]: `${delay}ms` }}>{children}</span>
    </span>
  );
}

export default function Hero() {
  const [ready, setReady] = useState(false);
  const y = useScrollY();

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 90);
    return () => clearTimeout(t);
  }, []);

  const shift = Math.min(y, 700);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-0 lg:pt-36">
      {/* ---- layered ambient background ---- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-bone" />
        <div className="rule-grid absolute inset-0 opacity-70" />
        <div
          className="absolute -top-40 -right-32 size-[46rem] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(147,201,63,0.34) 0%, rgba(147,201,63,0.10) 42%, transparent 70%)",
            transform: `translateY(${shift * 0.08}px)`,
          }}
        />
        <div
          className="absolute top-1/3 -left-40 size-[34rem] rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(240,169,43,0.28) 0%, rgba(240,169,43,0.06) 45%, transparent 72%)",
            transform: `translateY(${-shift * 0.05}px)`,
          }}
        />
        <svg className="absolute inset-x-0 bottom-0 h-[42vh] w-full text-ink/8" preserveAspectRatio="none" viewBox="0 0 1200 300">
          <path
            d="M0 240C120 190 210 250 320 210s180-96 300-70 210 96 330 66 170-56 250-84v178H0V240Z"
            fill="currentColor"
            opacity="0.35"
          />
        </svg>
        {/* floating leaves */}
        <Leaf className="absolute top-[18%] left-[4%] hidden size-16 animate-float text-leaf-600/25 lg:block" />
        <Leaf
          className="absolute top-[62%] left-[46%] hidden size-10 animate-float-slow text-marigold/30 lg:block"
          style={{ animationDelay: "-3s" }}
        />
        <Star className="absolute top-[12%] right-[46%] hidden size-6 animate-spin-slow text-clay/30 lg:block" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className={cn("grid items-end gap-12 lg:grid-cols-12 lg:gap-8", ready && "is-in")}>
          {/* ---------------- copy ---------------- */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div
              className="flex flex-wrap items-center gap-3 transition-all duration-700"
              style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(14px)" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-leaf-600/30 bg-leaf/15 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.16em] text-ink-700 uppercase">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ring rounded-full bg-leaf-600" />
                  <span className="relative inline-flex size-2 rounded-full bg-leaf-600" />
                </span>
                Admissions open 2026/27
              </span>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-ink/50 uppercase">
                Cambridge certified · Est. {school.established} · {school.city}
              </span>
            </div>

            <h1 className="mt-6 font-display text-[clamp(2.9rem,8.4vw,6.4rem)] font-extrabold tracking-[-0.045em] text-ink">
              <Line delay={120}>Where curious</Line>
              <Line delay={220}>
                kids become{" "}
                <span className="relative inline-block">
                  <span className="underline-sketch">capable</span>
                </span>
              </Line>
              <Line delay={320}>
                young <em className="font-quote text-[0.82em] font-medium text-marigold-600 italic">leaders</em>.
              </Line>
            </h1>

            <p
              className="mt-7 max-w-xl text-[16.5px] leading-relaxed text-ink/70 transition-all duration-700 sm:text-[17.5px]"
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? "none" : "translateY(18px)",
                transitionDelay: "520ms",
              }}
            >
              A green-concept campus in the heart of Kuala Lumpur, taking children from{" "}
              <strong className="font-semibold text-ink">Nursery to IGCSE O&nbsp;Levels</strong> — with classes capped
              at twenty, real laboratories, two FIFA-standard pitches and a mini zoo the students run themselves.
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-3.5 transition-all duration-700"
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? "none" : "translateY(18px)",
                transitionDelay: "620ms",
              }}
            >
              <a
                href="#admissions"
                className="group relative overflow-hidden rounded-full bg-ink px-7 py-4 text-[14px] font-bold text-bone shadow-[0_18px_38px_-18px_rgba(10,42,33,0.9)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.99]"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  Book a campus tour
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
                <span className="absolute inset-0 translate-y-full bg-marigold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
              </a>
              <a
                href="#programmes"
                className="group flex items-center gap-2.5 rounded-full border-2 border-ink/15 px-6 py-3.5 text-[14px] font-bold text-ink transition-colors duration-300 hover:border-ink/50"
              >
                Explore programmes
                <span className="flex size-6 items-center justify-center rounded-full bg-ink text-bone transition-transform duration-300 group-hover:rotate-90">
                  <ArrowRight className="size-3" />
                </span>
              </a>
            </div>

            <dl
              className="mt-11 flex flex-wrap gap-x-10 gap-y-5 border-t border-ink/12 pt-6 transition-all duration-700"
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? "none" : "translateY(18px)",
                transitionDelay: "720ms",
              }}
            >
              {heroFacts.map((f) => (
                <div key={f.k}>
                  <dt className="text-[10px] font-bold tracking-[0.2em] text-ink/45 uppercase">{f.k}</dt>
                  <dd className="mt-1 font-display text-[26px] font-extrabold tracking-tight text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ---------------- photo stack ---------------- */}
          <div className="relative lg:col-span-5">
            <div
              className="relative mx-auto max-w-[520px] lg:max-w-none"
              style={{ transform: `translateY(${-shift * 0.045}px)` }}
            >
              <div
                className="tape relative aspect-4/5 overflow-hidden rounded-[2rem] rounded-tr-[6rem] border border-ink/10 transition-all duration-1000"
                style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "scale(0.96) translateY(26px)" }}
              >
                <img
                  src={px(8364065, 900, 1150)}
                  alt="AIS students gathered around their teacher in a bright classroom"
                  className="size-full animate-kenburns object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/25" />
                <div className="absolute top-5 right-5 flex flex-col items-end gap-2">
                  <span className="rounded-full bg-bone/95 px-3 py-1.5 text-[10px] font-extrabold tracking-[0.16em] text-ink uppercase backdrop-blur">
                    Nursery → IGCSE
                  </span>
                  <span className="rounded-full bg-ink/65 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-bone uppercase backdrop-blur">
                    Setapak · Kuala Lumpur
                  </span>
                </div>
              </div>

              {/* rotating seal badge */}
              <div
                className="absolute -top-6 -left-4 size-28 transition-all duration-1000 sm:-left-8 sm:size-32"
                style={{
                  opacity: ready ? 1 : 0,
                  transform: ready ? "none" : "scale(0.7)",
                  transitionDelay: "600ms",
                }}
              >
                <div className="relative size-full rounded-full bg-ink text-bone shadow-[0_20px_40px_-20px_rgba(10,42,33,0.9)]">
                  <svg viewBox="0 0 120 120" className="absolute inset-0 size-full animate-spin-slow">
                    <defs>
                      <path
                        id="sealRing"
                        d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
                        fill="none"
                      />
                    </defs>
                    <text
                      fill="currentColor"
                      className="font-body"
                      style={{ fontSize: 10.4, letterSpacing: "2.5px", fontWeight: 600 }}
                    >
                      <textPath href="#sealRing" startOffset="0%">
                        AIS INTERNATIONAL SCHOOL · KUALA LUMPUR · EST 2008 ·
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Crest className="h-9 text-marigold" />
                  </div>
                </div>
              </div>

              {/* results card */}
              <div
                className="absolute -bottom-10 -left-3 w-[150px] rounded-2xl border border-ink/10 bg-bone-100/95 p-3.5 backdrop-blur-md transition-all duration-1000 sm:-left-8 sm:w-[214px] sm:p-4"
                style={{
                  opacity: ready ? 1 : 0,
                  transform: ready ? "none" : "translateY(24px) scale(0.94)",
                  transitionDelay: "760ms",
                }}
              >
                <p className="text-[10px] font-bold tracking-[0.18em] text-ink/45 uppercase">IGCSE 2025</p>
                <p className="mt-1 font-display text-[38px] leading-none font-extrabold text-ink">
                  92<span className="text-marigold-600">%</span>
                </p>
                <p className="mt-1 text-[11.5px] font-semibold text-ink/60">graded A*–B</p>
                <div className="mt-3 flex items-end gap-1">
                  {[38, 62, 45, 80, 55, 92, 70].map((h, i) => (
                    <span
                      key={i}
                      className="w-2.5 rounded-sm bg-leaf-600/70 transition-all duration-700"
                      style={{
                        height: ready ? `${h * 0.42}px` : "2px",
                        transitionDelay: `${900 + i * 70}ms`,
                        background: i === 5 ? "var(--color-marigold)" : undefined,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* student quote card */}
              <div
                className="tape absolute -right-3 -bottom-12 w-[164px] rounded-2xl bg-ink p-4 text-bone transition-all duration-1000 hover:rotate-0 sm:-right-6 sm:w-[228px] sm:p-5"
                style={{
                  opacity: ready ? 1 : 0,
                  transform: ready ? "rotate(2.5deg)" : "translateY(30px)",
                  transitionDelay: "880ms",
                }}
              >
                <p className="font-quote text-[13px] leading-snug italic sm:text-[15px]">
                  “Everyone is treated as one. It is a second home to me.”
                </p>
                <p className="mt-3 flex items-center gap-2 text-[9px] font-bold tracking-[0.16em] text-marigold uppercase sm:text-[10.5px]">
                  <span className="h-px w-5 bg-marigold/60" />
                  Sabrina · Year 10
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="mt-20 flex items-center justify-between gap-6 border-t border-ink/12 py-5 lg:mt-24">
          <a
            href="#why"
            className="group flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-ink/50 uppercase transition hover:text-ink"
          >
            <span className="flex size-9 items-center justify-center rounded-full border border-ink/20 transition group-hover:border-ink group-hover:bg-ink group-hover:text-bone">
              <ArrowDown className="size-4 animate-bounce" />
            </span>
            Scroll to explore
          </a>
          <p className="hidden max-w-sm text-right text-[12px] leading-relaxed text-ink/45 md:block">
            Setapak · 6 acres of rain trees, gardens and playing fields — eight minutes from the city centre.
          </p>
        </div>
      </div>

      {/* accreditation marquee */}
      <div className="relative mt-2 border-y border-ink/10 bg-bone-100/70 py-4">
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <span
                key={i}
                className="flex items-center gap-12 font-display text-[13px] font-semibold tracking-[0.14em] text-ink/40 uppercase"
              >
                {p}
                <span className="size-1.5 rounded-full bg-marigold/70" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
