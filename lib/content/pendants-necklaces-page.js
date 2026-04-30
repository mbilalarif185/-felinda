/**
 * Pendants & Necklaces page copy — sourced from `Pendents and necklace.docx`.
 * Editorial polish; metadata matches the document’s recommended title and description.
 */

import {
  consultationBookingHref,
  whatsappBespokeJourneyHref,
} from "@/lib/contact";

export const pendantsNecklacesPageMeta = {
  absoluteTitle:
    "Custom Pendants & Necklaces Malaysia | Bespoke Fine Jewelry | Felinda",
  description:
    "Custom pendants and necklaces handmade in Malaysia—chains, solitaires, and collars in gold or platinum. Felinda bespoke heirloom jewelry; book your private consultation.",
};

/** Intro card H2 (CreationsPage): serif + script, same treatment as earrings page. */
export const pendantsNecklacesIntroHeadline = {
  serif: "Custom pendants & necklaces",
  script: "Heirloom pieces crafted for you",
};

export const pendantsNecklacesIntroParagraphs = [
  "From delicate heirloom solitaires that whisper elegance to richly layered chains and quietly opulent collars, every Felinda neckpiece is composed with intention. Each pendant and necklace is designed to drape gracefully, catch light with every movement, and carry personal meaning close to the heart.",
  "Our bespoke service offers complete creative freedom. Inspired by stories, moments, and the natural world, Felinda necklaces blend heritage craftsmanship with contemporary creativity — so your piece feels both timeless and unmistakably yours.",
  "Create a masterpiece you will cherish forever. Whether you imagine a single luminous pendant or a collar to pass gently between generations, we sketch, refine, and handcraft with care at every step.",
  "When you are ready to begin, we are here to listen — book a consultation and let us translate your vision into gold, platinum, and stone.",
];

export const pendantsNecklacesIntroCtaConsultation = "Book a consultation";
export const pendantsNecklacesIntroCtaJourney = "Start your bespoke journey";

/** Outline “Start your bespoke journey” — intro + bottom strip secondary. */
export const pendantsNecklacesIntroJourneyHref = whatsappBespokeJourneyHref;
/** Solid “Book a consultation” — intro + bottom strip primary. */
export const pendantsNecklacesIntroConsultationHref = consultationBookingHref;

export const pendantsNecklacesWhyTitle = "Why choose Felinda for custom necklaces and pendants";

export const pendantsNecklacesWhyLead =
  "Felinda brings true versatility and emotional depth to necklace customization. We go beyond standard designs to create pieces that reflect your personality, style, and life chapters. Here is what makes our bespoke pendants and necklaces special:";

export const pendantsNecklacesWhyPillars = [
  {
    title: "Gemstones without limits",
    body: "Diamonds, sapphires, emeralds, rubies, tourmaline, morganite, and rare coloured stones — chosen to suit your story.",
  },
  {
    title: "Every precious metal",
    body: "Rose gold, yellow gold, white gold, and platinum, with finishes and proportions tuned to how you wear your jewellery.",
  },
  {
    title: "Solitaires to statement collars",
    body: "Delicate layers, bold collars, and nature-inspired motifs — composed for your neckline and your wardrobe.",
  },
  {
    title: "Materials you can trust",
    body: "Ethically sourced materials with the transparency you deserve at every stage of the journey.",
  },
];

export const pendantsNecklacesProcessTitle = "Our custom necklaces and pendants design process";
export const pendantsNecklacesProcessSubtitle =
  "Crafting a bespoke pendant or necklace with Felinda is a collaborative and rewarding experience:";

export const pendantsNecklacesProcessSteps = [
  {
    title: "Discovery consultation",
    text: "Share the story, occasion, style preferences, budget, and any inspiration images in a comfortable virtual or in-person session.",
  },
  {
    title: "Custom design and visualization",
    text: "Receive detailed hand sketches or realistic 3D renderings that bring your ideas to life.",
  },
  {
    title: "Gemstone and metal selection",
    text: "Explore a wide range of high-quality diamonds, coloured gemstones, and precious metals.",
  },
  {
    title: "Expert handcrafting",
    text: "Skilled Malaysian artisans transform the approved design using traditional techniques and modern precision.",
  },
  {
    title: "Final review and delivery",
    text: "Approve the finished piece before we deliver it with care, ready to wear and pass on.",
  },
];

export const pendantsNecklacesProcessFooter =
  "From first sketch to final polish, every step stays clear, considered, and centred on you.";

export const pendantsNecklacesFaqTitle = "Questions, answered";

export const pendantsNecklacesFaqItems = [
  {
    question: "How much do custom necklaces and pendants cost?",
    answer:
      "Prices vary depending on gemstone type and size, metal choice, chain length, and design complexity. We provide transparent pricing with options for different budgets and no hidden fees.",
  },
  {
    question: "What gemstones and metals can I choose for my necklace?",
    answer:
      "We work with diamonds, sapphires, emeralds, rubies, and many other coloured gemstones. Metals include rose gold, yellow gold, white gold, and platinum.",
  },
  {
    question: "Can I create a fully bespoke pendant or necklace from my own idea?",
    answer:
      "Yes. Many clients bring sketches, mood boards, or meaningful concepts for completely original bespoke necklaces and pendants.",
  },
  {
    question: "How long does it take to craft a custom necklace or pendant?",
    answer:
      "Most pieces are completed within 4 to 8 weeks depending on complexity. We discuss realistic timelines during your consultation.",
  },
];

export const pendantsNecklacesJourneyCta = {
  title: "Ready to create your timeless necklace or pendant?",
  body: "Your story, your milestones, and your style deserve a neckpiece as unique and beautiful as you are — whether you seek quiet daily elegance, vibrant colour, classic sparkle, or bold modern flair, Felinda is ready to make it real.",
  stripButtonLabel: "Book a consultation",
  stripSecondaryLabel: "Start your bespoke journey",
};

export function pendantsNecklacesFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pendantsNecklacesFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
