import CreationsPage from "@/components/CreationsPage";
import EarringsStorySections from "@/components/earrings/EarringsStorySections";
import JsonLd from "@/components/seo/JsonLd";
import {
  earringsFaqJsonLd,
  earringsIntroConsultationHref,
  earringsIntroCtaConsultation,
  earringsIntroCtaJourney,
  earringsIntroHeadline,
  earringsIntroJourneyHref,
  earringsIntroParagraphs,
  earringsJourneyCta,
  earringsPageMeta,
} from "@/lib/content/earrings-page";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  absoluteTitle: earringsPageMeta.absoluteTitle,
  description: earringsPageMeta.description,
  keywords: earringsPageMeta.keywords,
  path: "/earrings",
});

export const revalidate = 86400;

const earringFiles = [
  "aurea-piece-150.webp",
  "aurea-piece-151.webp",
  "aurea-piece-152.webp",
  "aurea-piece-153.webp",
  "aurea-piece-154.webp",
  "aurea-piece-155.webp",
  "aurea-piece-156.webp",
  "aurea-piece-157.webp",
  "aurea-piece-158.webp",
  "aurea-piece-159.webp",
  "aurea-piece-160.webp",
  "aurea-piece-161.webp",
  "aurea-piece-162.webp",
  "aurea-piece-163.webp",
  "aurea-piece-164.webp",
  "aurea-piece-165.webp",
  "aurea-piece-166.webp",
  "drop-earrings.webp",
  "aurea-piece-167.webp",
  "aurea-piece-168.webp",
];

function titleFromFilename(filename) {
  const base = filename.replace(/\.(webp|jpg|jpeg|png)$/i, "");
  const productPart = base.includes("__") ? base.split("__").pop() : base;
  return productPart
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const galleryItems = earringFiles.map((file) => ({
  title: titleFromFilename(file),
  image: `/images/aurea-jewellery/EarRings/${encodeURIComponent(file)}`,
}));

export default function EarringsPage() {
  return (
    <>
      <JsonLd data={earringsFaqJsonLd()} />
      <CreationsPage
        title="Earrings"
        introHeadlineSerif={earringsIntroHeadline.serif}
        introHeadlineScript={earringsIntroHeadline.script}
        activeHref="/earrings"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Creations" },
          { label: "Earrings" },
        ]}
        description=""
        
        introParagraphs={earringsIntroParagraphs}
        galleryItems={galleryItems}
        middleContent={<EarringsStorySections />}
        showDualIntroCtas
        introDualLeadWithJourney
        introPrimaryCtaLabel={earringsIntroCtaConsultation}
        introSecondaryCtaLabel={earringsIntroCtaJourney}
        introOutlineCtaHref={earringsIntroJourneyHref}
        introSolidCtaHref={earringsIntroConsultationHref}
        ctaTitle={earringsJourneyCta.title}
        ctaBody={earringsJourneyCta.body}
        ctaStripButtonLabel={earringsJourneyCta.stripButtonLabel}
        ctaStripSecondaryLabel={earringsJourneyCta.stripSecondaryLabel}
        ctaStripPrimaryHref={earringsIntroConsultationHref}
        ctaStripSecondaryHref={earringsIntroJourneyHref}
        ctaStripPreserveCase
        benefitsFooterHidden
      />
    </>
  );
}
