import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV } from "../data";
import { BrandMark, Button } from "./primitives";
import { cn } from "../utils/cn";
import { scrollToId } from "../utils/scroll";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const onScroll = () => {
      const probe = window.scrollY + window.innerHeight * 0.32;
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-line/90 bg-paper/88 shadow-[0_1px_0_rgba(17,25,27,0.03),0_16px_40px_-36px_rgba(6,32,40,0.6)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center gap-6 px-5 sm:px-7">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
          className="flex items-center gap-3 shrink-0 group"
        >
          <BrandMark className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[18deg]" />
          <span className="leading-none">
            <span className="block font-display text-[1.0625rem] font-extrabold tracking-[-0.03em] text-ink">
              Chopper Ranks
            </span>
            <span className="label-mono mt-[3px] block text-[0.5625rem] text-ink-faint">
              Culture&nbsp;96
            </span>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                go(item.id);
              }}
              className={cn(
                "relative rounded-lg px-3.5 py-2 text-[0.875rem] font-medium transition-colors duration-200",
                active === item.id ? "text-ink" : "text-ink-soft hover:text-ink"
              )}
            >
              {item.label}
              <span
                aria-hidden
                className={cn(
                  "absolute inset-x-3.5 -bottom-[2px] h-[2px] origin-left rounded-full bg-gold-500 transition-transform duration-300",
                  active === item.id ? "scale-x-100" : "scale-x-0"
                )}
              />
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <Button
            size="md"
            className="hidden sm:inline-flex"
            onClick={() => scrollToId("contact", "#cf-first")}
          >
            Get Started
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-[2px] group-hover/btn:-translate-y-[2px]" />
          </Button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[11px] border border-line bg-white text-ink transition-colors hover:border-brand-700/40 hover:text-brand-800 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-brand-950/28" onClick={() => setOpen(false)} aria-hidden />
        <div
          className={cn(
            "absolute inset-x-0 top-0 origin-top rounded-b-[22px] border-b border-line bg-paper px-5 pb-7 pt-[86px] shadow-panel transition-transform duration-300 ease-out",
            open ? "translate-y-0" : "-translate-y-6"
          )}
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className="flex items-center justify-between border-b border-line-soft py-4 text-left font-display text-[1.375rem] font-bold tracking-[-0.02em] text-ink transition-colors hover:text-brand-700"
                style={open ? { animation: `rise 0.45s ${i * 55}ms both` } : undefined}
              >
                {item.label}
                <span className="label-mono text-[0.625rem] text-ink-faint">
                  0{i + 1}
                </span>
              </button>
            ))}
          </nav>
          <div className="mt-6 grid gap-2.5">
            <Button size="lg" fullOnMobile onClick={() => scrollToId("contact", "#cf-first")}>
              Get Started
            </Button>
            <Button variant="outline" size="lg" fullOnMobile onClick={() => go("contact")}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
