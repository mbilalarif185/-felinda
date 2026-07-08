/**
 * Earrings page copy — sourced from `Earrings.docx`.
 * In-body phrasing tightened for editorial tone; page title and meta description match the document.
 */

import {
  consultationBookingHref,
  whatsappBespokeJourneyHref,
} from "@/lib/contact";

export const earringsPageMeta = {
  absoluteTitle: "Design Custom Earrings Malaysia | Bespoke Fine Jewelry",
  description:
    "Get stylish bespoke earrings handcrafted in Malaysia. Diamond studs, gemstone drops & hoops in gold or platinum. Consult for custom earring design in Selangor.",
  keywords: [
    "Custom Earrings Malaysia",
    "bespoke earrings Petaling Jaya",
    "diamond stud earrings KL",
    "gemstone drop earrings Selangor",
    "handmade earrings Kuala Lumpur",
    "custom earring design",
  ],
};

/** Intro card H2: serif line + italic rose accent (same treatment as “Designed for Auréa”). */
export const earringsIntroHeadline = {
  serif: "Bespoke Earrings ",
  script: "Designed to Catch Every Glance",
};

/** Intro paragraphs under the intro headline (CreationsPage). */
export const earringsIntroParagraphs = [
  "From delicate studs to statement chandeliers, each pair is crafted to capture light and reflect your individuality.",
  "Diamonds, sapphires, emeralds, rubies, or coloured gemstones — set in gold or platinum — are shaped into earrings that feel entirely your own. Begin with your idea. We will bring it to life.",
];

export const earringsIntroCtaConsultation = "Book a consultation";
export const earringsIntroCtaJourney = "Start your bespoke journey";

/** Outline “Start your bespoke journey” — intro + bottom strip secondary. */
export const earringsIntroJourneyHref = whatsappBespokeJourneyHref;
/** Solid “Book a consultation” — intro + bottom strip primary. */
export const earringsIntroConsultationHref = consultationBookingHref;

export const earringsWhyTitle = "Why choose Auréa for custom earrings";

export const earringsWhyLead =
  "Auréa offers real creative freedom in a market where many jewellers limit options. We celebrate every style: soft and feminine, bold and architectural, minimalist or ornate. Here is what sets our bespoke earrings apart:";

/** Doc numbered list — titles with short supporting copy for cards. */
export const earringsWhyPillars = [
  {
    title: "Complete customization across gemstones",
    body: "Choose cuts, colours, and combinations that express you, beyond catalogue presets.",
  },
  {
    title: "All precious metals",
    body: "Rose gold, yellow gold, white gold, or platinum, each finished to our exacting standard.",
  },
  {
    title: "Nature-inspired and modern forms",
    body: "Organic motifs, clean geometry, and everything in between, tailored to your taste.",
  },
  {
    title: "Finest materials, full transparency",
    body: "High-quality diamonds and coloured gemstones, sourced and explained with care.",
  },
  {
    title: "Lifetime craftsmanship",
    body: "A lasting guarantee that reflects our confidence in every hand-finished pair.",
  },
];

export const earringsProcessTitle = "Our custom earrings design process";
export const earringsProcessSubtitle =
  "Turning your ideas into reality with Auréa is simple, transparent, and exciting:";

export const earringsProcessSteps = [
  {
    title: "Discovery consultation",
    text: "Share your vision, the occasion, style preferences, budget, and any inspiration images in a relaxed, no-pressure session.",
  },
  {
    title: "Custom design and visualization",
    text: "Receive detailed sketches or realistic 3D renderings that capture your ideas with clarity.",
  },
  {
    title: "Gemstone and metal selection",
    text: "Choose from a wide range of diamonds, coloured gemstones, and precious metals.",
  },
  {
    title: "Expert handcrafting",
    text: "Skilled Malaysian artisans bring the design to life using traditional techniques and modern precision.",
  },
  {
    title: "Final review and delivery",
    text: "Approve the finished earrings before we deliver them with care, ready to wear and adore.",
  },
];

export const earringsProcessFooter =
  "Every step is collaborative, so the earrings you receive feel unmistakably yours.";

export const earringsBenefitsSectionTitle =
  "Why custom earrings over ready-made pieces";

export const earringsBenefitsLead =
  "More women in Malaysia choose custom-made earrings because they offer:";

export const earringsBenefitsBullets = [
  "Perfect harmony with your face shape, hairstyle, wardrobe, and lifestyle",
  "A deeper emotional connection: the earrings carry your personal story",
  "Full freedom to select gemstones, metal colour, size, shape, and fine details",
  "Superior craftsmanship and attention to every element",
  "Outstanding long-term value compared with similar high-end ready-made designs",
];

export const earringsBenefitsClosing =
  "At Auréa, the experience feels creative and empowering rather than overwhelming.";

export const earringsFaqTitle = "Questions, answered";

export const earringsFaqItems = [
  {
    question: "How much do custom earrings cost in Malaysia?",
    answer:
      "Prices vary based on gemstone type and size, metal choice, and design complexity. We offer transparent pricing with options suitable for different budgets and no hidden fees.",
  },
  {
    question: "What gemstones and metals can I choose?",
    answer:
      "We work with diamonds, sapphires, emeralds, rubies, morganite, tourmaline, and many other gemstones. Metals include rose gold, yellow gold, white gold, and platinum.",
  },
  {
    question: "Can I create fully bespoke earrings from scratch?",
    answer:
      "Many clients bring their own ideas, sketches, or mood boards for completely original bespoke earrings.",
  },
  {
    question: "How long does it take to craft custom earrings?",
    answer:
      "Most pairs are completed within 4 to 8 weeks depending on complexity. We discuss realistic timelines during your consultation.",
  },
];

/** Bottom CTA strip (CreationsPage) — doc “Ready to Design…” */
export const earringsJourneyCta = {
  title: "Ready to design your dream earrings?",
  body: "Your personality deserves earrings as unique and beautiful as you are. Quiet daily elegance, vibrant colour, classic sparkle, or bold modern flair: Auréa is here to make it real.",
  stripButtonLabel: "Book a consultation",
  stripSecondaryLabel: "Start your bespoke journey",
};

export function earringsFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: earringsFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
