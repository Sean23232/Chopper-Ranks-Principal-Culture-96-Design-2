export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "information", label: "Information" },
  { id: "contact", label: "Contact" },
] as const;

export const CONTACT = {
  firstName: "Chopper",
  lastName: "Ranks",
  role: "Principal, Culture 96",
  emails: ["mrranks@aol.com", "culture96@aol.com"],
  phone: "+1 (954) 274-6060",
  phoneHref: "tel:+19542746060",
  sites: [
    { label: "culture96.com", href: "https://culture96.com" },
    { label: "mrranks.com", href: "https://mrranks.com" },
  ],
  location: "Florida, United States",
  profiles: [
    { label: "AirPlay Direct", href: "https://airplaydirect.com/music/chopperranks/" },
    { label: "BroadJam", href: "https://www.broadjam.com/chopperranks" },
    { label: "N1M", href: "https://www.n1m.com/chopperranks" },
  ],
};

export const HIGHLIGHTS = [
  {
    label: "Who you reach",
    value: "Chopper Ranks himself — Principal at Culture 96, not a shared inbox.",
  },
  {
    label: "What he provides",
    value: "Original songs, production, live performance and custom tracks.",
  },
  {
    label: "Who it is for",
    value: "Labels, promoters, brands, teams, radio and listeners.",
  },
  {
    label: "Why start here",
    value: "One short conversation. No gatekeeper, no middle layer.",
  },
];

export const VALUES = [
  "love",
  "teach",
  "give",
  "help",
  "forgive",
  "learn",
  "respect",
  "humility",
];

export type Service = {
  icon: "music" | "mic" | "megaphone" | "message";
  title: string;
  body: string;
  meta: string;
  span: string;
};

export const SERVICES: Service[] = [
  {
    icon: "music",
    title: "Original music & production",
    body:
      "Every release is written, composed, arranged and produced in-house — a catalogue that moves between reggae, dancehall, country western, gospel and hip hop without losing its own voice.",
    meta: "Writing · Composition · Arranging · Production",
    span: "lg:col-span-7",
  },
  {
    icon: "mic",
    title: "Live performance & appearances",
    body:
      "Stage appearances, radio and TV bookings, festival sets and screen work, from club rooms to arenas such as Madison Square Garden.",
    meta: "Live · Broadcast · Screen",
    span: "lg:col-span-5",
  },
  {
    icon: "megaphone",
    title: "Booking, team songs & commercials",
    body:
      "Requests for bookings, custom team songs and commercial spots are handled directly — scope, usage and timeline agreed before anything is recorded.",
    meta: "Bookings · Team anthems · Brand spots",
    span: "lg:col-span-5",
  },
  {
    icon: "message",
    title: "The Culture 96 direct line",
    body:
      "This page is the conversation itself: leave a name, an email and a message, and it lands with the person who makes the decisions.",
    meta: "One form · One reply · No gatekeeper",
    span: "lg:col-span-7",
  },
];

export const RELEASES = [
  {
    title: "Deal With It",
    kind: "Album",
    year: "2011",
    label: "Chopper Brown Entertainment",
    detail: "21-track compilation of pop, reggae, country and gospel, plus reworked country standards.",
    tags: ["Reggae", "Gospel", "Country"],
  },
  {
    title: "Wise & Bold",
    kind: "Album",
    year: "—",
    label: "Ernie B's Reggae",
    detail: "Full-length release collected alongside the earlier catalogue of self-produced albums.",
    tags: ["Reggae", "Dancehall"],
  },
  {
    title: "My Brothers Keeper",
    kind: "Single",
    year: "—",
    label: "Chopper Entertainment",
    detail: "A song carried on the catalogue for its message — one of the tracks listeners ask for by name.",
    tags: ["Roots", "Message"],
  },
  {
    title: "The Gambler",
    kind: "Single",
    year: "—",
    label: "Chopper Entertainment",
    detail: "A country standard taken through a reggae and gospel reading — the crossover side of the work.",
    tags: ["Country", "Cover"],
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Connect",
    body:
      "Open the direct line below. It is the same channel Chopper Ranks uses with labels, promoters and brands.",
  },
  {
    n: "02",
    title: "Share your information",
    body:
      "First name, last name and an email address — the three details needed so the reply has somewhere to go.",
  },
  {
    n: "03",
    title: "Start the conversation",
    body:
      "Say what you have in mind: a booking, a song, a team anthem or a commercial. The chat opens from there.",
  },
];
