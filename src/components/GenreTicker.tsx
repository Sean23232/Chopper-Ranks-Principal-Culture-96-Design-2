const ITEMS = [
  "Booking enquiries",
  "Custom team songs",
  "Commercials & brand spots",
  "Reggae · Gospel · Country",
  "Licensing & playback",
  "Press & appearances",
  "Written, composed, arranged, produced by the artist",
];

export default function GenreTicker() {
  return (
    <div className="group/ticker relative overflow-hidden border-b border-line bg-brand-950 py-3">
      <div aria-hidden className="absolute inset-0 texture-grid opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-950 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-950 to-transparent"
      />
      <div className="relative flex w-max animate-[marquee_42s_linear_infinite] group-hover/ticker:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-6 pr-10">
                <span aria-hidden className="h-[5px] w-[5px] rotate-45 bg-gold-400/80" />
                <span className="label-mono whitespace-nowrap text-[0.5625rem] text-white/55">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
