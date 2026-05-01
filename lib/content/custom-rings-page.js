/**
 * Custom Rings page copy — sourced from `custom rings.docx`.
 * In-body phrasing is tightened for a premium editorial tone; SEO title/description match the document.
 */

import {
  consultationBookingHref,
  whatsappBespokeJourneyHref,
} from "@/lib/contact";

export const customRingsPageMeta = {
  absoluteTitle:
    "Custom Rings Malaysia | Bespoke Engagement & Wedding Rings | Felinda Jewelry",
  description:
    "Custom rings handmade in Malaysia: engagement, wedding, promise, and stacking bands in rose gold and gemstones. Felinda bespoke fine jewelry; book a private consultation.",
};

/** PageHero H1 is “Custom Rings”; this line sits beneath it. */
export const customRingsHeroSubtitle =
  "Shaped around your moment, your promise.";

/** Intro card display headline (PageHero holds the page H1). */
export const customRingsIntroHeadline = {
  beforeScript: "Shaped around",
  script: "your moment, your promise",
};

export const customRingsIntroParagraphs = [
  "Every custom ring at Felinda is more than jewellery: it is shaped around a moment, a person, or a promise. Our custom ring atelier crafts each piece with intention, light, and craftsmanship that lasts a lifetime.",
  "Whether you are looking for a custom engagement ring, a delicate promise ring, elegant wedding bands, or meaningful stacking rings, our bespoke ring service in Malaysia turns your unique story into a wearable treasure.",
  "Create something truly yours. Our passionate designers are here to bring your vision to life, from the first sketch to the final sparkling detail.",
];

export const customRingsIntroCtaConsultation = "Book a consultation";
export const customRingsIntroCtaJourney = "Start your bespoke journey";
export const customRingsJourneyHref = whatsappBespokeJourneyHref;
export const customRingsConsultationHref = consultationBookingHref;

/** Why Felinda — section title (document H2, label stripped). */
export const customRingsWhyTitle = "Why choose Felinda for custom rings";

export const customRingsWhyLead =
  "In Malaysia’s competitive jewellery scene, Felinda stands apart by offering soft, romantic custom rings that celebrate feminine elegance rather than only classic diamonds.";

export const customRingsWhyPillars = [
  {
    title: "Fully personalized designs",
    body: "From halo styles and floral motifs to minimalist bands, every concept is built around you.",
  },
  {
    title: "Ethically sourced materials",
    body: "Carefully selected gemstones and precious metals, chosen with care for beauty and integrity.",
  },
  {
    title: "Lifetime craftsmanship",
    body: "Built to be cherished for generations, with the finishing standards you expect from fine jewellery.",
  },
  {
    title: "Flexible consultations",
    body: "Relaxed virtual or in-person sessions tailored to your schedule and comfort.",
  },
];

export const customRingsProcessTitle = "From vision to masterpiece";
export const customRingsProcessSubtitle =
  "Creating custom made rings with Felinda is a joyful, collaborative journey.";

export const customRingsProcessSteps = [
  {
    title: "Discovery consultation",
    body: "Share your story, the meaning behind the ring, your style preferences, budget, and any inspiration images during a no-pressure virtual or in-person meeting.",
  },
  {
    title: "Custom design & 3D visualization",
    body: "Our designers create detailed sketches or realistic 3D renderings, incorporating your chosen gemstones, metal tones, and personal elements.",
  },
  {
    title: "Gemstone selection",
    body: "Hand-pick the perfect luminous stones that match your vision in colour, size, and sparkle.",
  },
  {
    title: "Expert handcrafting",
    body: "Skilled artisans bring the design to life using traditional techniques and modern precision.",
  },
  {
    title: "Final approval & delivery",
    body: "Review and approve the finished ring before we deliver it with care, ready to wear forever.",
  },
];

export const customRingsStripTitle = "Create something truly yours.";
export const customRingsStripBody =
  "Our designers are here to bring your vision to life.";

export const customRingsStripJourney = "Start your bespoke journey";
export const customRingsStripConsultation = "Book a consultation";

export const customRingsFaqTitle = "Questions, answered";
export const customRingsFaqItems = [
  {
    question: "How much do custom rings cost in Malaysia?",
    answer:
      "Prices for Felinda custom rings vary based on gemstone size, carat weight, and design complexity. We offer transparent pricing with no hidden fees and options for different budgets.",
  },
  {
    question: "Do you specialize in rose gold and pink gemstone rings?",
    answer:
      "Our signature style pairs radiant rose gold with luminous pink gemstones such as morganite, pink sapphire, and pink tourmaline for a soft, feminine aesthetic.",
  },
  {
    question: "Can I create a custom engagement ring?",
    answer:
      "Many clients design romantic custom engagement rings with pink centre stones or delicate rose gold settings that feel unique and heartfelt.",
  },
  {
    question: "How long does it take to make a custom ring?",
    answer:
      "Most custom rings are completed within 4–8 weeks, depending on the design. We can discuss faster options during your consultation.",
  },
  {
    question: "Do you offer virtual consultations for clients outside Petaling Jaya?",
    answer:
      "Whether you are in Penang, Johor, Sabah, Sarawak, or even overseas, we provide convenient virtual consultations.",
  },
];

export const customRingsClosingTitle = "Ready to design your perfect ring?";
export const customRingsClosingLead =
  "Your moment, your promise, your story deserves a ring as beautiful and unique as you are.";
export const customRingsClosingBody =
  "Begin your custom rings journey with Felinda today. Let our team help you create a piece filled with intention, light, and timeless romance.";

/** FAQPage JSON-LD — same questions as `customRingsFaqItems`. */
export function customRingsFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: customRingsFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
