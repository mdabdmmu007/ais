import { useState } from "react";
import { navLinks, programmes, school } from "../lib/data";
import { ArrowRight, Check, Crest, Facebook, Instagram, Mail, Phone, Pin, WhatsApp, YouTube } from "./Icons";

const columns = [
  {
    title: "Explore",
    links: [...navLinks, { label: "Voices of AIS", href: "#voices" }],
  },
  {
    title: "Programmes",
    links: programmes.map((p) => ({ label: `${p.name} · ${p.ages}`, href: "#programmes" })),
  },
  {
    title: "Families",
    links: [
      { label: "Fee schedule", href: "#admissions" },
      { label: "Transport routes", href: "#why" },
      { label: "After-school care", href: "#why" },
      { label: "Term calendar", href: "#news" },
      { label: "Parent portal", href: "#admissions" },
      { label: "Uniform & books", href: "#admissions" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <footer className="grain relative overflow-hidden bg-[#071b15] text-bone">
      <div aria-hidden className="dark-grid pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto max-w-[1440px] px-5 pt-20 sm:px-8">
        {/* ---- visiting us ---- */}
        <div className="grid gap-10 border-b border-bone/12 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] text-bone/40 uppercase">
              <span className="h-px w-10 bg-bone/25" />
              Visiting us
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,3.2rem)] font-extrabold tracking-[-0.04em]">
              Come and walk
              <br />
              the campus.
            </h2>
            <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-bone/60">
              Tours run every weekday at 9.30am and 2.00pm. Bring your children — they will be handed a visitor badge
              and a rabbit to feed within about four minutes.
            </p>

            <div className="mt-8 space-y-4 text-[14px]">
              <a
                href={`tel:${school.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-3.5 text-bone/75 transition hover:text-marigold"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-bone/20 transition group-hover:border-marigold">
                  <Phone className="size-4" />
                </span>
                {school.phone}
              </a>
              <a
                href={`mailto:${school.email}`}
                className="group flex items-center gap-3.5 text-bone/75 transition hover:text-marigold"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-bone/20 transition group-hover:border-marigold">
                  <Mail className="size-4" />
                </span>
                {school.email}
              </a>
              <p className="flex items-start gap-3.5 text-bone/75">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-bone/20">
                  <Pin className="size-4" />
                </span>
                <span className="pt-2">{school.address}</span>
              </p>
              <p className="flex items-start gap-3.5 text-bone/75">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-bone/20">
                  <WhatsApp className="size-4" />
                </span>
                <span className="pt-2">Office open Mon–Fri, 7.30am – 5.00pm</span>
              </p>
            </div>

            <div className="mt-8 flex gap-2.5">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: YouTube, label: "YouTube" },
                { Icon: WhatsApp, label: "WhatsApp" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full border border-bone/18 text-bone/70 transition-all duration-400 hover:-translate-y-1 hover:border-marigold hover:bg-marigold hover:text-ink"
                >
                  <Icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* stylised map */}
          <div className="lg:col-span-4">
            <a
              href={school.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative block h-full min-h-[300px] overflow-hidden rounded-[1.6rem] border border-bone/14 bg-ink-800"
            >
              <svg viewBox="0 0 400 320" className="absolute inset-0 size-full" aria-hidden>
                <defs>
                  <pattern id="mapGrid" width="34" height="34" patternUnits="userSpaceOnUse">
                    <path d="M34 0H0v34" fill="none" stroke="rgba(247,243,232,0.07)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="400" height="320" fill="url(#mapGrid)" />
                <path d="M-10 210C60 190 110 236 170 214s96-64 150-52 70 30 100 22" stroke="rgba(247,243,232,0.16)" strokeWidth="9" fill="none" />
                <path d="M120 -10c14 70-18 118 6 168s70 76 62 172" stroke="rgba(247,243,232,0.13)" strokeWidth="7" fill="none" />
                <path d="M-10 92c70 10 106-26 172-16s104 46 248 22" stroke="rgba(247,243,232,0.1)" strokeWidth="5" fill="none" />
                <circle cx="206" cy="176" r="54" fill="rgba(147,201,63,0.14)" />
                <circle cx="206" cy="176" r="54" fill="none" stroke="rgba(147,201,63,0.4)" strokeDasharray="4 7" />
                <rect x="182" y="156" width="48" height="34" rx="6" fill="rgba(147,201,63,0.35)" />
              </svg>

              <span className="absolute top-[46%] left-[51%] -translate-x-1/2 -translate-y-full">
                <span className="relative flex size-11 items-center justify-center rounded-full bg-marigold text-ink shadow-[0_10px_26px_-8px_rgba(240,169,43,0.9)]">
                  <span className="absolute size-full animate-ring rounded-full bg-marigold/60" />
                  <Crest className="size-5" />
                </span>
              </span>

              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-[#071b15] via-[#071b15]/85 to-transparent p-5 pt-14">
                <span>
                  <span className="block font-display text-[16px] font-bold">AIS · Setapak campus</span>
                  <span className="mt-1 block text-[12px] text-bone/55">6 acres · 8 min from KLCC</span>
                </span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-bone text-ink transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowRight className="size-4 -rotate-45" />
                </span>
              </span>
            </a>
          </div>

          {/* newsletter */}
          <div className="lg:col-span-3">
            <div className="rounded-[1.6rem] border border-bone/14 bg-bone/5 p-6">
              <h3 className="font-display text-[20px] font-extrabold tracking-[-0.02em]">The AIS Dispatch</h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-bone/58">
                One email a month: open days, results, and the odd rabbit photograph.
              </p>

              {joined ? (
                <p className="mt-5 flex items-center gap-2.5 rounded-xl bg-leaf/15 px-4 py-3 text-[13px] font-semibold text-leaf">
                  <Check className="size-4" /> You are on the list.
                </p>
              ) : (
                <form
                  className="mt-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)) setJoined(true);
                  }}
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    aria-label="Email address"
                    className="w-full rounded-full border border-bone/20 bg-transparent px-4 py-3 text-[13.5px] text-bone outline-none transition placeholder:text-bone/35 focus:border-marigold"
                  />
                  <button
                    type="submit"
                    className="group mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-marigold py-3 text-[12.5px] font-bold text-ink transition hover:bg-bone"
                  >
                    Subscribe
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>

            <div className="mt-4 rounded-[1.6rem] border border-bone/14 p-6">
              <p className="text-[10.5px] font-bold tracking-[0.2em] text-bone/40 uppercase">Accreditation</p>
              <p className="mt-3 font-display text-[15px] leading-snug font-bold text-bone/85">
                Cambridge International School
              </p>
              <p className="mt-1.5 text-[12.5px] text-bone/50">
                Centre MY 218 · Registered with the Ministry of Education, Malaysia
              </p>
            </div>
          </div>
        </div>

        {/* ---- link columns ---- */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <Crest className="h-12 text-marigold" />
              <span className="leading-tight">
                <span className="block font-display text-[20px] font-extrabold tracking-[-0.03em]">
                  AIS<span className="text-marigold">.</span>
                </span>
                <span className="mt-1 block text-[9.5px] font-bold tracking-[0.22em] text-bone/45 uppercase">
                  International School
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-bone/52">
              {school.tagline} Educating Kuala Lumpur's children since {school.established}.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title} className="lg:col-span-3">
              <h4 className="text-[10.5px] font-bold tracking-[0.22em] text-bone/40 uppercase">{c.title}</h4>
              <ul className="mt-5 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-[13.5px] text-bone/65 transition-colors hover:text-marigold"
                    >
                      <span className="h-px w-0 bg-marigold transition-all duration-400 group-hover:w-4" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ---- giant wordmark marquee ---- */}
      <div className="relative border-t border-bone/12 py-7">
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="font-display text-[clamp(2rem,5.5vw,4rem)] font-extrabold tracking-[-0.04em] text-bone/12">
                  AIS INTERNATIONAL SCHOOL
                </span>
                <span className="font-display text-[clamp(2rem,5.5vw,4rem)] font-extrabold tracking-[-0.04em] text-marigold/25">
                  KUALA LUMPUR
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-3 border-t border-bone/12 px-5 py-6 text-[12px] text-bone/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {school.name}, {school.city}. All rights reserved.</p>
        <p className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a href="#admissions" className="transition hover:text-bone">Privacy</a>
          <a href="#admissions" className="transition hover:text-bone">Safeguarding</a>
          <a href="#admissions" className="transition hover:text-bone">Fees & terms</a>
          <span className="text-bone/25">·</span>
          <span>A concept redesign of ais-kl.edu.my</span>
        </p>
      </div>
    </footer>
  );
}
