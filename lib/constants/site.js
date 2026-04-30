/**
 * Site-wide URLs and branding (SEO, JSON-LD, sitemap).
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.felindajewelry.com).
 */
export const SITE_NAME = "Felinda Jewelry";
export const SITE_TAGLINE = "Bespoke Fine Jewelry Atelier";
export const SITE_DOMAIN = "www.felindajewelry.com";
export const SITE_LOCALE = "en_MY";

/** Brand mark — `public/images/Felinda-Jewelry-Logo.webp` */
export const SITE_LOGO_PATH = "/images/Felinda-Jewelry-Logo.webp";

/** Fallback for root layout & JSON-LD; homepage uses `lib/seo/meta-copy.js` for SERP uniqueness. */
export const DEFAULT_DESCRIPTION =
  "Felinda Jewelry — luxury bespoke fine jewelry handmade in Malaysia: custom rings, earrings, necklaces, and heirlooms from our Petaling Jaya atelier.";

/** OG / Twitter default when a page does not pass a dedicated image */
export const DEFAULT_OG_IMAGE_PATH =
  "/images/felinda-jewelry/Pendants-Necklaces/FJ Insta-Sun and Moon Pendant.webp";

export function getSiteUrl() {
  const raw =
    typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "https://www.felindajewelry.com";
  return raw.replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();
  if (!path || path === "/") return `${base}/`;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
