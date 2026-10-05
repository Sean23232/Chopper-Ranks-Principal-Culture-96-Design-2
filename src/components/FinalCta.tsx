import { ArrowUpRight, PhoneCall } from "lucide-react";
import { CONTACT } from "../data";
import { Button, Equalizer, Reveal } from "./primitives";
import { scrollToId } from "../utils/scroll";

export default function FinalCta() {
  return (
    <section className="px-5 pb-16 sm:px-7 lg:pb-24">
      <Reveal>
        <div className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-[24px] bg-brand-950 px-6 py-14 text-paper shadow-panel sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          {/* ambient layers */}
          <div aria-hidden className="pointer-events-none absolute inset-0 texture-grid opacity-70" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-40 h-[420px] w-[420px] rounded-full border border-white/[0.07]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 -bottom-52 h-[420px] w-[420px] rounded-full border border-gold-400/20"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_10%_0%,rgba(27,106,120,0.5),transparent_62%)]"
          />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[22ch]">
              <p className="label-mono flex items-center gap-2.5 text-[0.625rem] text-gold-400">
                <span aria-hidden className="h-[7px] w-[7px] rotate-45 bg-gold-400" />
                The line is open
              </p>
              <h2 className="mt-5 font-display text-[2.25rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-white sm:text-[3rem] lg:text-[3.4rem]">
                Ready to connect?
              </h2>
              <p className="mt-5 max-w-[46ch] text-[1rem] leading-[1.7] text-white/70 lg:max-w-[52ch]">
                One form, four fields and a sentence about what you need — that is the whole process for
                music, booking, team songs or commercials from Chopper Ranks.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:pb-1">
              <Button
                variant="light"
                size="lg"
                fullOnMobile
                onClick={() => scrollToId("contact", "#cf-first")}
              >
                Get Started
                <ArrowUpRight className="h-[18px] w-[18px] transition-all duration-200 group-hover/btn:translate-x-[2px] group-hover/btn:-translate-y-[2px]" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                fullOnMobile
                onClick={() => scrollToId("contact")}
                className="border-white/20 text-white/85 hover:border-white/45 hover:bg-white/[0.06] hover:text-white"
              >
                Contact Us
                <PhoneCall className="h-[18px] w-[18px] opacity-70" />
              </Button>
            </div>
          </div>

          <div className="relative mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7">
            <Equalizer />
            <p className="text-[0.8125rem] text-white/50">
              {CONTACT.emails[0]} · {CONTACT.phone}
            </p>
            <p className="label-mono ml-auto text-[0.5625rem] text-white/35">
              Culture&nbsp;96 · {CONTACT.location}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
