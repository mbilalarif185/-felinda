/** Query param on `/custom-rings` for deep-linking to a gallery tab. */
export const CUSTOM_RINGS_TAB_PARAM = "tab";

/** URL slug → tab label (must match `filters` in CustomRingsContent). */
export const customRingsTabBySlug = {
  "daring-dazzlers": "Daring Dazzlers",
  "mens-rings": "Men's Rings",
  "wedding-rings": "Wedding Rings",
  "engagement-rings": "Engagement Rings",
};

export const customRingsFilterToSlug = Object.fromEntries(
  Object.entries(customRingsTabBySlug).map(([slug, label]) => [label, slug])
);

/** Stable slugs for use in `customRingsHref`. */
export const customRingsSlugs = {
  daringDazzlers: "daring-dazzlers",
  mensRings: "mens-rings",
  weddingRings: "wedding-rings",
  engagementRings: "engagement-rings",
};

export function customRingsHref(slug) {
  if (!customRingsTabBySlug[slug]) return "/custom-rings";
  return `/custom-rings?${CUSTOM_RINGS_TAB_PARAM}=${slug}`;
}
