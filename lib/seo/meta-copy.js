/**
 * Centralized page titles & meta descriptions for App Router metadata.
 * Sourced from `Felinda Meta Data.xlsx` (sheet: Felinda SEO – All Pages).
 */

function parseKeywordList(primary, secondary) {
  const parts = [primary, secondary]
    .filter(Boolean)
    .flatMap((s) => String(s).split(","))
    .map((k) => k.trim())
    .filter(Boolean);
  return [...new Set(parts)];
}

export const homeMeta = {
  absoluteTitle: "Bespoke Fine Jewelry Malaysia | Felinda Atelier",
  description:
    "Malaysia's best bespoke jewelry atelier. Felinda crafts fine jewelry, from custom rings and necklaces to reviving old ones with rare gemstones. Consult Now!",
  keywords: parseKeywordList(
    "Bespoke Jewelry Malaysia",
    "luxury fine jewelry atelier, handmade custom jewelry, private atelier Petaling Jaya, bespoke jewelry KL, custom jewelry Kuala Lumpur"
  ),
};

export const aboutMeta = {
  absoluteTitle: "About Felinda | Private Fine Jewelry Atelier Petaling Jaya",
  description:
    "Felinda is a founder-led atelier in Petaling Jaya, crafting handmade heirloom jewelry of any metal and gemstone with uncompromising craftsmanship in Selangor.",
  keywords: parseKeywordList(
    "Private Jewelry Atelier Petaling Jaya",
    "founder-led jewelry atelier, heirloom fine jewelry, handmade jewelry Selangor, bespoke jewelry story, fine jewelry craftsmanship KL"
  ),
};

export const contactMeta = {
  absoluteTitle: "Book a Private Jewelry Consultation | Felinda",
  description:
    "Your piece begins with a conversation. Reserve a private consultation at Felinda's Petaling Jaya atelier, by appointment. Start your bespoke jewelry journey today.",
  keywords: parseKeywordList(
    "Book Jewelry Appointment Petaling Jaya",
    "jewelry consultation KL, book bespoke jewelry Selangor, custom jewelry appointment Sunway, private atelier visit Malaysia, jewelry inquiry Kuala Lumpur"
  ),
};

export const processMeta = {
  absoluteTitle: "How Felinda Creates Bespoke Jewelry in Malaysia | Process",
  description:
    "From first consultation to final design, see exactly how Felinda turns your idea into a handcrafted fine jewelry piece, transparent steps. Start here.",
  keywords: parseKeywordList(
    "How Bespoke Jewelry Is Made",
    "custom jewelry process, bespoke jewelry steps, jewelry design consultation, handmade jewelry timeline, fine jewelry craftsmanship atelier"
  ),
};

export const testimonialsMeta = {
  absoluteTitle: "Client Reviews & Stories | Felinda Jewelry",
  description:
    "Hear from Felinda clients across Selangor, Malaysia, real stories of bespoke rings, pearl heirlooms, and other jewelry crafted at our Petaling Jaya atelier.",
  keywords: parseKeywordList(
    "Felinda Jewelry Reviews",
    "bespoke jewelry client stories, custom ring reviews KL, jewelry atelier testimonials, heirloom jewelry reviews Petaling Jaya, fine jewelry feedback Malaysia"
  ),
};

export const pearlCreationsMeta = {
  absoluteTitle: "Get Pearl Jewelry Malaysia | South Sea & Akoya | Felinda",
  description:
    "Handcrafted pearl jewelry in Malaysia: South Sea, Akoya, Tahitian & freshwater pearls redesigned into modern heirloom necklaces, earrings, and rings. Contact now.",
  keywords: parseKeywordList(
    "Pearl Jewelry Malaysia",
    "South Sea pearl jewelry KL, Akoya pearl necklace Petaling Jaya, Tahitian pearl earrings, freshwater pearl jewelry Selangor, bespoke pearl jewelry Malaysia"
  ),
};

export const banglesBraceletsMeta = {
  absoluteTitle: "Gold Bangles & Bracelets for Women | Felinda Malaysia",
  description:
    "Handmade gold bangles and bracelets in Malaysia: sculpted cuffs, gemstone tennis styles & stackable bands for women at Felinda atelier. Book a consult now.",
  keywords: parseKeywordList(
    "Gold Bangles Malaysia",
    "bespoke bracelets Petaling Jaya, custom bangle KL, gemstone bangle Selangor, gold bracelet Kuala Lumpur, jade bangle fine jewelry Malaysia"
  ),
};

export const regalRevivalsMeta = {
  absoluteTitle: "Bespoke Jewellery Redesign & Remodelling | Felinda Malaysia",
  description:
    "Give your old jewellery a new life with bespoke jewellery redesign in Malaysia. Transform heirlooms, gifted, or unworn pieces into elegant designs. Consult Now!",
  keywords: parseKeywordList(
    "Bespoke Jewellery Redesign",
    "rare gemstone jewelry Malaysia, couture jewelry commission Petaling Jaya, museum-grade jewelry, one-of-a-kind jewelry KL, high jewelry Kuala Lumpur"
  ),
};

export const blogMeta = {
  absoluteTitle: "Bespoke Jewelry Design Guides and Stories | Felinda Journal",
  description:
    "Explore the Felinda Journal, expert insights on bespoke jewelry design, gemstone selection, heirloom care, and craftsmanship from our private atelier.",
  keywords: parseKeywordList(
    "Bespoke Jewelry Design Guide",
    "fine jewelry tips, gemstone guide, custom jewelry advice, heirloom jewelry inspiration, jewelry craftsmanship articles"
  ),
};

export const termsMeta = {
  absoluteTitle: "Terms & Conditions | Felinda Jewelry",
  description:
    "Review Felinda Jewelry's terms and conditions governing bespoke commissions, website use, payment, and our lifetime craftsmanship promise for all atelier clients.",
  keywords: parseKeywordList(
    "Felinda Jewelry Terms of Service",
    "bespoke jewelry terms, jewelry commission agreement, atelier terms Malaysia, jewelry purchase terms"
  ),
};

export const privacyMeta = {
  absoluteTitle: "Privacy Policy | Felinda Jewelry",
  description:
    "Read Felinda Jewelry's privacy policy: how we collect, use, and protect your personal data when you use our website or book a private atelier consultation.",
  keywords: parseKeywordList(
    "Felinda Jewelry Privacy Policy",
    "data privacy fine jewelry atelier, jewelry website privacy, personal data policy Malaysia"
  ),
};
