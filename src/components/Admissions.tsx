import { useState } from "react";
import type { FormEvent } from "react";
import { admissionSteps, faqs, programmes, school } from "../lib/data";
import { ArrowRight, Check, Leaf, Plus, WhatsApp } from "./Icons";
import { Reveal } from "../lib/motion";
import { cn } from "../utils/cn";

type Fields = {
  parent: string;
  email: string;
  phone: string;
  programme: string;
  age: string;
  date: string;
  message: string;
  consent: boolean;
};

const empty: Fields = {
  parent: "",
  email: "",
  phone: "",
  programme: "",
  age: "",
  date: "",
  message: "",
  consent: false,
};

const emailRe = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("group block", className)}>
      <span className="flex items-baseline justify-between gap-3">
        <span className="text-[10.5px] font-bold tracking-[0.18em] text-ink/45 uppercase">{label}</span>
        {error && <span className="text-[11px] font-semibold text-clay">{error}</span>}
      </span>
      <span className="mt-1.5 block">{children}</span>
    </label>
  );
}

const inputCls =
  "w-full border-b-2 bg-transparent pb-2 text-[15px] font-medium text-ink outline-none transition-colors duration-300 placeholder:text-ink/30";

export default function Admissions() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    setValues((prev) => ({ ...prev, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<keyof Fields, string>> = {};
    if (values.parent.trim().length < 2) next.parent = "Required";
    if (!emailRe.test(values.email.trim())) next.email = "Check this";
    if (!values.programme) next.programme = "Pick one";
    if (!values.consent) next.consent = "Required";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <section id="admissions" className="grain relative overflow-hidden bg-ink py-24 text-bone lg:py-32">
      <div aria-hidden className="dark-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-[40rem] w-[40rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(240,169,43,0.28) 0%, transparent 68%)" }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* -------- steps -------- */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] text-bone/45 uppercase">
                <span className="h-px w-10 bg-bone/30" />
                Admissions 2026/27
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.4rem,6vw,4.2rem)] font-extrabold tracking-[-0.04em]">
                Five steps
                <br />
                to a <span className="text-marigold">place</span>.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-bone/62">
                No portals, no queues, no mystery. One conversation with a real member of our admissions team and you
                will know whether AIS is right for your family.
              </p>
            </Reveal>

            <ol className="relative mt-10 space-y-1 border-l border-bone/15 pl-7">
              {admissionSteps.map((s, i) => (
                <Reveal as="li" key={s.n} delay={i * 70} className="group relative">
                  <span className="absolute top-5 -left-[35px] flex size-4 items-center justify-center rounded-full border-2 border-bone/25 bg-ink transition-all duration-500 group-hover:border-marigold">
                    <span className="size-1.5 rounded-full bg-bone/40 transition-colors duration-500 group-hover:bg-marigold" />
                  </span>
                  <div className="rounded-xl py-3.5 transition-colors duration-500 group-hover:bg-bone/5">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-[11px] font-extrabold tracking-[0.18em] text-marigold">
                        {s.n}
                      </span>
                      <h3 className="font-display text-[19px] font-bold tracking-[-0.02em]">{s.title}</h3>
                    </div>
                    <p className="mt-1.5 max-w-sm text-[13.5px] leading-relaxed text-bone/55">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${school.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-leaf px-5 py-3 text-[13px] font-bold text-ink transition hover:bg-bone"
              >
                <WhatsApp className="size-4" />
                WhatsApp admissions
              </a>
              <a
                href={`mailto:${school.email}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-bone/25 px-5 py-3 text-[13px] font-bold transition hover:bg-bone hover:text-ink"
              >
                {school.email}
              </a>
            </Reveal>
          </div>

          {/* -------- form -------- */}
          <Reveal delay={120} className="lg:col-span-7" dir="right">
            <div className="relative overflow-hidden rounded-[2rem] rounded-tl-[5rem] bg-bone p-7 text-ink shadow-[0_44px_90px_-50px_rgba(0,0,0,0.9)] sm:p-10">
              {!sent ? (
                <form onSubmit={submit} noValidate>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-display text-[clamp(1.6rem,3.4vw,2.2rem)] font-extrabold tracking-[-0.035em]">
                        Book a tour
                      </h3>
                      <p className="mt-2 text-[13.5px] text-ink/58">
                        Tell us about your child and we will reply within one working day.
                      </p>
                    </div>
                    <Leaf className="size-9 shrink-0 text-leaf-600 transition-transform duration-700 hover:rotate-12" />
                  </div>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <Field label="Parent / guardian" error={errors.parent}>
                      <input
                        type="text"
                        value={values.parent}
                        onChange={(e) => set("parent", e.target.value)}
                        placeholder="Full name"
                        className={cn(inputCls, errors.parent ? "border-clay" : "border-ink/15 focus:border-marigold")}
                      />
                    </Field>

                    <Field label="Email" error={errors.email}>
                      <input
                        type="email"
                        value={values.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="you@email.com"
                        className={cn(inputCls, errors.email ? "border-clay" : "border-ink/15 focus:border-marigold")}
                      />
                    </Field>

                    <Field label="Phone / WhatsApp">
                      <input
                        type="tel"
                        value={values.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        placeholder="+60 12 345 6789"
                        className={cn(inputCls, "border-ink/15 focus:border-marigold")}
                      />
                    </Field>

                    <Field label="Preferred tour date">
                      <input
                        type="date"
                        value={values.date}
                        onChange={(e) => set("date", e.target.value)}
                        className={cn(inputCls, "border-ink/15 focus:border-marigold")}
                      />
                    </Field>

                    <Field label="Programme" error={errors.programme}>
                      <select
                        value={values.programme}
                        onChange={(e) => set("programme", e.target.value)}
                        className={cn(
                          inputCls,
                          "cursor-pointer appearance-none",
                          errors.programme ? "border-clay" : "border-ink/15 focus:border-marigold",
                        )}
                      >
                        <option value="">Select a stage…</option>
                        {programmes.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} — {p.ages}
                          </option>
                        ))}
                        <option value="Not sure">Not sure yet</option>
                      </select>
                    </Field>

                    <Field label="Child's age">
                      <select
                        value={values.age}
                        onChange={(e) => set("age", e.target.value)}
                        className={cn(inputCls, "cursor-pointer appearance-none border-ink/15 focus:border-marigold")}
                      >
                        <option value="">Select age…</option>
                        {Array.from({ length: 15 }, (_, i) => i + 3).map((a) => (
                          <option key={a} value={a}>
                            {a} years old
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Anything we should know?" className="sm:col-span-2">
                      <textarea
                        rows={3}
                        value={values.message}
                        onChange={(e) => set("message", e.target.value)}
                        placeholder="Current school, subjects of interest, transport needs, siblings…"
                        className={cn(inputCls, "resize-none border-ink/15 focus:border-marigold")}
                      />
                    </Field>
                  </div>

                  <label className="mt-7 flex cursor-pointer items-start gap-3">
                    <span
                      className={cn(
                        "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-300",
                        values.consent ? "border-ink bg-ink text-bone" : errors.consent ? "border-clay" : "border-ink/25",
                      )}
                    >
                      {values.consent && <Check className="size-3" strokeWidth={3} />}
                    </span>
                    <input
                      type="checkbox"
                      checked={values.consent}
                      onChange={(e) => set("consent", e.target.checked)}
                      className="sr-only"
                    />
                    <span className="text-[12.5px] leading-snug text-ink/60">
                      I agree to be contacted by AIS admissions about my enquiry.
                      {errors.consent && <span className="ml-1 font-semibold text-clay">Required.</span>}
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="group relative mt-8 w-full overflow-hidden rounded-full bg-ink py-4.5 text-[14px] font-bold text-bone transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2.5">
                      Send enquiry & book my tour
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                    <span className="absolute inset-0 translate-y-full bg-marigold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
                  </button>

                  <p className="mt-4 text-center text-[11.5px] text-ink/45">
                    Prefer to talk? Call {school.phone} · Mon–Fri 8.00am – 5.00pm
                  </p>
                </form>
              ) : (
                <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                  <span className="relative flex size-20 items-center justify-center rounded-full bg-leaf text-ink">
                    <span className="absolute size-full animate-ring rounded-full bg-leaf/70" />
                    <Check className="size-9" strokeWidth={2.4} />
                  </span>
                  <h3 className="mt-7 font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold tracking-[-0.035em]">
                    Thank you, {values.parent.split(" ")[0] || "friend"}.
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/65">
                    Your enquiry about{" "}
                    <strong className="font-semibold text-ink">{values.programme || "a place at AIS"}</strong> is with
                    our admissions team. Expect a reply at{" "}
                    <strong className="font-semibold text-ink">{values.email}</strong> within one working day
                    {values.date ? `, with tour options for ${values.date}` : ""}.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <a
                      href="#campus"
                      className="rounded-full bg-ink px-6 py-3 text-[13px] font-bold text-bone transition hover:bg-ink-700"
                    >
                      Keep exploring the campus
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false);
                        setValues(empty);
                      }}
                      className="rounded-full border-2 border-ink/15 px-6 py-3 text-[13px] font-bold transition hover:border-ink/45"
                    >
                      Send another enquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* -------- FAQ -------- */}
        <div className="mt-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-extrabold tracking-[-0.035em]">
              Questions parents actually ask
            </h3>
            <span className="text-[11px] font-bold tracking-[0.18em] text-bone/40 uppercase">
              {faqs.length} answers
            </span>
          </Reveal>

          <div className="mt-8 grid gap-x-10 gap-y-1 lg:grid-cols-2">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={f.q} delay={(i % 2) * 70}>
                  <div className={cn("border-b border-bone/14 transition-colors", open && "border-marigold/45")}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      className="group flex w-full items-start gap-5 py-5 text-left"
                    >
                      <span className="mt-1 font-display text-[11px] font-extrabold tracking-[0.16em] text-bone/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "flex-1 font-display text-[17.5px] leading-snug font-bold tracking-[-0.02em] transition-colors sm:text-[19px]",
                          open ? "text-marigold" : "group-hover:text-bone/80",
                        )}
                      >
                        {f.q}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                          open
                            ? "rotate-135 border-marigold bg-marigold text-ink"
                            : "border-bone/25 text-bone/70 group-hover:border-bone/60",
                        )}
                      >
                        <Plus className="size-4" />
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pt-1 pb-6 pl-9 text-[14px] leading-relaxed text-bone/62">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
