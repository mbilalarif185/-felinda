import {
  absoluteUrl,
  DEFAULT_OG_IMAGE_PATH,
  getSiteUrl,
  SITE_LOCALE,
  SITE_NAME,
} from "@/lib/constants/site";

/**
 * Builds Next.js Metadata with canonical, Open Graph, and Twitter cards.
 *
 * @param {object} opts
 * @param {string} [opts.title] Shorthand title; combined with root `metadata.title.template` when set
 * @param {string} [opts.absoluteTitle] Full page title (no template suffix), e.g. homepage
 * @param {string} opts.description
 * @param {string} opts.path Absolute path starting with / (e.g. "/about")
 * @param {string} [opts.ogImage] Path starting with / or absolute URL
 * @param {boolean} [opts.noIndex]
 */
export function buildPageMetadata({
  title,
  absoluteTitle,
  description,
  path,
  ogImage,
  noIndex = false,
}) {
  const canonical = absoluteUrl(path);
  const imagePath = ogImage || DEFAULT_OG_IMAGE_PATH;
  const ogUrl =
    imagePath.startsWith("http") ? imagePath : absoluteUrl(imagePath);

  const titleField = absoluteTitle
    ? { absolute: absoluteTitle }
    : title;

  const displayTitle =
    typeof titleField === "string" ? titleField : absoluteTitle;

  return {
    title: titleField,
    description,
    alternates: {
      canonical,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_MY",
      siteName: SITE_NAME,
      title: displayTitle,
      description,
      url: canonical,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: displayTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      images: [ogUrl],
    },
  };
}

export function getMetadataBase() {
  return new URL(getSiteUrl());
}

export function buildRootMetadata() {
  const canonical = absoluteUrl("/");
  const ogUrl = absoluteUrl(DEFAULT_OG_IMAGE_PATH);

  return {
    metadataBase: getMetadataBase(),
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: SITE_LOCALE,
      url: canonical,
      siteName: SITE_NAME,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - Luxury bespoke jewelry in Malaysia`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogUrl],
    },
  };
}
