import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";
import { cn } from "../utils/cn";

/** Adds `is-in` once the element scrolls into view. */
export function useInView<T extends HTMLElement>(threshold = 0.18, once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  dir?: "up" | "left" | "right" | "zoom";
  as?: ElementType;
  id?: string;
};

export function Reveal({ children, className, delay = 0, dir = "up", as, id }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, inView } = useInView<HTMLDivElement>(0.14);
  return (
    <Tag
      id={id}
      ref={ref}
      data-dir={dir === "up" ? undefined : dir}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={cn("reveal", inView && "is-in", className)}
    >
      {children}
    </Tag>
  );
}

/** Counts from 0 to `target` when the returned ref enters the viewport. */
export function useCountUp(target: number, duration = 1600) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return { ref, value };
}

/** 0 → 1 progress of the whole document scroll. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
        setScrolled(window.scrollY > 40);
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

  return { progress, scrolled };
}

/** Which section id is currently closest to the top of the viewport. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.36) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);
  return active;
}

/** Current scroll position (px) — used for parallax offsets. */
export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return y;
}
