import { team } from "../lib/data";
import { ArrowRight } from "./Icons";
import { Reveal } from "../lib/motion";

const offsets = ["lg:mt-0", "lg:mt-14", "lg:mt-4", "lg:mt-20", "lg:mt-8"];
const tilts = ["lg:-rotate-2", "lg:rotate-1", "lg:-rotate-1", "lg:rotate-2", "lg:-rotate-1.5"];

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-[#e9eddb] pt-24 pb-28 lg:pt-28 lg:pb-36">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-35" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] text-ink/45 uppercase">
              <span className="h-px w-10 bg-ink/30" />
              The people who deliver it
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,6.4vw,4.6rem)] font-extrabold tracking-[-0.04em]">
              Sixty-eight teachers.
              <br />
              Every one of them <span className="text-clay">known</span>.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-ink/12 pt-5">
              {[
                { k: "68", l: "Teaching staff" },
                { k: "19", l: "Faculty nationalities" },
                { k: "9 yrs", l: "Average experience" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-[30px] leading-none font-extrabold tracking-[-0.03em]">{s.k}</p>
                  <p className="mt-2 text-[10.5px] font-bold tracking-[0.16em] text-ink/45 uppercase">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-16 lg:grid-cols-5">
          {team.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 90}
              dir="up"
              className={`${offsets[i % offsets.length]} ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <article
                className={`group relative overflow-hidden rounded-[1.4rem] border border-ink/10 bg-bone shadow-[0_20px_44px_-34px_rgba(10,42,33,0.8)] transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_34px_60px_-34px_rgba(10,42,33,0.85)] ${tilts[i % tilts.length]} hover:rotate-0`}
              >
                <div className="relative aspect-4/5 overflow-hidden">
                  <img
                    src={t.image}
                    alt={`${t.name}, ${t.role} at AIS International School`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                  <span className="absolute top-3.5 left-3.5 rounded-full bg-bone/90 px-2.5 py-1 text-[9.5px] font-extrabold tracking-[0.16em] text-ink uppercase backdrop-blur">
                    {t.subject}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="font-display text-[16.5px] leading-tight font-extrabold tracking-[-0.02em] text-bone">
                      {t.name}
                    </h3>
                    <p className="mt-1 text-[11px] font-bold tracking-[0.12em] text-marigold uppercase">{t.role}</p>
                    <p className="mt-2.5 line-clamp-3 text-[12.5px] leading-snug text-bone/70 transition-colors duration-500 group-hover:text-bone/90">
                      {t.line}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-ink/12 pt-7">
          <p className="max-w-xl text-[14.5px] leading-relaxed text-ink/62">
            Every teacher holds a subject-specific qualification and is trained annually by Cambridge International.
            Tutor groups stay with the same adult for two years, so nobody has to start again each September.
          </p>
          <a
            href="#admissions"
            className="group inline-flex items-center gap-2.5 rounded-full border-2 border-ink/15 px-6 py-3.5 text-[13px] font-bold transition hover:border-ink/50 hover:bg-ink hover:text-bone"
          >
            Meet them on a tour
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
