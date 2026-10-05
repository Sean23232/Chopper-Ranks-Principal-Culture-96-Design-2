import type { ComponentType } from "react";
import { Megaphone, MessageSquareText, Music4, MicVocal } from "lucide-react";
import { SERVICES, type Service } from "../data";
import { LinkButton, Reveal, SectionLabel } from "./primitives";
import { scrollToId } from "../utils/scroll";

const ICONS: Record<Service["icon"], ComponentType<{ className?: string; strokeWidth?: number }>> = {
  music: Music4,
  mic: MicVocal,
  megaphone: Megaphone,
  message: MessageSquareText,
};

export default function Services() {
  return (
    <section id="information" className="relative border-y border-line bg-paper-2/60 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[46ch]">
            <Reveal>
              <SectionLabel>What we do</SectionLabel>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-ink sm:text-[2.6rem]">
                Four things people reach the line for.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-[38ch] text-[0.9375rem] leading-[1.65] text-ink-soft lg:text-right">
              Everything below is handled by the same person who signs the work — which is why the page
              asks for a conversation, not a ticket number.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.title} delay={i * 70} className={`${s.span} sm:col-span-1`}>
                <article className="group relative h-full overflow-hidden rounded-[16px] border border-line bg-white p-6 shadow-soft transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-brand-700/25 hover:shadow-lift sm:p-7">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gold-500 transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-6 -top-8 font-display text-[5.5rem] font-extrabold leading-none tracking-[-0.05em] text-brand-900/[0.045] transition-all duration-500 group-hover:text-brand-900/[0.075]"
                  >
                    0{i + 1}
                  </span>

                  <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-brand-800/12 bg-brand-50 text-brand-800 transition-colors duration-300 group-hover:bg-brand-800 group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>

                  <h3 className="relative mt-5 font-display text-[1.25rem] font-bold leading-tight tracking-[-0.02em] text-ink sm:text-[1.375rem]">
                    {s.title}
                  </h3>
                  <p className="relative mt-3 max-w-[54ch] text-[0.9375rem] leading-[1.65] text-ink-soft">
                    {s.body}
                  </p>
                  <p className="label-mono relative mt-5 border-t border-line-soft pt-4 text-[0.5625rem] text-ink-faint">
                    {s.meta}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-[16px] border border-brand-800/12 bg-brand-50/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <p className="max-w-[60ch] text-[0.9375rem] leading-[1.6] text-brand-900">
              <span className="font-semibold">Not sure which one you need?</span> Say what you have in
              mind in the message field — the thread can be sorted out in the conversation.
            </p>
            <LinkButton
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contact", "#cf-message");
              }}
              size="md"
              className="shrink-0"
            >
              Open the conversation
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
