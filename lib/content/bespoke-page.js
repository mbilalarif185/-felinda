/**
 * Bespoke page copy — verbatim from `Bespoke Jewelry.docx`.
 * Encoding fixes only: Word apostrophe mojibake → ASCII apostrophe (').
 */

import {
  consultationBookingHref,
  whatsappBespokeJourneyHref,
} from "@/lib/contact";

/** Doc: paragraphs before "Content" heading (lines 0–25) — SEO & positioning notes */
export const bespokeDocSeoStrategyParagraphs = [
  "SEO Strategy Recommendations",
  'Primary keyword: "bespoke jewellery Malaysia" (high commercial intent; used naturally in title, H1, intro, and throughout).',
  "Secondary keywords:",
  "custom jewellery Malaysia",
  "bespoke jewelry Kuala Lumpur (or specific cities if you have showrooms)",
  "custom made jewellery Malaysia",
  "personalized jewellery Malaysia",
  "rose gold jewellery with pink gemstones",
  "custom engagement rings Malaysia (if applicable)",
  "handmade bespoke jewellery",
  "On-page SEO tips:",
  'Update page title: "Bespoke Jewellery Malaysia | Custom Jewellery by Felinda"',
  'Meta description: 150-160 chars, e.g., "Discover exquisite bespoke jewellery in Malaysia at Felinda. Create timeless custom pieces with pink gemstones in rose gold — feminine, romantic, and uniquely yours. Book your consultation today."',
  'Use H1 for main headline, H2 for sections (e.g., "Our Bespoke Jewellery Design Process").',
  'Add alt text to images: "bespoke pink gemstone ring in rose gold Malaysia".',
  "Include internal links to shop/gallery, about, contact.",
  "Add schema markup for LocalBusiness or Product if possible.",
  "Ensure mobile-friendly, fast-loading design with high-quality jewellery images.",
  "Competitors (e.g., The Gem Tribe, TAMAKITO, FROU FROU, ZCOVA, Temple & Grace, Unicorn Diamond, Diamond & Platinum) emphasize:",
  "Personal storytelling and emotional connection.",
  "Full customization (from sketch/upload to finished piece).",
  "Expert gemologists/designers, ethical sourcing, GIA knowledge.",
  "Bridal focus (engagement rings, wedding bands).",
  "In-person/virtual consultations, transparent process, guarantees.",
  "Malaysia-based craftsmanship with heritage or modern twists.",
  "Your content should differentiate Felinda through feminine elegance, nature-inspired romance, pink gemstones + rose gold, and a seamless bespoke journey while matching the emotional, customer-centric tone of top players.",
];

/** Doc: "Page Title" (line 28) */
export const bespokeDocumentPageTitle =
  "Bespoke Jewellery Malaysia | Custom Jewellery & Personalized Designs by Felinda";

/** Doc: "Meta Description" (line 30) */
export const bespokeDocumentMetaDescription =
  "Create your dream bespoke jewellery in Malaysia with Felinda. From romantic rose gold pieces with luminous pink gemstones to fully custom designs inspired by nature, our expert artisans craft timeless, feminine jewellery that's uniquely yours. Book a virtual or in-person consultation today.";

/** For buildPageMetadata — use document page title as full browser title */
export const bespokePageMeta = {
  absoluteTitle: bespokeDocumentPageTitle,
  description: bespokeDocumentMetaDescription,
};

/** Doc: "H1 Headline" (line 32) */
export const bespokeDocumentH1 = "Bespoke Jewellery Malaysia: Crafted Just for You";

/** Doc: "Hero / Introductory Section" (lines 34–36) — all three paragraphs in the card */
export const bespokeDocHeroIntroParagraphs = [
  "Every piece of bespoke jewellery at Felinda tells a story of timeless romance and feminine elegance. Inspired by nature's finest blooms, our custom creations feature luminous pink gemstones set in radiant rose gold, blending effortless beauty with personal meaning.",
  "Whether you're looking for a one-of-a-kind engagement ring, a meaningful pendant, or a signature piece that reflects your style, our custom jewellery Malaysia service turns your vision into reality. Designed and handcrafted with passion in Malaysia, each Felinda piece is as unique as the woman who wears it.",
  "Create something truly yours. Our talented designers are here to bring your ideas to life, from initial sketch to the final sparkling masterpiece.",
];

/** Doc: line 37 — exact line from file (shown under intro CTAs) */
export const bespokeDocIntroButtonLine =
  "[Button: Start Your Bespoke Journey] [Button: Book a Consultation]";

/** Doc: line 37 — button labels in document order (journey first, then consultation) */
export const bespokeDocIntroCtaJourney = "Start Your Bespoke Journey";
export const bespokeDocIntroCtaConsultation = "Book a Consultation";

/** Where each bespoke CTA sends users — journey = WhatsApp; consultation = contact */
export const bespokeIntroJourneyButtonHref = whatsappBespokeJourneyHref;
export const bespokeIntroConsultationButtonHref = consultationBookingHref;
export const bespokeStripConsultationButtonHref = consultationBookingHref;
export const bespokeStripJourneyButtonHref = whatsappBespokeJourneyHref;

/**
 * Doc: lines after the "Content" heading (27–33) — labels + values. Line 26 "Content" is the disclosure summary title in the UI.
 */
export const bespokeDocContentStructureLines = [
  "Page Title",
  bespokeDocumentPageTitle,
  "Meta Description",
  bespokeDocumentMetaDescription,
  "H1 Headline",
  bespokeDocumentH1,
  "Hero / Introductory Section",
];

/** Doc: "Why Choose Felinda for Bespoke Jewellery in Malaysia (H2)" (line 38) */
export const bespokeDocWhyTitle = "Why Choose Felinda for Bespoke Jewellery in Malaysia";

/** Doc: line 39 */
export const bespokeDocWhyLead =
  "At Felinda, we believe jewellery should be more than beautiful, it should be personal. What sets our custom made jewellery apart:";

/** Doc: lines 40–44 — title before colon, body after */
export const bespokeDocWhyBullets = [
  {
    title: "Feminine & Romantic Designs",
    text: "Signature pink gemstones in warm rose gold, evoking the soft beauty of blooming flowers.",
  },
  {
    title: "Ethically Sourced Materials",
    text: "Finest gemstones and metals chosen with care and responsibility.",
  },
  {
    title: "Lifetime Craftsmanship Guarantee",
    text: "Built to last a lifetime, with exceptional attention to every detail.",
  },
  {
    title: "Complimentary Shipping",
    text: "On all orders across Malaysia.",
  },
  {
    title: "Flexible Consultations",
    text: "Virtual or in-person sessions tailored to your schedule.",
  },
];

/** Doc: line 45 */
export const bespokeDocWhyClosing =
  "Unlike mass-produced pieces, our bespoke jewellery Malaysia process is collaborative, heartfelt, and designed around your story.";

/** Doc: "Our Bespoke Jewellery Design Process (H2)" (line 46) */
export const bespokeDocProcessTitle = "Our Bespoke Jewellery Design Process";

/** Doc: lines 47–50 */
export const bespokeDocProcessSteps = [
  {
    title: "Discovery & Consultation",
    text: "Share your ideas, style preferences, and the story behind your piece during a relaxed virtual or in-person meeting.",
  },
  {
    title: "Design & Visualization",
    text: "Our designers create custom sketches or 3D renderings, incorporating your chosen gemstones, metals, and details.",
  },
  {
    title: "Crafting with Care",
    text: "Expert Malaysian artisans handcraft your piece using traditional techniques and modern precision.",
  },
  {
    title: "Final Approval & Delivery",
    text: "Review the finished jewellery and receive it with love ,ready to wear and cherish.",
  },
];

/** Doc: line 51 */
export const bespokeDocProcessFooter =
  "From custom engagement rings to personalized everyday jewellery, we handle every step with dedication.";

/** Doc: line 52 */
export const bespokeDocFeaturedTitle = "Featured Bespoke Creations";

/** Doc: line 53 */
export const bespokeDocFeaturedLead = "Explore our gallery of custom jewellery Malaysia favourites:";

/** Doc: lines 54–56 */
export const bespokeDocFeaturedBullets = [
  "Luminous pink sapphire or morganite rings in rose gold",
  "Nature-inspired floral earrings and pendants",
  "Elegant stacking bracelets and necklaces",
];

/** Doc: "Ready to Begin Your Journey? (H2)" (line 57) */
export const bespokeDocJourneyTitle = "Ready to Begin Your Journey?";

/** Doc: line 58 */
export const bespokeDocJourneyBody =
  "Start designing your perfect bespoke jewellery today. Whether you're in Petaling Jaya, elsewhere in Malaysia, or abroad, our team is ready to create something extraordinary.";

/** Doc: line 59 — strip buttons in document order */
export const bespokeDocStripConsultation = "Book a Consultation Now";
export const bespokeDocStripJourney = "Start Your Bespoke Journey";

/** Doc: line 59 — exact bracket line from file */
export const bespokeDocStripButtonLine =
  "";

/* ─── Aliases for components (100% doc strings above) ─── */

export const bespokeHero = {
  title: bespokeDocumentH1,
};

export const bespokeWhyChoose = {
  title: bespokeDocWhyTitle,
  lead: bespokeDocWhyLead,
  items: bespokeDocWhyBullets,
  closing: bespokeDocWhyClosing,
};

export const bespokeProcess = {
  title: bespokeDocProcessTitle,
  steps: bespokeDocProcessSteps,
  footer: bespokeDocProcessFooter,
};

export const bespokeGalleryHighlights = {
  title: bespokeDocFeaturedTitle,
  subtitle: bespokeDocFeaturedLead,
  bullets: bespokeDocFeaturedBullets,
};

export const bespokeJourneyCta = {
  title: bespokeDocJourneyTitle,
  body: bespokeDocJourneyBody,
  stripButtonLabel: bespokeDocStripConsultation,
  stripSecondaryLabel: bespokeDocStripJourney,
};
