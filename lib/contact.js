/**
 * Canonical contact and social links for Auréa Jewellery (site-wide).
 */
export const CONTACT = {
  email: "support@quantel.uk",
  whatsappDisplay: "+44 7879 301606",
  /** wa.me expects country code + number without spaces or leading 0 after +60 */
  whatsappWaMe: "https://wa.me/447879301606",
  facebook: "https://www.facebook.com/people/Quantel-Solutions/61591475250724/",
  instagram: "https://www.instagram.com/quantelsolutions/",
  linkedin: "https://www.linkedin.com/company/quantel-solutions/",
  address: "14 Bond Street, Mayfair, Malaysia",
  hours: "Mon–Sat: 10am–6pm, Sunday: 12pm–5pm",
};

/** “Book a consultation” CTAs — contact page / form */
export const consultationBookingHref = "/contact";

/** “Start your bespoke journey” (outline) CTAs — WhatsApp */
export const whatsappBespokeJourneyHref = CONTACT.whatsappWaMe;
