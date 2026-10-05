/** Scroll to a section, honouring the sticky header, then optionally focus a field. */
export function scrollToId(id: string, focusSelector?: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = el.getBoundingClientRect().top + window.scrollY - 78;
  window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });

  if (focusSelector) {
    window.setTimeout(
      () => {
        const target = document.querySelector<HTMLElement>(focusSelector);
        target?.focus({ preventScroll: true });
      },
      reduce ? 120 : 620
    );
  }
}
