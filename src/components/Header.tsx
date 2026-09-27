import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { navLinks, school, ticker } from "../lib/data";
import { useActiveSection, useScrollProgress } from "../lib/motion";
import { ArrowRight, Close, Crest, Menu, Phone, Pin, Mail, WhatsApp } from "./Icons";

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Header() {
  const { progress, scrolled } = useScrollProgress();
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Live ticker */}
        <div
          className={cn(
            "overflow-hidden bg-ink text-bone transition-all duration-500 ease-out",
            scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
          )}
        >
          <div className="mx-auto flex h-9 max-w-[1440px] items-center gap-6 px-5 sm:px-8">
            <span className="hidden shrink-0 items-center gap-2 text-[10px] font-semibold tracking-[0.22em] text-marigold uppercase md:flex">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ring rounded-full bg-marigold" />
                <span className="relative inline-flex size-1.5 rounded-full bg-marigold" />
              </span>
              Live
            </span>
            <div className="marquee-mask relative flex-1 overflow-hidden">
              <div className="flex w-max animate-marquee-slow items-center gap-8 whitespace-nowrap text-[11.5px] tracking-wide">
                {[...ticker, ...ticker].map((t, i) => (
                  <span key={i} className="flex items-center gap-8 text-bone/80">
                    {t}
                    <span className="text-leaf">✦</span>
                  </span>
                ))}
              </div>
            </div>
            <a
              href="#admissions"
              className="hidden shrink-0 items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-bone/70 uppercase transition hover:text-marigold lg:flex"
            >
              Parent Portal
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Nav */}
        <div
          className={cn(
            "relative transition-all duration-500",
            scrolled
              ? "border-b border-ink/10 bg-bone/90 shadow-[0_10px_40px_-24px_rgba(10,42,33,0.5)] backdrop-blur-xl"
              : "border-b border-transparent bg-transparent",
          )}
        >
          <div
            className={cn(
              "mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 transition-all duration-500 sm:px-8",
              scrolled ? "h-16" : "h-20",
            )}
          >
            <a href="#top" className="group flex items-center gap-3" aria-label={`${school.name} home`}>
              <Crest
                className={cn(
                  "text-ink-700 transition-all duration-500 group-hover:text-marigold-600",
                  scrolled ? "h-9" : "h-11",
                )}
              />
              <span className="leading-none">
                <span className="block font-display text-[17px] font-extrabold tracking-[-0.03em] text-ink">
                  AIS<span className="text-marigold-600">.</span>
                </span>
                <span className="mt-1 block text-[9.5px] font-semibold tracking-[0.24em] text-ink/50 uppercase">
                  International School
                </span>
              </span>
            </a>

            <nav className="hidden items-center gap-7 xl:flex">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  data-active={active === l.href.slice(1)}
                  className={cn(
                    "link-swipe text-[13px] font-semibold tracking-wide transition-colors",
                    active === l.href.slice(1) ? "text-ink" : "text-ink/60 hover:text-ink",
                  )}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2.5">
              <a
                href={`tel:${school.phone.replace(/\s/g, "")}`}
                className="hidden items-center gap-2 rounded-full border border-ink/15 px-3.5 py-2 text-[12px] font-semibold text-ink/70 transition hover:border-ink/40 hover:text-ink lg:flex"
              >
                <Phone className="size-3.5" />
                {school.phone}
              </a>
              <a
                href="#admissions"
                className="group relative hidden overflow-hidden rounded-full bg-ink px-5 py-2.5 text-[12.5px] font-bold tracking-wide text-bone transition-transform duration-300 hover:scale-[1.03] sm:block"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a tour
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 -translate-x-full bg-marigold-600 transition-transform duration-400 ease-out group-hover:translate-x-0" />
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="flex size-10 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:bg-ink hover:text-bone xl:hidden"
              >
                <Menu className="size-5" />
              </button>
            </div>
          </div>

          {/* scroll progress */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-transparent">
            <div
              className="h-full origin-left bg-gradient-to-r from-leaf-600 via-marigold to-clay"
              style={{ transform: `scaleX(${progress})`, transition: "transform 90ms linear" }}
            />
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[70] xl:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-0 dark-grid grain overflow-hidden transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "translate-y-0" : "-translate-y-4",
          )}
        >
          <div className="flex h-full flex-col justify-between px-6 py-6">
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-extrabold text-bone">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex size-11 items-center justify-center rounded-full border border-bone/25 text-bone transition hover:bg-bone hover:text-ink"
              >
                <Close className="size-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 border-b border-bone/10 py-3.5 transition-all duration-500"
                  style={{
                    transform: open ? "none" : "translateY(24px)",
                    opacity: open ? 1 : 0,
                    transitionDelay: `${120 + i * 55}ms`,
                  }}
                >
                  <span className="font-body text-[10px] font-bold tracking-[0.2em] text-marigold">
                    0{i + 1}
                  </span>
                  <span className="font-display text-[clamp(1.7rem,8vw,2.6rem)] font-bold text-bone transition-colors group-hover:text-marigold">
                    {l.label}
                  </span>
                </a>
              ))}
            </nav>

            <div className="space-y-3 text-bone/70">
              <a
                href="#admissions"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-marigold px-6 py-3.5 font-bold text-ink transition hover:bg-bone"
              >
                Book a campus tour <ArrowRight className="size-4" />
              </a>
              <div className="grid gap-2 pt-1 text-[13px]">
                <a href={`tel:${school.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 hover:text-bone">
                  <Phone className="size-4 text-leaf" /> {school.phone}
                </a>
                <a href={`mailto:${school.email}`} className="flex items-center gap-2.5 hover:text-bone">
                  <Mail className="size-4 text-leaf" /> {school.email}
                </a>
                <p className="flex items-start gap-2.5">
                  <Pin className="mt-0.5 size-4 shrink-0 text-leaf" /> {school.address}
                </p>
                <a
                  href={`https://wa.me/${school.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 hover:text-bone"
                >
                  <WhatsApp className="size-4 text-leaf" /> WhatsApp admissions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
