import { ArrowUpRight } from "lucide-react";
import { CONTACT, NAV } from "../data";
import { BrandMark } from "./primitives";
import { scrollToId } from "../utils/scroll";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper-2/70">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-7 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* brand */}
          <div className="lg:col-span-5">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("home");
              }}
              className="group inline-flex items-center gap-3"
            >
              <BrandMark className="h-10 w-10 transition-transform duration-500 group-hover:rotate-[18deg]" />
              <span className="leading-none">
                <span className="block font-display text-[1.125rem] font-extrabold tracking-[-0.03em] text-ink">
                  Chopper Ranks
                </span>
                <span className="label-mono mt-1 block text-[0.5625rem] text-ink-faint">
                  {CONTACT.role}
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-[44ch] text-[0.9375rem] leading-[1.65] text-ink-soft">
              Reggae, dancehall, country western and gospel written, composed, arranged and produced by
              the artist himself — with a single conversation line for the music, the bookings and
              everything Culture 96 takes on.
            </p>
          </div>

          {/* nav */}
          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="label-mono text-[0.5625rem] text-ink-faint">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(n.id);
                    }}
                    className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-ink-soft transition-colors hover:text-brand-800"
                  >
                    <span className="h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-4" />
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div className="lg:col-span-4">
            <p className="label-mono text-[0.5625rem] text-ink-faint">Contact</p>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem] font-medium">
              {CONTACT.emails.map((em) => (
                <li key={em}>
                  <a
                    href={`mailto:${em}`}
                    className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-brand-800"
                  >
                    {em}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity hover:opacity-100" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-brand-800"
                >
                  {CONTACT.phone}
                </a>
              </li>
              {[...CONTACT.sites, ...CONTACT.profiles].map((s) => (
                <li key={s.href + s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-brand-800"
                  >
                    {s.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[0.875rem] text-ink-faint">{CONTACT.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-ink-faint">
            © {year} Chopper Ranks · Culture 96. All rights reserved.
          </p>
          <p className="label-mono text-[0.5rem] text-ink-faint">
            Direct conversation line · Reggae · Gospel · Country
          </p>
        </div>
      </div>
    </footer>
  );
}
