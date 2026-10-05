import { ArrowRight, Quote } from "lucide-react";
import { VALUES } from "../data";
import { Equalizer, Reveal, SectionLabel } from "./primitives";
import { scrollToId } from "../utils/scroll";

const FACTS = [
  { k: "Origin", v: "Born in Jamaica, music began in New York, now based in Florida." },
  { k: "Catalogue", v: "Many self-produced albums, including the 21-track “Deal With It”." },
  { k: "Company", v: "Culture 96 / Chopper Entertainment — he is the Principal." },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_45%_at_100%_0%,rgba(27,106,120,0.07),transparent_60%)]"
      />
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-12 px-5 sm:px-7 lg:grid-cols-12 lg:gap-16">
        {/* LEFT — brand element */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-brand-950 p-7 text-paper shadow-panel sm:p-8">
                <div aria-hidden className="absolute inset-0 texture-grid opacity-70" />
                <div
                  aria-hidden
                  className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full border border-gold-400/25"
                />
                <div className="relative">
                  <Quote className="h-6 w-6 text-gold-400/80" strokeWidth={1.6} />
                  <p className="mt-5 font-display text-[1.375rem] font-semibold leading-[1.32] tracking-[-0.02em] text-white sm:text-[1.6rem]">
                    To love, teach, give, help, forgive, learn, respect and stay humble. Listen to the
                    words of my songs and you will know.
                  </p>
                  <p className="label-mono mt-5 text-[0.5625rem] text-white/45">
                    Chopper Ranks · on why he makes music
                  </p>

                  <div className="mt-7 flex flex-wrap gap-1.5 border-t border-white/10 pt-6">
                    {VALUES.map((v) => (
                      <span
                        key={v}
                        className="rounded-full border border-white/12 bg-white/[0.05] px-2.5 py-1 text-[0.6875rem] font-medium text-white/70 transition-colors duration-200 hover:border-gold-400/50 hover:text-white"
                      >
                        {v}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-5">
                    <Equalizer />
                    <p className="label-mono text-[0.5625rem] text-white/45">
                      Culture&nbsp;96 · direct line open
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* RIGHT — content */}
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel>About Chopper Ranks</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 max-w-[22ch] font-display text-[2rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-ink sm:text-[2.6rem]">
              An artist who carries the whole record himself.
            </h2>
          </Reveal>

          <div className="mt-7 grid gap-5 text-[1rem] leading-[1.72] text-ink-soft sm:grid-cols-2 sm:gap-7">
            <Reveal delay={100} as="div">
              <p>
                Chopper Ranks combines dancehall, country western and gospel with a reggae flair, and
                writes, composes, arranges and produces the material himself. The result is a catalogue
                that sits in no single genre: reggae and hip hop, country standards and gospel, sung in a
                voice that is immediately recognisable.
              </p>
            </Reveal>
            <Reveal delay={150} as="div">
              <p>
                The work has carried him into studios and onto stages far from either scene — guest
                recordings with reggae artists Dennis Brown and Sugar Minott, radio and television
                recognition (including UPN9) for his place in gospel-reggae and his influence in the
                community, movie stunt work, and appearances in venues such as Madison Square Garden.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <dl className="mt-10 divide-y divide-line rounded-[16px] border border-line bg-white/70 px-5 shadow-soft sm:px-6">
              {FACTS.map((f) => (
                <div
                  key={f.k}
                  className="group grid grid-cols-1 gap-1 py-4 transition-colors sm:grid-cols-[130px_1fr] sm:gap-6"
                >
                  <dt className="label-mono pt-[3px] text-[0.5625rem] text-ink-faint transition-colors group-hover:text-brand-700">
                    {f.k}
                  </dt>
                  <dd className="text-[0.9375rem] leading-[1.6] font-medium text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={240}>
            <button
              type="button"
              onClick={() => scrollToId("information")}
              className="group/link mt-8 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand-800 transition-colors hover:text-brand-600"
            >
              What the direct line covers
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-brand-800/25 transition-all duration-200 group-hover/link:translate-x-[3px] group-hover/link:border-brand-700/50">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
