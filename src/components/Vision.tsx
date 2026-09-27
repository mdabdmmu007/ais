import { px } from "../lib/data";
import { ArrowRight, Leaf, Star } from "./Icons";
import { Reveal } from "../lib/motion";

export default function Vision() {
  return (
    <section id="vision" className="relative overflow-hidden bg-bone py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -left-52 size-[38rem] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(147,201,63,0.22) 0%, transparent 68%)" }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          {/* sticky image */}
          <Reveal className="lg:col-span-5" dir="left">
            <div className="lg:sticky lg:top-28">
              <div className="tape relative aspect-4/5 overflow-hidden rounded-[2rem] rounded-tl-[5rem] border border-ink/10">
                <img
                  src={px(29204061, 900, 1150)}
                  alt="Tree-lined walkway across the AIS green concept campus"
                  loading="lazy"
                  className="size-full animate-kenburns object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <p className="font-display text-[17px] font-extrabold tracking-[-0.02em] text-bone">
                      The long walk to class
                    </p>
                    <p className="mt-1 text-[12px] tracking-[0.14em] text-bone/60 uppercase">
                      120 rain trees · 6 acres
                    </p>
                  </div>
                  <Leaf className="size-8 shrink-0 text-leaf" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { Icon: Star, label: "Est. 2008" },
                  { Icon: Leaf, label: "Green campus" },
                  { Icon: ArrowRight, label: "Nursery → IGCSE" },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-2.5 rounded-2xl border border-ink/12 bg-bone-100 px-3 py-3.5 transition hover:border-ink/35 hover:bg-bone"
                  >
                    <Icon className="size-4 shrink-0 text-marigold-600 transition-transform duration-500 group-hover:rotate-90" />
                    <span className="text-[11px] leading-tight font-bold tracking-wide text-ink/70">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* quotes */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] text-ink/45 uppercase">
                <span className="h-px w-10 bg-ink/30" />
                Vision & mission
              </p>
            </Reveal>

            <Reveal delay={90} className="mt-7 border-l-2 border-marigold pl-6 sm:pl-9">
              <h2 className="font-display text-[clamp(1.9rem,4.6vw,3.3rem)] leading-[1.04] font-extrabold tracking-[-0.04em]">
                “To be a leading institution for cultivating generations of young leaders to positively impact the
                world.”
              </h2>
              <p className="mt-4 text-[11px] font-bold tracking-[0.22em] text-ink/40 uppercase">Our vision</p>
            </Reveal>

            <Reveal delay={140} className="mt-12 border-l-2 border-leaf-600 pl-6 sm:pl-9">
              <p className="font-quote text-[clamp(1.25rem,2.6vw,1.85rem)] leading-[1.36] font-medium text-ink/85 italic">
                “Empowering students to unlock their academic and social excellence, developing them into versatile and
                happy individuals, with sterling career opportunities.”
              </p>
              <p className="mt-4 text-[11px] font-bold tracking-[0.22em] text-ink/40 uppercase">Our mission</p>
            </Reveal>

            <Reveal delay={180} className="mt-14 overflow-hidden rounded-[1.8rem] border border-ink/12 bg-bone-100">
              <div className="grid sm:grid-cols-12">
                <div className="relative sm:col-span-4">
                  <img
                    src={px(30649814, 600, 750)}
                    alt="A student ambassador at AIS International School"
                    loading="lazy"
                    className="size-full min-h-[220px] object-cover"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-bone-100" />
                </div>
                <div className="p-7 sm:col-span-8 sm:p-8">
                  <p className="text-[10.5px] font-bold tracking-[0.2em] text-clay uppercase">From the principal</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink/72">
                    We are not trying to build the largest school in Kuala Lumpur. We are trying to build the one where
                    a nine-year-old can explain, with confidence, why the tomatoes in her class bed are failing — and
                    then fix it. Rigour and kindness are not opposites here; they are the same subject.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-ink/10 pt-5">
                    <p className="font-quote text-[22px] text-ink italic">Dr. Amina Rahman</p>
                    <p className="text-[11.5px] font-bold tracking-[0.14em] text-ink/45 uppercase">
                      Principal · PhD Education, UCL
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220} className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink/12 bg-ink/10 sm:grid-cols-3">
              {[
                { k: "Learners", v: "Think first, answer second" },
                { k: "Community", v: "40+ nationalities, one campus" },
                { k: "Character", v: "Service hours every term" },
              ].map((c) => (
                <div key={c.k} className="bg-bone px-5 py-6 transition-colors duration-500 hover:bg-bone-100">
                  <p className="text-[10.5px] font-bold tracking-[0.2em] text-ink/40 uppercase">{c.k}</p>
                  <p className="mt-2 font-display text-[17px] leading-tight font-bold tracking-[-0.02em]">{c.v}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
