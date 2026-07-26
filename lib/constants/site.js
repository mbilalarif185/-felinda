/**
 * Site-wide URLs and branding (SEO, JSON-LD, sitemap).
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.aureajewellery.com).
 */
export const SITE_NAME = "Auréa Jewellery";
export const SITE_TAGLINE = "Crafted for Eternity";
export const SITE_DOMAIN = "aureajewellery.com";
export const SITE_LOCALE = "en_MY";

/** Brand mark — we'll replace with text logo but keeping constant for fallback */
export const SITE_LOGO_PATH = "/images/Aurea-Jewellery-Logo.webp";

/** Fallback for root layout & JSON-LD; homepage uses `lib/seo/meta-copy.js` for SERP uniqueness. */
export const DEFAULT_DESCRIPTION =
  "Auréa Jewellery — handcrafted rings, necklaces, earrings and bracelets from our London studio. Ethically sourced, beautifully made.";

/** OG / Twitter default when a page does not pass a dedicated image */
export const DEFAULT_OG_IMAGE_PATH =
  "/images/aurea-jewellery/Pendants-Necklaces/aurea-piece-227.webp";

export function getSiteUrl() {
  const raw =
    typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "https://aureajewellery.com";
  return raw.replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();
  if (!path || path === "/") return `${base}/`;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
