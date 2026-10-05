import { HIGHLIGHTS } from "../data";
import { Reveal } from "./primitives";
import { cn } from "../utils/cn";

export default function TrustStrip() {
  return (
    <section className="border-y border-line bg-paper-2">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-7">
        <div className="grid grid-cols-1 gap-px bg-line/80 md:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal
              key={h.label}
              delay={i * 60}
              className={cn(
                "group relative bg-paper-2 px-0 py-6 transition-colors duration-300 hover:bg-[#f7f6f1] md:px-5 lg:px-7",
                i === 0 && "md:pl-0 lg:pl-0",
                i === 2 && "md:pl-0",
                (i === 1 || i === 3) && "md:pr-0 lg:pr-0",
                i === 3 && "md:pl-5"
              )}
            >
              <p className="label-mono flex items-center gap-2 text-[0.5625rem] text-ink-faint transition-colors duration-300 group-hover:text-brand-700">
                <span
                  aria-hidden
                  className="h-[6px] w-[6px] rotate-45 bg-gold-500/50 transition-transform duration-500 group-hover:rotate-[135deg] group-hover:bg-gold-500"
                />
                {h.label}
              </p>
              <p className="mt-2.5 max-w-[34ch] text-[0.9375rem] leading-[1.6] font-medium text-ink">
                {h.value}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
