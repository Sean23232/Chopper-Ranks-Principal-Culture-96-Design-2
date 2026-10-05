import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import {
  AtSign,
  Check,
  ChevronRight,
  Globe2,
  Loader2,
  MapPin,
  Phone,
  SendHorizontal,
  ShieldCheck,
} from "lucide-react";
import { CONTACT } from "../data";
import { Button, LinkButton, Reveal, SectionLabel } from "./primitives";
import { cn } from "../utils/cn";

type Key = "first" | "last" | "email" | "message";
type Values = Record<Key, string>;

const EMPTY: Values = { first: "", last: "", email: "", message: "" };
const MAX_MESSAGE = 700;

function validate(v: Values): Partial<Record<Key, string>> {
  const e: Partial<Record<Key, string>> = {};
  if (!v.first.trim()) e.first = "Please add a first name.";
  if (!v.last.trim()) e.last = "Please add a last name.";
  if (!v.email.trim()) e.email = "An email address is needed for the reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.email.trim()))
    e.email = "That email doesn’t look right — check for a typo.";
  if (!v.message.trim()) e.message = "Tell him what you need in a sentence or two.";
  else if (v.message.trim().length < 12)
    e.message = "A little more detail helps the reply land the first time.";
  return e;
}

function Field({
  id,
  label,
  hint,
  error,
  show,
  children,
}: {
  id: string;
  label: string;
  hint: string;
  error?: string;
  show: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-[0.8125rem] font-semibold tracking-[-0.01em] text-ink">
          {label}
        </label>
        <span
          className={cn(
            "label-mono text-[0.5625rem] transition-colors",
            show && error ? "text-[#b4453c]" : "text-ink-faint"
          )}
        >
          {show && error ? "Required" : hint}
        </span>
      </div>
      {children}
      <p
        role={show && error ? "alert" : undefined}
        className={cn(
          "mt-1.5 flex items-center gap-1.5 text-[0.75rem] text-[#b4453c] transition-all duration-200",
          show && error ? "opacity-100" : "pointer-events-none h-0 opacity-0"
        )}
      >
        {show && error ? (
          <>
            <ChevronRight className="h-3 w-3 shrink-0" />
            {error}
          </>
        ) : null}
      </p>
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [touched, setTouched] = useState<Partial<Record<Key, boolean>>>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const errors = validate(values);
  const show = (k: Key) => Boolean((touched[k] || attempted) && errors[k]);
  const filled = (Object.keys(EMPTY) as Key[]).filter((k) => !errors[k] && values[k].trim()).length;
  const progress = Math.round((filled / 4) * 100);

  const set = (k: Key) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [k]: e.target.value }));
  };
  const blur = (k: Key) => () => setTouched((prev) => ({ ...prev, [k]: true }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setAttempted(true);
    const keys = Object.keys(EMPTY) as Key[];
    const firstBad = keys.find((k) => errors[k]);
    if (firstBad) {
      document.getElementById(`cf-${firstBad}`)?.focus();
      return;
    }
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  };

  const reset = () => {
    setValues(EMPTY);
    setTouched({});
    setAttempted(false);
    setStatus("idle");
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_10%_0%,rgba(27,106,120,0.09),transparent_60%)]"
      />
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-12 px-5 sm:px-7 lg:grid-cols-12 lg:gap-14">
        {/* LEFT */}
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-ink sm:text-[2.5rem]">
              Let’s start a conversation.
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-5 max-w-[44ch] text-[1rem] leading-[1.7] text-ink-soft">
              This is the whole enquiry process: your first name, your last name, an email and a note
              about what you need. Bookings, custom songs, commercials, licensing or simply a question
              about the music — write it the way you would say it.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <ul className="mt-9 divide-y divide-line border-y border-line">
              <li>
                <a
                  href={`mailto:${CONTACT.emails[0]}`}
                  className="group/c flex items-center gap-4 py-4 transition-colors hover:text-brand-800"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] border border-line bg-white text-brand-800 transition-colors group-hover/c:border-brand-700/35 group-hover/c:bg-brand-50">
                    <AtSign className="h-[18px] w-[18px]" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0">
                    <span className="label-mono block text-[0.5625rem] text-ink-faint">Email</span>
                    <span className="block truncate text-[0.9375rem] font-semibold">{CONTACT.emails[0]}</span>
                    <span className="block truncate text-[0.8125rem] text-ink-soft">
                      or {CONTACT.emails[1]}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="group/c flex items-center gap-4 py-4 transition-colors hover:text-brand-800"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] border border-line bg-white text-brand-800 transition-colors group-hover/c:border-brand-700/35 group-hover/c:bg-brand-50">
                    <Phone className="h-[18px] w-[18px]" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0">
                    <span className="label-mono block text-[0.5625rem] text-ink-faint">Booking line</span>
                    <span className="block text-[0.9375rem] font-semibold">{CONTACT.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-4 py-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] border border-line bg-white text-brand-800">
                    <Globe2 className="h-[18px] w-[18px]" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0">
                    <span className="label-mono block text-[0.5625rem] text-ink-faint">On the web</span>
                    <span className="flex flex-wrap gap-x-3 text-[0.9375rem] font-semibold">
                      {CONTACT.sites.map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="transition-colors hover:text-brand-600"
                        >
                          {s.label}
                        </a>
                      ))}
                    </span>
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-4 py-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] border border-line bg-white text-brand-800">
                    <MapPin className="h-[18px] w-[18px]" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0">
                    <span className="label-mono block text-[0.5625rem] text-ink-faint">Based in</span>
                    <span className="block text-[0.9375rem] font-semibold">{CONTACT.location}</span>
                  </span>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 flex items-start gap-2.5 text-[0.8125rem] leading-[1.6] text-ink-soft">
              <ShieldCheck className="mt-[1px] h-4 w-4 shrink-0 text-brand-700" strokeWidth={1.7} />
              Details are used to answer this enquiry — nothing is added to a list you didn’t ask for.
            </p>
          </Reveal>
        </div>

        {/* RIGHT — conversation panel */}
        <Reveal delay={100} className="lg:col-span-7">
          <div className="overflow-hidden rounded-[20px] border border-line bg-white shadow-lift">
            {/* panel header */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-line bg-paper-2/70 px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-800 font-mono text-[0.6875rem] font-semibold text-white">
                  CR
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-paper-2 bg-gold-400"
                  />
                </span>
                <div>
                  <p className="font-display text-[0.9375rem] font-bold tracking-[-0.02em] text-ink">
                    New thread · Chopper Ranks
                  </p>
                  <p className="label-mono text-[0.5rem] text-ink-faint">
                    {CONTACT.role} · 4 fields
                  </p>
                </div>
              </div>
              <div className="ml-auto flex w-full items-center gap-3 sm:w-auto sm:gap-3">
                <div
                  aria-hidden
                  className="h-1.5 w-full min-w-[90px] overflow-hidden rounded-full bg-line sm:w-28"
                >
                  <span
                    className="block h-full rounded-full bg-brand-700 transition-[width] duration-500 ease-out"
                    style={{ width: `${Math.max(progress, 6)}%` }}
                  />
                </div>
                <span className="label-mono shrink-0 text-[0.5rem] text-ink-faint tabular-nums">
                  {filled}/4 ready
                </span>
              </div>
            </div>

            {/* panel body */}
            {status === "sent" ? (
              <div className="px-5 py-10 text-center sm:px-10">
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-800 ring-1 ring-brand-800/15">
                  <Check className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-6 font-display text-[1.5rem] font-bold tracking-[-0.025em] text-ink">
                  Thanks, {values.first.trim() || "friend"} — that’s everything the line needs.
                </h3>
                <p className="mx-auto mt-3 max-w-[44ch] text-[0.9375rem] leading-[1.65] text-ink-soft">
                  Your thread is shown below. Prefer to write directly? Use{" "}
                  <a className="font-semibold text-brand-800 underline decoration-brand-800/30 underline-offset-2 hover:decoration-brand-700" href={`mailto:${CONTACT.emails[0]}`}>
                    {CONTACT.emails[0]}
                  </a>{" "}
                  and reference Culture 96.
                </p>

                <div className="mx-auto mt-7 max-w-[46ch] rounded-[14px] border border-line bg-paper-2/60 p-4 text-left">
                  <p className="label-mono flex items-center justify-between gap-4 border-b border-line pb-2.5 text-[0.5rem] text-brand-700">
                    <span>Your thread</span>
                    <span className="text-ink-faint">
                      {values.first.trim()} {values.last.trim()} · {values.email.trim()}
                    </span>
                  </p>
                  <p className="mt-2 text-[0.875rem] leading-[1.6] text-ink">{values.message.trim()}</p>
                </div>

                <div className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
                  <Button variant="outline" onClick={reset}>
                    Write another message
                  </Button>
                  <LinkButton href={CONTACT.phoneHref} variant="ghost">
                    Call the booking line
                    <Phone className="h-4 w-4 opacity-70" />
                  </LinkButton>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="px-5 py-6 sm:px-7 sm:py-8">
                <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
                  <Field id="cf-first" label="First name" hint="Step 1" error={errors.first} show={show("first")}>
                    <input
                      id="cf-first"
                      name="firstName"
                      autoComplete="given-name"
                      placeholder="Marcia"
                      value={values.first}
                      onChange={set("first")}
                      onBlur={blur("first")}
                      aria-invalid={show("first")}
                      data-invalid={show("first")}
                      className="field-input"
                    />
                  </Field>
                  <Field id="cf-last" label="Last name" hint="Step 2" error={errors.last} show={show("last")}>
                    <input
                      id="cf-last"
                      name="lastName"
                      autoComplete="family-name"
                      placeholder="Brown"
                      value={values.last}
                      onChange={set("last")}
                      onBlur={blur("last")}
                      aria-invalid={show("last")}
                      data-invalid={show("last")}
                      className="field-input"
                    />
                  </Field>
                </div>

                <div className="mt-5">
                  <Field
                    id="cf-email"
                    label="Email"
                    hint="Where the reply goes"
                    error={errors.email}
                    show={show("email")}
                  >
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@studio.com"
                      value={values.email}
                      onChange={set("email")}
                      onBlur={blur("email")}
                      aria-invalid={show("email")}
                      data-invalid={show("email")}
                      className="field-input"
                    />
                  </Field>
                </div>

                {/* composer */}
                <div className="mt-5">
                  <Field
                    id="cf-message"
                    label="Message"
                    hint="Booking, song, commercial — anything"
                    error={errors.message}
                    show={show("message")}
                  >
                    <div className="relative rounded-[12px] border border-line bg-white transition-colors focus-within:border-brand-700 focus-within:shadow-[0_0_0_3px_rgba(27,106,120,0.13)]">
                      <textarea
                        id="cf-message"
                        name="message"
                        rows={5}
                        maxLength={MAX_MESSAGE}
                        placeholder="We’re putting together a season anthem and would like to talk about writing and recording it with you…"
                        value={values.message}
                        onChange={set("message")}
                        onBlur={blur("message")}
                        aria-invalid={show("message")}
                        data-invalid={show("message")}
                        className="w-full resize-y rounded-[11px] bg-transparent px-4 pt-4 pb-11 text-[0.9375rem] leading-[1.65] text-ink outline-none placeholder:text-[#a9b3b6]"
                      />
                      <div className="pointer-events-none absolute inset-x-3 bottom-2.5 flex items-center justify-between">
                        <span className="label-mono text-[0.5rem] text-ink-faint">
                          Chat opens once this is sent
                        </span>
                        <span className="font-mono text-[0.625rem] tabular-nums text-ink-faint">
                          {values.message.length}/{MAX_MESSAGE}
                        </span>
                      </div>
                    </div>
                  </Field>
                </div>

                <div className="mt-7 flex flex-col gap-4 border-t border-line-soft pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "sending"}>
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <SendHorizontal className="h-[18px] w-[18px] transition-transform duration-200 group-hover/btn:translate-x-[2px]" />
                      </>
                    )}
                  </Button>
                  <p className="text-[0.8125rem] leading-[1.5] text-ink-soft sm:text-right">
                    We’ll get back to you as soon as possible.
                    <span className="hidden sm:inline"> · No account needed.</span>
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
