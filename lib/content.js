import { customRingsHref, customRingsSlugs } from "@/lib/customRingsTabs";

export const heroFeatured = {
  src: "/images/felinda-jewelry/0E0A5900.webp",
  alt: "Featured Felinda bespoke jewelry piece",
};

export const founderPortrait = {
  src: "/images/felinda-jewelry/The-Designer-in-malaysia.webp",
  alt: "Felinda founder portrait in the atelier",
};

export const editorialStudio = {
  src: "/images/gold-jewellery-malaysia-premium.webp",
  alt: "Editorial studio image of Felinda jewelry",
};

export const aboutHero = {
  src: "/images/jewellery-malaysia-luxury.webp",
  alt: "Felinda atelier, quiet luxury portrait",
};

export const valueStrip = [
  "Handcrafted",
  "Private Atelier",
  "Bespoke Design",
  "Diamonds & Rare Gemstones",
  "One Client at a Time",
  "Made to Last Generations",
  "By Appointment",
];

export const creations = [
  {
    title: "Emerald Bespoke Ring",
    tag: "CUSTOM CREATION",
    desc: "Anchored by the rare chromatic depth of a Colombian emerald, the setting is deliberately restrained designed to disappear, so the stone can speak without interruption.",
    image: "/images/felinda-jewelry/Custom-Rings/daring-dazzlers/FJ Insta-Emerald Ring 2.webp",
    alt: "Emerald bespoke custom ring",
    href: customRingsHref(customRingsSlugs.daringDazzlers),
  },
  
  {
    title: "Pearl Creation",
    tag: "THE HEIRLOOM",
    desc: "Created to be passed down. Understated in form, radiant in material, and imbued with the emotional weight of a gift chosen with intention.",
    image: "/images/felinda-jewelry/Pearl-Series/FJ Insta-ADELA Ring and Earrings D.webp",
    alt: "Pearl signature pendant gift piece",
    href: "/pearl-creations",
  },
  {
    title: "Sapphire Bridal Piece",
    tag: "ENGAGEMENT STORY",
    desc: "Conceived by the sea, in a moment of light and intention. A bi colour sapphire of ocean blue and sea green holds that memory forever suspended within its depth.",
    image: "/images/felinda-jewelry/Custom-Rings/Engagement Rings/FJ Insta- Bi colour sapphire Rng 4.webp",
    alt: "Sapphire bridal engagement ring",
    href: customRingsHref(customRingsSlugs.engagementRings),
  },
  {
    title: "Men's Ring",
    tag: "THE MEN'S ATELIER",
    desc: "Inspired by Brutalist architecture collected across three continents. Structured with intention. Defined by precision in every millimetre.",
    image: "/images/felinda-jewelry/Custom-Rings/Men's Rings/FJ Insta-Mens Blue Sapphire Ring 2.webp",
    alt: "Diamond story wedding band",
    href: customRingsHref(customRingsSlugs.mensRings),
  },
];

export const processSteps = [
  {
    no: "01",
    title: "The First Conversation",
    text: "Before a single line is drawn, we listen.You share the occasion, the person, the feeling.We ask questions that go deeper than expectations because meaning begins there.",
  },
  {
    no: "02",
    title: "Vision & Material",
    text: "We translate what we hear into form.Proportions. Stones. Metal. Tone.You respond. We refine. Nothing moves forward until it feels undeniable.",
  },
  {
    no: "03",
    title: "The Making",
    text: "Hands take over. Time slows. Wax, casting, setting each step done with quiet precision. Nothing rushed. Nothing repeated. This is where intention becomes permanence.",
  },
  {
    no: "04",
    title: "The Reveal",
    text: "Your piece arrives complete. Not just as jewelry but as expression made visible. From this moment, it is yours. Entirely. Irrevocably.",
  },
];

export const categories = [
  {
    subtitle: "Signature Category",
    title: "Pendants & Necklaces",
    image: "/images/felinda-jewelry/Pendants-Necklaces/FJ Insta- Jade Diamond Pendant.webp",
    alt: "Pendants & Necklaces category",
    href: "/pendants-necklaces",
  },
  {
    subtitle: "Signature Category",
    title: "Bangles & Bracelets",
    image: "/images/felinda-jewelry/Bangles-Bracelets/FJ Insta-Gemsone Jade Bangle.webp",
    alt: "Bangles & Bracelets category",
    href: "/bangles-bracelets",
  },
  {
    subtitle: "Signature Category",
    title: "Earrings",
    image: "/images/felinda-jewelry/EarRings/FJ Insta-Scapolite earrings.webp",
    alt: "Ear Rings category",
    href: "/earrings",
  },
];

/** Short quotes for the homepage testimonial slider */
export const homeTestimonials = [
  {
    quote:
    "I brought Felinda a photograph, a colour, and a feeling I couldn't name. They gave me something I wear every single day and still cannot fully explain. That's the sign of something real.",  
    attribution: "Private Client • Kuala Lumpur",
  },
  {
    quote:
    
"Most jewelers sell you what they already have. Felinda built something I didn't know existed yet. The engagement ring they created made my partner cry, and she never cries.",  
    attribution: "Private Client, Johor Bahru",
  },
  {
    quote:
    "I gave them three words and a mood board. They gave me a piece my daughter will one day give to her daughter. I didn't expect to feel this way about jewelry. Now I understand why people do.",
        attribution: "Private Client, Seremban",
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
    text: "Felinda jewelry is meant to remain meaningful beyond the moment it is received, becoming part of memory, ritual, and identity.",
  },
];

export const atelierNotes = [
  "Founder-led creative direction",
  "Private bespoke consultation",
  "Emotion-led design decisions",
  "Timeless gemstone storytelling",
];
