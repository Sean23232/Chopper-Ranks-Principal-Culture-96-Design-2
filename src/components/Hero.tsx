import type { ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight, Radio } from "lucide-react";
import { cn } from "../utils/cn";
import { Button, Equalizer, Reveal, BrandMark } from "./primitives";
import { scrollToId } from "../utils/scroll";

/* Decorative vinyl ring that sits behind the hero panel */
function RecordRing() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[340px] w-[340px] animate-[drift_46s_linear_infinite] opacity-[0.9] sm:-right-20 sm:-top-28 sm:h-[420px] sm:w-[420px]"
    >
      <svg viewBox="0 0 400 400" className="h-full w-full">
        <g fill="none" stroke="#0f3f4a">
          {[190, 168, 146, 124, 102].map((r, i) => (
            <circle
              key={r}
              cx="200"
              cy="200"
              r={r}
              strokeWidth="1"
              strokeOpacity={0.16 + i * 0.035}
              strokeDasharray={i % 2 ? "2 9" : undefined}
            />
          ))}
        </g>
        <circle cx="200" cy="200" r="205" fill="none" stroke="#c8862b" strokeOpacity="0.3" strokeWidth="1.4" strokeDasharray="60 1180" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function Bubble({
  from,
  children,
  delay,
}: {
  from: "them" | "you";
  children: ReactNode;
  delay: number;
}) {
  const isThem = from === "them";
  return (
    <li
      className="flex flex-col gap-1.5"
      style={{ animation: `rise 0.6s ${delay}ms cubic-bezier(0.22,1,0.36,1) both` }}
    >
      <span
        className={cn(
          "label-mono px-1 text-[0.5625rem]",
          isThem ? "text-gold-400/80" : "text-right text-white/40"
        )}
      >
        {isThem ? "Chopper" : "You"}
      </span>
      <p
        className={cn(
          "max-w-[86%] px-3.5 py-2.5 text-[0.8125rem] leading-relaxed",
          isThem
            ? "rounded-[14px_14px_14px_4px] bg-white/[0.07] text-paper/90 ring-1 ring-white/10"
            : "ml-auto rounded-[14px_14px_4px_14px] bg-brand-600 text-white"
        )}
      >
        {children}
      </p>
    </li>
  );
}

export function HeroPanel() {
  return (
    <div className="relative">
      <RecordRing />
      <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-brand-950 shadow-panel">
        <div aria-hidden className="absolute inset-0 texture-grid opacity-60" />

        {/* panel header */}
        <div className="relative flex items-center gap-3 border-b border-white/[0.08] px-5 py-4">
          <BrandMark tone="light" className="h-9 w-9 shrink-0" />
          <div className="min-w-0">
            <p className="truncate font-display text-[0.9375rem] font-bold tracking-[-0.02em] text-white">
              Chopper Ranks
            </p>
            <p className="label-mono mt-0.5 text-[0.5625rem] text-white/45">Principal · Culture 96</p>
          </div>
          <span className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full bg-white/[0.07] px-2.5 py-1 ring-1 ring-white/10">
            <span aria-hidden className="h-[6px] w-[6px] rounded-full bg-gold-400 animate-[blip_2.4s_ease-in-out_infinite]" />
            <span className="label-mono text-[0.5625rem] text-white/70">Open line</span>
          </span>
        </div>

        {/* thread */}
        <div className="relative px-5 py-5">
          <ul className="flex flex-col gap-4">
            <Bubble from="them" delay={260}>
              Thanks for reaching out. What are we working on — a booking, a song, or a custom team track?
            </Bubble>
            <Bubble from="you" delay={520}>
              We need a 90-second team anthem with a chorus the crowd can carry.
            </Bubble>
            <Bubble from="them" delay={780}>
              Good. Put your name, email and that detail in the form — I answer from this same line.
            </Bubble>
          </ul>

          {/* field preview */}
          <div className="mt-5 rounded-[14px] border border-white/10 bg-white/[0.035] p-3.5">
            <p className="label-mono mb-2.5 text-[0.5625rem] text-white/40">Required to open a thread</p>
            <div className="grid grid-cols-3 gap-2">
              {["First name", "Last name", "Email"].map((f) => (
                <div key={f} className="rounded-lg border border-white/10 bg-brand-950/60 px-2.5 py-2">
                  <p className="truncate text-[0.6875rem] font-medium text-white/55">{f}</p>
                  <span aria-hidden className="mt-1.5 block h-[2px] w-8 rounded-full bg-gold-400/50" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* panel footer */}
        <div className="relative flex items-center gap-3 border-t border-white/[0.08] bg-brand-950/70 px-5 py-3.5">
          <Equalizer />
          <button
            type="button"
            onClick={() => scrollToId("contact", "#cf-first")}
            className="label-mono ml-auto inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-3.5 py-2 text-[0.5625rem] font-semibold text-brand-950 transition-all duration-200 hover:bg-gold-400 hover:gap-2.5"
          >
            <Radio className="h-3.5 w-3.5" />
            Open the chat
            <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[104px] sm:pt-[124px] lg:pt-[136px]">
      {/* layered ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_88%_-10%,rgba(27,106,120,0.12),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_6%_8%,rgba(200,134,43,0.10),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper-2/70" />
        <div className="absolute inset-0 texture-ink [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-14 px-5 pb-16 sm:px-7 lg:grid-cols-12 lg:gap-10 lg:pb-24 xl:gap-14">
        <div className="lg:col-span-7 xl:col-span-7">
          <Reveal>
            <p className="label-mono flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.625rem] text-brand-700">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-800/15 bg-white/70 px-3 py-1.5 text-[0.625rem] font-semibold tracking-[0.18em] text-brand-800 shadow-[0_1px_0_rgba(17,25,27,0.03)]">
                <span aria-hidden className="h-[6px] w-[6px] rounded-full bg-gold-500 animate-[blip_2.4s_ease-in-out_infinite]" />
                Chopper Ranks
              </span>
              <span className="hidden text-ink-faint sm:inline">Direct conversation line · Culture 96</span>
            </p>
          </Reveal>

          <Reveal delay={70}>
            <h1 className="mt-6 font-display text-[2.375rem] font-extrabold leading-[0.99] tracking-[-0.04em] text-ink sm:text-[3.15rem] lg:text-[3.85rem] xl:text-[4.25rem]">
              <span className="block">
                <span className="block">Music without</span>
                <span className="block">a genre cage.</span>
              </span>
              <span className="relative mt-3 block w-fit text-brand-800">
                <span className="block">Access without</span>
                <span className="relative block w-fit">
                  a gatekeeper.
                  <svg
                    aria-hidden
                    viewBox="0 0 300 10"
                    preserveAspectRatio="none"
                    className="absolute -bottom-[3px] left-0 h-[7px] w-full text-gold-400"
                  >
                    <path
                      d="M2 7C66 2.6 140 1.8 298 5.4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-7 max-w-[52ch] text-[1.0625rem] leading-[1.68] text-ink-soft sm:text-[1.125rem]">
              Chopper Ranks is a writer, composer, arranger and producer — born in Jamaica, raised in
              New York, based in Florida — blending reggae, dancehall, country western and gospel into
              one catalogue. Culture 96 keeps a single open channel for all of it: leave your name,
              your email and what you need, and the conversation starts here.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                fullOnMobile
                onClick={() => scrollToId("contact", "#cf-first")}
              >
                Get Started
                <ArrowUpRight className="h-[18px] w-[18px] transition-all duration-200 group-hover/btn:translate-x-[2px] group-hover/btn:-translate-y-[2px]" />
              </Button>
              <Button size="lg" variant="outline" fullOnMobile onClick={() => scrollToId("contact")}>
                Contact Us
                <ArrowDownRight className="h-[18px] w-[18px] text-ink-faint transition-all duration-200 group-hover/btn:translate-y-[2px] group-hover/btn:text-brand-700" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-6 text-[0.8125rem] text-ink-soft">
              {["Reggae · Gospel · Country · Dancehall", "ASCAP writer", "Booking & custom tracks welcome"].map(
                (item, i) => (
                  <li key={item} className="flex items-center gap-3">
                    {i > 0 && <span aria-hidden className="hidden h-4 w-px bg-line sm:block" />}
                    <span className="font-medium">{item}</span>
                  </li>
                )
              )}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={140} className="lg:col-span-5">
          <HeroPanel />
        </Reveal>
      </div>
    </section>
  );
}
