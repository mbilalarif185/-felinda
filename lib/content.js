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
  alt: "Felinda atelier — quiet luxury portrait",
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
    tag: "Custom Ring",
    desc: "Designed around the rare chromatic depth of a Colombian emerald the setting built to disappear and let the stone speak entirely for itself.",
    image: "/images/felinda-jewelry/Custom-Rings/daring-dazzlers/FJ Insta-Emerald Ring 2.webp",
    alt: "Emerald bespoke custom ring",
    href: customRingsHref(customRingsSlugs.daringDazzlers),
  },
  
  {
    title: "Pearl Creation",
    tag: "Bespoke Gift",
    desc: "A piece made to be passed down. Restrained in form, radiant in material, and carrying the full emotional weight of a deliberate gift..",
    image: "/images/felinda-jewelry/Pearl-Series/FJ Insta-ADELA Ring and Earrings D.webp",
    alt: "Pearl signature pendant gift piece",
    href: "/pearl-creations",
  },
  {
    title: "Sapphire Bridal Piece",
    tag: "Engagement",
    desc: "Conceived for a proposal at the edge of the South China Sea. The blue of the stone was chosen to hold the memory of that exact light, forever.",
    image: "/images/felinda-jewelry/Custom-Rings/Engagement Rings/FJ Insta- Bi colour sapphire Rng 4.webp",
    alt: "Sapphire bridal engagement ring",
    href: customRingsHref(customRingsSlugs.engagementRings),
  },
  {
    title: "Men's Ring",
    tag: "Wedding",
    desc: "Drawn from the proportions of Brutalist facades the client photographed across three continents. Every angle considered. Every millimetre intentional.",
    image: "/images/felinda-jewelry/Custom-Rings/Men's Rings/FJ Insta-Mens Blue Sapphire Ring 2.webp",
    alt: "Diamond story wedding band",
    href: customRingsHref(customRingsSlugs.mensRings),
  },
];

export const processSteps = [
  {
    no: "01",
    title: "The First Conversation",
    text: "Before a single line is drawn, we listen. You tell us about the occasion, the person, the feeling you are trying to preserve. We ask questions that might surprise you  because the best jewelry comes from knowing more than measurements.",
  },
  {
    no: "02",
    title: "Vision & Material",
    text: "We translate what we've heard into a design direction proportions, gemstone candidates, metal tone, and aesthetic sensibility. You respond. We refine. Nothing moves forward until the vision feels undeniably right.",
  },
  {
    no: "03",
    title: "The Making",
    text: "Skilled hands take over. The wax model, the casting, the stone setting each stage is executed with the kind of attention that cannot be programmed or rushed. This is where the piece earns its permanence.",
  },
  {
    no: "04",
    title: "The Reveal",
    text: "Your piece arrives complete not just as an object, but as an answer to everything you wanted to express. From here, it is entirely, irreversibly yours.",
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
    title: "Ear Rings",
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
    
"Most jewelers sell you what they already have. Felinda built something I didn't know existed yet. The engagement ring they created made my partner cry — and she never cries.",  
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
    text: "Luxury here is expressed through balance, proportion, material sensitivity, and detail — never excess for the sake of appearance.",
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
