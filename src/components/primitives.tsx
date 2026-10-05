import {
  useEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/* Scroll reveal                                                       */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "header" | "footer";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as ElementType;

  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", visible && "is-visible", className)}
    >
      {children}
    </Comp>
  );
}

/* ------------------------------------------------------------------ */
/* Section label                                                       */
/* ------------------------------------------------------------------ */

export function SectionLabel({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "label-mono flex items-center gap-2.5",
        tone === "light" ? "text-brand-700" : "text-gold-400",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "inline-block h-[7px] w-[7px] rotate-45",
          tone === "light" ? "bg-gold-500" : "bg-gold-400"
        )}
      />
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost" | "light";
  size?: "md" | "lg";
  fullOnMobile?: boolean;
};

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-[11px] font-semibold tracking-[-0.01em] transition-all duration-200 ease-out select-none disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<string, string> = {
  primary:
    "bg-brand-800 text-white shadow-[0_10px_26px_-14px_rgba(6,32,40,0.75)] hover:bg-brand-900 hover:-translate-y-[1px] active:translate-y-0",
  outline:
    "bg-white text-ink border border-line hover:border-brand-700/45 hover:text-brand-800 hover:-translate-y-[1px] active:translate-y-0",
  ghost:
    "bg-transparent text-ink-soft hover:text-brand-800 border border-transparent hover:border-line",
  light:
    "bg-paper text-brand-900 hover:bg-white hover:-translate-y-[1px] active:translate-y-0 shadow-[0_14px_34px_-20px_rgba(0,0,0,0.7)]",
};

const sizes: Record<string, string> = {
  md: "text-[0.875rem] px-5 h-11",
  lg: "text-[0.9375rem] px-6 h-[3.25rem]",
};

export function Button({
  variant = "primary",
  size = "md",
  fullOnMobile,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cn(base, variants[variant], sizes[size], fullOnMobile && "w-full sm:w-auto", className)}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  fullOnMobile,
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: "primary" | "outline" | "ghost" | "light";
  size?: "md" | "lg";
  fullOnMobile?: boolean;
  className?: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      {...rest}
      className={cn(base, variants[variant], sizes[size], fullOnMobile && "w-full sm:w-auto", className)}
    >
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Brand mark                                                          */
/* ------------------------------------------------------------------ */

export function BrandMark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const ring = tone === "dark" ? "#0f3f4a" : "#fbfaf7";
  const glyph = tone === "dark" ? "#fbfaf7" : "#0a2f39";
  return (
    <svg viewBox="0 0 40 40" className={cn("h-9 w-9", className)} role="img" aria-label="Chopper Ranks mark">
      <circle cx="20" cy="20" r="19" fill={ring} />
      <circle cx="20" cy="20" r="13.5" fill="none" stroke={tone === "dark" ? "#1b6a78" : "#14525f"} strokeWidth="1" opacity="0.55" />
      <circle cx="20" cy="20" r="8.5" fill="none" stroke={tone === "dark" ? "#1b6a78" : "#14525f"} strokeWidth="1" opacity="0.35" />
      <circle cx="20" cy="20" r="2.4" fill="#c8862b" />
      <path d="M20 2.2a17.8 17.8 0 0 1 0 35.6" fill="none" stroke="#c8862b" strokeWidth="1.6" strokeLinecap="round" />
      <text
        x="20"
        y="24.4"
        textAnchor="middle"
        fontFamily="'IBM Plex Mono', monospace"
        fontSize="9"
        fontWeight="600"
        letterSpacing="0.5"
        fill={glyph}
      >
        CR
      </text>
    </svg>
  );
}

/* Small equalizer motif used across dark panels */
export function Equalizer({ tone = "light" }: { tone?: "light" | "dark" }) {
  const bars = [0.35, 0.7, 0.45, 1, 0.6, 0.85, 0.4, 0.95, 0.5, 0.75, 0.3, 0.65];
  const color = tone === "light" ? "rgba(251,250,247,0.55)" : "rgba(15,63,74,0.45)";
  return (
    <div className="flex h-6 items-end gap-[3px]" aria-hidden>
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-[3px] origin-bottom rounded-full animate-[breathe_5.5s_ease-in-out_infinite]"
          style={{
            height: `${h * 100}%`,
            background: i % 4 === 2 ? "#c8862b" : color,
            animationDelay: `${i * 0.22}s`,
            animationDuration: `${4 + (i % 4) * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
}
