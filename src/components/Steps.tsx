import { STEPS } from "../data";
import { Reveal, SectionLabel } from "./primitives";
import { scrollToId } from "../utils/scroll";
import { ArrowRight } from "lucide-react";

export default function Steps() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-paper-2/60 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-7">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <SectionLabel>How it works</SectionLabel>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 font-display text-[1.75rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[2.15rem]">
                Three small steps. Then a real conversation.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <button
              type="button"
              onClick={() => scrollToId("contact", "#cf-first")}
              className="group/step inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand-800 transition-colors hover:text-brand-600"
            >
              Start now
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-brand-800/25 transition-all duration-200 group-hover/step:translate-x-[3px]">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </Reveal>
        </div>

        <ol className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(15,63,74,0.22)_12%,rgba(15,63,74,0.22)_88%,transparent)] md:block"
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} as="li" delay={i * 90} className="group relative">
              <div className="flex items-center gap-4">
                <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-paper font-display text-[1rem] font-extrabold tracking-[-0.02em] text-brand-800 shadow-[0_1px_0_rgba(17,25,27,0.04)] transition-all duration-300 group-hover:border-brand-800/35 group-hover:bg-brand-800 group-hover:text-white">
                  {s.n}
                </span>
                <span aria-hidden className="h-px flex-1 bg-line md:hidden" />
              </div>
              <h3 className="mt-5 font-display text-[1.25rem] font-bold tracking-[-0.02em] text-ink">
                {s.title}
              </h3>
              <p className="mt-2.5 max-w-[40ch] text-[0.9375rem] leading-[1.65] text-ink-soft">
                {s.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
