import { customRingsHref, customRingsSlugs } from "@/lib/customRingsTabs";

export const heroFeatured = {
  src: "/images/aurea-jewellery/hero-featured.webp",
  alt: "Featured Auréa bespoke jewelry piece",
};

export const founderPortrait = {
  src: "/images/aurea-jewellery/founder-portrait.webp",
  alt: "Auréa founder portrait in the atelier",
};

export const editorialStudio = {
  src: "/images/editorial-studio.webp",
  alt: "Editorial studio image of Auréa jewelry",
};

export const aboutHero = {
  src: "/images/about-hero.webp",
  alt: "Auréa atelier, quiet luxury portrait",
};

export const creations = [
  {
    title: "Eternal Band Ring",
    tag: "CUSTOM CREATION",
    desc: "A timeless band crafted in 18k gold, designed to be worn alone or stacked.",
    image: "/images/aurea-jewellery/Custom-Rings/daring-dazzlers/emerald-ring.webp",
    alt: "Eternal Band Ring",
    href: customRingsHref(customRingsSlugs.daringDazzlers),
  },
  
  {
    title: "Pearl Drop Necklace",
    tag: "THE HEIRLOOM",
    desc: "Freshwater pearl drop on a sterling silver chain. Effortlessly classic.",
    image: "/images/aurea-jewellery/Pearl-Series/pearl-necklace.webp",
    alt: "Pearl Drop Necklace",
    href: "/pearl-creations",
  },
  {
    title: "Diamond Solitaire Ring",
    tag: "ENGAGEMENT STORY",
    desc: "A classic 0.5ct diamond solitaire set in polished platinum.",
    image: "/images/aurea-jewellery/Custom-Rings/Engagement Rings/diamond-solitaire.webp",
    alt: "Diamond Solitaire Ring",
    href: customRingsHref(customRingsSlugs.engagementRings),
  },
  {
    title: "Hoop Classics",
    tag: "THE MEN'S ATELIER",
    desc: "Everyday gold vermeil hoops in three sizes. Light, comfortable, iconic.",
    image: "/images/aurea-jewellery/Custom-Rings/Men's Rings/hoop-classics.webp",
    alt: "Hoop Classics",
    href: customRingsHref(customRingsSlugs.mensRings),
  },
];

export const processSteps = [
  {
    no: "01",
    title: "The First Conversation",
    text: "Before a single line is drawn, we listen. You share the occasion, the person, the feeling. We ask questions that go deeper than expectations — because meaning begins there.",
  },
  {
    no: "02",
    title: "Vision & Material",
    text: "We translate what we hear into form. Proportions. Stones. Metal. Tone. You respond. We refine. Nothing moves forward until it feels undeniable.",
  },
  {
    no: "03",
    title: "The Making",
    text: "Hands take over. Time slows. Wax, casting, setting — each step done with quiet precision. Nothing rushed. Nothing repeated. This is where intention becomes permanence.",
  },
  {
    no: "04",
    title: "The Reveal",
    text: "Your piece arrives complete. Not just as jewelry — but as expression made visible. From this moment, it is yours. Entirely. Irrevocably.",
  },
];

export const categories = [
  {
    subtitle: "Signature Category",
    title: "Pendants & Necklaces",
    image: "/images/aurea-jewellery/Pendants-Necklaces/diamond-pendant.webp",
    alt: "Pendants & Necklaces category",
    href: "/pendants-necklaces",
  },
  {
    subtitle: "Signature Category",
    title: "Bangles & Bracelets",
    image: "/images/aurea-jewellery/Bangles-Bracelets/gold-bangle.webp",
    alt: "Bangles & Bracelets category",
    href: "/bangles-bracelets",
  },
  {
    subtitle: "Signature Category",
    title: "Earrings",
    image: "/images/aurea-jewellery/EarRings/drop-earrings.webp",
    alt: "Ear Rings category",
    href: "/earrings",
  },
];

/** Short quotes for the homepage testimonial slider */
export const homeTestimonials = [
  {
    quote: "I bought the pearl drop necklace as a birthday gift for my sister. It arrived beautifully packaged and she absolutely loves it. Will definitely be back.",  
    attribution: "Sophie W. — London",
  },
  {
    quote: "Ordered the diamond solitaire ring for my proposal. The quality is stunning and the whole experience was perfect. Highly recommend.",  
    attribution: "James R. — Manchester",
  },
  {
    quote: "The layering chains are gorgeous. I bought three and wear them every day. Great quality for the price.",
    attribution: "Priya M. — Birmingham",
  },
];

export const principles = [
  {
    number: "01",
    title: "Designed with intimacy",
    text: "Each piece begins with a personal conversation, not a product template. The intention is to translate sentiment into form with softness and clarity.",
  },
  {
    number: "02",
    title: "Refined with restraint",
    text: "Luxury here is expressed through balance, proportion, material sensitivity, and detail, not excess for the sake of appearance.",
  },
  {
    number: "03",
    title: "Created to endure",
    text: "Auréa jewelry is meant to remain meaningful beyond the moment it is received, becoming part of memory, ritual, and identity.",
  },
];

export const atelierNotes = [
  "Founder-led creative direction",
  "Private bespoke consultation",
  "Emotion-led design decisions",
  "Timeless gemstone storytelling",
];
