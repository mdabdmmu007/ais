import Header from "./components/Header";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Marquee from "./components/Marquee";
import Vision from "./components/Vision";
import Programmes from "./components/Programmes";
import Campus from "./components/Campus";
import Day from "./components/Day";
import Stats from "./components/Stats";
import Voices from "./components/Voices";
import Team from "./components/Team";
import News from "./components/News";
import Admissions from "./components/Admissions";
import Footer from "./components/Footer";
import { marqueeWords, school, valuesWords } from "./lib/data";
import { useScrollProgress } from "./lib/motion";
import { ArrowDown, ProgressRing, WhatsApp } from "./components/Icons";
import { cn } from "./utils/cn";

function FloatingDock() {
  const { progress } = useScrollProgress();
  const visible = progress > 0.08;

  return (
    <div
      className={cn(
        "fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 transition-all duration-500 sm:right-6 sm:bottom-6",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <a
        href={`https://wa.me/${school.whatsapp.replace(/[^0-9]/g, "")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with admissions on WhatsApp"
        className="group flex items-center gap-2.5 rounded-full bg-leaf-600 py-3 pr-4 pl-3.5 text-ink shadow-[0_16px_34px_-16px_rgba(10,42,33,0.9)] transition-all duration-400 hover:bg-marigold"
      >
        <WhatsApp className="size-5" />
        <span className="max-w-0 overflow-hidden text-[12.5px] font-bold whitespace-nowrap transition-all duration-500 group-hover:max-w-[130px]">
          Ask admissions
        </span>
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="relative flex size-13 items-center justify-center rounded-full bg-ink text-bone shadow-[0_16px_34px_-16px_rgba(10,42,33,0.9)] transition-all duration-300 hover:bg-marigold hover:text-ink"
        style={{ width: "3.25rem", height: "3.25rem" }}
      >
        <ProgressRing progress={progress} stroke={5} className="pointer-events-none absolute -inset-1" />
        <ArrowDown className="size-5 rotate-180" />
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-bone">
      <Header />
      <main>
        <Hero />
        <Why />
        <Marquee words={marqueeWords} tone="ink" />
        <Vision />
        <Team />
        <Programmes />
        <Campus />
        <Day />
        <Marquee words={valuesWords} tone="leaf" reverse />
        <Stats />
        <Voices />
        <News />
        <Admissions />
      </main>
      <Footer />
      <FloatingDock />
    </div>
  );
}
