/**
 * Content for the "Timeless Elegance" luxe homepage.
 * Image paths point at real assets already in /public/images so every
 * card resolves without placeholders.
 */

export interface Collection {
  name: string;
  tagline: string;
  image: string;
  href: string;
}

export interface Product {
  name: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  href: string;
}

export interface Feature {
  /** react-icons name resolved in the component */
  icon: "gem" | "hammer" | "leaf" | "shield";
  title: string;
  body: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  avatarInitial: string;
}

const BASE = "/images/aurea-jewellery";

export const collections: Collection[] = [
  {
    name: "Signature Necklaces",
    tagline: "The pieces we are known for",
    image: `${BASE}/Pendants-Necklaces/diamond-pendant.webp`,
    href: "/pendants-necklaces",
  },
  {
    name: "Pendants",
    tagline: "A single note, close to the heart",
    image: `${BASE}/Pendants-Necklaces/aurea-piece-194.webp`,
    href: "/pendants-necklaces",
  },
  {
    name: "Pearl Series",
    tagline: "Quiet luminance, worn every day",
    image: `${BASE}/Pearl-Series/pearl-necklace.webp`,
    href: "/pearl-creations",
  },
  {
    name: "Bespoke Diamonds",
    tagline: "Made once, for one",
    image: `${BASE}/Custom-Rings/daring-dazzlers/emerald-ring.webp`,
    href: "/custom-rings",
  },
];

export const bestSellers: Product[] = [
  {
    name: "Aurora Solitaire Pendant",
    price: "RM 4,280",
    rating: 5,
    reviews: 128,
    image: `${BASE}/Pendants-Necklaces/aurea-piece-195.webp`,
    href: "/pendants-necklaces",
  },
  {
    name: "Lumière Pearl Strand",
    price: "RM 3,150",
    rating: 5,
    reviews: 94,
    image: `${BASE}/Pearl-Series/aurea-piece-174.webp`,
    href: "/pearl-creations",
  },
  {
    name: "Comète Diamond Drop",
    price: "RM 6,900",
    rating: 4,
    reviews: 61,
    image: `${BASE}/Pendants-Necklaces/aurea-piece-196.webp`,
    href: "/pendants-necklaces",
  },
  {
    name: "Éclat Layered Chain",
    price: "RM 2,740",
    rating: 5,
    reviews: 143,
    image: `${BASE}/Pendants-Necklaces/aurea-piece-197.webp`,
    href: "/pendants-necklaces",
  },
];

export const features: Feature[] = [
  {
    icon: "gem",
    title: "Ethically sourced stones",
    body: "Every gemstone is traceable and conflict-free, chosen in person for its character.",
  },
  {
    icon: "hammer",
    title: "Handcrafted by our atelier",
    body: "Each piece is set and finished by hand in Kuala Lumpur — never mass-produced.",
  },
  {
    icon: "leaf",
    title: "Recycled precious metals",
    body: "Our gold and platinum are refined from reclaimed sources, kinder to the earth.",
  },
  {
    icon: "shield",
    title: "Lifetime care promise",
    body: "Complimentary cleaning, re-plating, and resizing for as long as you wear it.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The necklace arrived beautifully packaged and the craftsmanship is beyond anything I expected. It has become the piece I reach for every day.",
    name: "Sophia Lim",
    location: "Kuala Lumpur",
    avatarInitial: "S",
  },
  {
    quote:
      "I commissioned a pendant for our anniversary. The team listened to every detail — it feels like it was made only for us, because it was.",
    name: "Daniel Tan",
    location: "Penang",
    avatarInitial: "D",
  },
  {
    quote:
      "Elegant, unhurried, and genuinely personal. From the first message to the final reveal, I never once felt like a transaction.",
    name: "Priya Menon",
    location: "Singapore",
    avatarInitial: "P",
  },
];

/** Instagram-style gallery — varied heights drive the masonry rhythm. */
export const gallery: string[] = [
  `${BASE}/Pendants-Necklaces/aurea-piece-194.webp`,
  `${BASE}/Pearl-Series/aurea-piece-175.webp`,
  `${BASE}/EarRings/aurea-piece-150.webp`,
  `${BASE}/Pendants-Necklaces/aurea-piece-196.webp`,
  `${BASE}/Bangles-Bracelets/aurea-piece-1.webp`,
  `${BASE}/Pearl-Series/aurea-piece-176.webp`,
  `${BASE}/Pendants-Necklaces/aurea-piece-197.webp`,
  `${BASE}/EarRings/aurea-piece-151.webp`,
];

export const aboutImage = `${BASE}/hero-featured.webp`;
