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
  path: "/earrings",
});

export const revalidate = 86400;

const earringFiles = [
  "FJ Insta- Floral Earrings.webp",
  "FJ Insta- Golden South Sea Earrings.webp",
  "FJ Insta-Akoya Earrings.webp",
  "FJ Insta-ANYA Earrings-2.webp",
  "FJ Insta-ANYA Earrings-3.webp",
  "FJ Insta-Dangling Pearl Earrings-3.webp",
  "FJ Insta-Dangling Pearl Earrings-4.webp",
  "FJ Insta-Dangling Pearl Earrings.webp",
  "FJ Insta-Double sided earrings.webp",
  "FJ Insta-FJ Diamond Hoop.webp",
  "FJ Insta-Jade Diamond earrings.webp",
  "FJ Insta-Mabe Earrings 2.webp",
  "FJ Insta-Mabe Earrings.webp",
  "FJ Insta-Red Ruby Earring 2.webp",
  "FJ Insta-Red Ruby Earring.webp",
  "FJ Insta-Rose Diamond Dangling Earrings.webp",
  "FJ Insta-Royal Mabe Earrings-B.webp",
  "FJ Insta-Scapolite earrings.webp",
  "FJ Insta-Spinel Studs.webp",
  "FJ Insta-Tahitian earrings.webp",
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
  image: `/images/felinda-jewelry/EarRings/${encodeURIComponent(file)}`,
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
