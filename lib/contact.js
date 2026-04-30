/**
 * Canonical contact and social links for Felinda Jewelry (site-wide).
 */
export const CONTACT = {
  email: "info@felindajewelry.com",
  whatsappDisplay: "+60 16-825 7826",
  /** wa.me expects country code + number without spaces or leading 0 after +60 */
  whatsappWaMe: "https://wa.me/60168257826",
  facebook: "https://www.facebook.com/felindajewelry",
  instagram: "https://www.instagram.com/felindajewelrymy/",
  address: "Dataran Sunway, Petaling Jaya, Selangor, Malaysia",
  hours: "Tuesday – Saturday · 11:00 – 19:00 · By appointment",
};

/** “Book a consultation” CTAs — contact page / form */
export const consultationBookingHref = "/contact";

/** “Start your bespoke journey” (outline) CTAs — WhatsApp */
export const whatsappBespokeJourneyHref = CONTACT.whatsappWaMe;
