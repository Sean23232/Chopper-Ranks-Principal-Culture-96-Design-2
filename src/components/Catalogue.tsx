import { ArrowUpRight, Disc3, Play } from "lucide-react";
import { CONTACT, RELEASES } from "../data";
import { Reveal, SectionLabel } from "./primitives";
import { scrollToId } from "../utils/scroll";

function Vinyl() {
  return (
    <div className="group/v relative aspect-square w-full max-w-[210px]">
      <svg viewBox="0 0 200 200" className="h-full w-full transition-transform duration-[1600ms] ease-out group-hover/v:rotate-[120deg]">
        <defs>
          <radialGradient id="disc" cx="50%" cy="42%" r="62%">
            <stop offset="0%" stopColor="#1a4d5a" />
            <stop offset="55%" stopColor="#0a2f39" />
            <stop offset="100%" stopColor="#062028" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="98" fill="url(#disc)" />
        {[92, 84, 76, 68, 60, 52, 44].map((r, i) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke="rgba(251,250,247,0.13)"
            strokeWidth={i % 2 ? 0.6 : 1}
          />
        ))}
        <circle cx="100" cy="100" r="34" fill="#c8862b" />
        <circle cx="100" cy="100" r="34" fill="none" stroke="rgba(6,32,40,0.25)" strokeWidth="1" />
        <circle cx="100" cy="100" r="4" fill="#062028" />
        <text
          x="100"
          y="92"
          textAnchor="middle"
          fontFamily="'IBM Plex Mono', monospace"
          fontSize="8.5"
          letterSpacing="1.4"
          fill="rgba(6,32,40,0.8)"
        >
          CULTURE 96
        </text>
        <text
          x="100"
          y="116"
          textAnchor="middle"
          fontFamily="'IBM Plex Mono', monospace"
          fontSize="7"
          letterSpacing="0.8"
          fill="rgba(6,32,40,0.62)"
        >
          21 TRACKS
        </text>
        <path d="M100 4a96 96 0 0 1 0 192" fill="none" stroke="rgba(251,250,247,0.16)" strokeWidth="2" />
      </svg>
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/v:opacity-100">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper/92 text-brand-900 shadow-lift">
          <Play className="ml-[2px] h-4 w-4 fill-current" />
        </span>
      </span>
    </div>
  );
}

export default function Catalogue() {
  const [featured, ...rest] = RELEASES;

  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-7">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>From the catalogue</SectionLabel>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 font-display text-[1.75rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.15rem]">
                Titles people write in about.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={110} className="lg:col-span-5">
            <p className="max-w-[46ch] text-[0.9375rem] leading-[1.65] text-ink-soft lg:ml-auto lg:text-right">
              Selected releases and singles from the artist’s public profiles. Clearances, credits and
              playback requests go through the same line.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* featured */}
          <Reveal className="lg:col-span-5">
            <article className="group relative h-full overflow-hidden rounded-[20px] border border-white/10 bg-brand-950 p-6 text-paper shadow-panel sm:p-8">
              <div aria-hidden className="absolute inset-0 texture-grid opacity-60" />
              <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center">
                <Vinyl />
                <div className="min-w-0">
                  <p className="label-mono text-[0.5625rem] text-gold-400">
                    {featured.kind} · {featured.year}
                  </p>
                  <h3 className="mt-2.5 font-display text-[1.75rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
                    {featured.title}
                  </h3>
                  <p className="mt-3 max-w-[34ch] text-[0.875rem] leading-[1.6] text-white/65">
                    {featured.detail}
                  </p>
                  <p className="label-mono mt-4 text-[0.5rem] text-white/40">{featured.label}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {featured.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/12 bg-white/[0.05] px-2.5 py-1 text-[0.6875rem] font-medium text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                <Disc3 className="h-4 w-4 text-gold-400" strokeWidth={1.6} />
                <p className="text-[0.8125rem] text-white/55">
                  Compilation of his best-loved work to date.
                </p>
                <a
                  href={CONTACT.profiles[0].href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ml-auto inline-flex h-9 shrink-0 items-center gap-1.5 rounded-[10px] bg-white/10 px-3.5 text-[0.8125rem] font-semibold text-white ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/20"
                >
                  Details
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          </Reveal>

          {/* list */}
          <div className="lg:col-span-7">
            <ul className="h-full divide-y divide-line border-y border-line">
              {rest.map((r, i) => (
                <Reveal key={r.title} as="li" delay={i * 70}>
                  <div className="group grid grid-cols-1 items-start gap-x-6 gap-y-2 px-1 py-5 transition-colors duration-300 hover:bg-white/70 sm:grid-cols-[minmax(0,1fr)_auto]">
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-3">
                        <span className="label-mono shrink-0 text-[0.5625rem] text-ink-faint">
                          {String(i + 2).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-[1.2rem] font-bold tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-brand-800">
                          {r.title}
                        </h3>
                      </div>
                      <p className="label-mono mt-1.5 flex flex-wrap items-center gap-x-2.5 pl-9 text-[0.5rem] text-ink-faint">
                        <span>{r.kind}</span>
                        <span aria-hidden className="h-3 w-px bg-line" />
                        <span>{r.label}</span>
                        <span aria-hidden className="h-3 w-px bg-line" />
                        <span>{r.year}</span>
                      </p>
                      <p className="mt-2.5 max-w-[52ch] pl-9 text-[0.875rem] leading-[1.6] text-ink-soft">
                        {r.detail}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 pl-9 sm:justify-end sm:pl-0">
                      {r.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line bg-white px-2.5 py-1 text-[0.6875rem] font-medium text-ink-soft"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
              <li className="px-1 py-5">
                <button
                  type="button"
                  onClick={() => scrollToId("contact", "#cf-message")}
                  className="group/ask inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand-800 transition-colors hover:text-brand-600"
                >
                  Ask about a specific track or session
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-brand-800/25 transition-all duration-200 group-hover/ask:translate-x-[3px]">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <Reveal delay={60}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
            <span className="label-mono text-[0.5625rem] text-ink-faint">Music profiles</span>
            {CONTACT.profiles.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group/prof inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-brand-800 transition-colors hover:text-brand-600"
              >
                {p.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/prof:translate-x-[2px] group-hover/prof:-translate-y-[2px]" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
