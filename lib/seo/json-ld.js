import { CONTACT } from "@/lib/contact";
import {
  absoluteUrl,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE_PATH,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants/site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "@id": `${absoluteUrl("/")}#organization`,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: absoluteUrl("/"),
    image: absoluteUrl(SITE_LOGO_PATH),
    email: CONTACT.email,
    telephone: CONTACT.whatsappDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dataran Sunway",
      addressLocality: "Petaling Jaya",
      addressRegion: "Selangor",
      addressCountry: "MY",
    },
    sameAs: [CONTACT.instagram, CONTACT.facebook],
    priceRange: "$$$",
  };
}

export function websiteJsonLd() {
  const base = absoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base}#website`,
    name: SITE_NAME,
    alternateName: SITE_TAGLINE,
    url: base,
    description: DEFAULT_DESCRIPTION,
    publisher: { "@id": `${base}#organization` },
    inLanguage: "en",
  };
}

export function pageWebSiteJsonLd({ path = "/", name, description }) {
  const base = absoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": `${base}#website` },
    about: { "@id": `${base}#organization` },
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => {
      const el = {
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
      };
      if (item.href) el.item = absoluteUrl(item.href);
      return el;
    }),
  };
}

export function productJsonLd({
  name,
  path,
  description,
  image = DEFAULT_OG_IMAGE_PATH,
  category = "Fine Jewelry",
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${absoluteUrl(path)}#product`,
    name,
    description,
    image: [image.startsWith("http") ? image : absoluteUrl(image)],
    category,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    url: absoluteUrl(path),
    offers: {
      "@type": "Offer",
      url: absoluteUrl(path),
      priceCurrency: "MYR",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "MYR",
      },
    },
  };
}

/** Single script for root layout: organization + website. */
export function rootJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationJsonLd(), websiteJsonLd()],
  };
}
