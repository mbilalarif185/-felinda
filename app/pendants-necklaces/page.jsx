import CreationsPage from "@/components/CreationsPage";
import PendantsNecklacesStorySections from "@/components/pendants-necklaces/PendantsNecklacesStorySections";
import JsonLd from "@/components/seo/JsonLd";
import {
  pendantsNecklacesFaqJsonLd,
  pendantsNecklacesIntroConsultationHref,
  pendantsNecklacesIntroCtaConsultation,
  pendantsNecklacesIntroCtaJourney,
  pendantsNecklacesIntroHeadline,
  pendantsNecklacesIntroJourneyHref,
  pendantsNecklacesIntroParagraphs,
  pendantsNecklacesJourneyCta,
  pendantsNecklacesPageMeta,
} from "@/lib/content/pendants-necklaces-page";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  absoluteTitle: pendantsNecklacesPageMeta.absoluteTitle,
  description: pendantsNecklacesPageMeta.description,
  keywords: pendantsNecklacesPageMeta.keywords,
  path: "/pendants-necklaces",
});

export const revalidate = 86400;

const pendantFiles = [
  "aurea-piece-194.webp",
  "aurea-piece-195.webp",
  "diamond-pendant.webp",
  "aurea-piece-196.webp",
  "aurea-piece-197.webp",
  "aurea-piece-198.webp",
  "aurea-piece-199.webp",
  "aurea-piece-200.webp",
  "aurea-piece-174.webp",
  "aurea-piece-202.webp",
  "aurea-piece-203.webp",
  "aurea-piece-204.webp",
  "aurea-piece-205.webp",
  "aurea-piece-206.webp",
  "aurea-piece-207.webp",
  "aurea-piece-208.webp",
  "aurea-piece-209.webp",
  "aurea-piece-210.webp",
  "aurea-piece-211.webp",
  "aurea-piece-182.webp",
  "aurea-piece-183.webp",
  "aurea-piece-214.webp",
  "aurea-piece-184.webp",
  "aurea-piece-187.webp",
  "aurea-piece-217.webp",
  "aurea-piece-218.webp",
  "aurea-piece-189.webp",
  "aurea-piece-220.webp",
  "aurea-piece-221.webp",
  "aurea-piece-222.webp",
  "aurea-piece-223.webp",
  "aurea-piece-224.webp",
  "aurea-piece-225.webp",
  "aurea-piece-226.webp",
  "aurea-piece-227.webp",
  "aurea-piece-228.webp",
  "aurea-piece-229.webp",
  "aurea-piece-230.webp",
  "aurea-piece-231.webp",
  "P1011436.webp",
  "P1015766.webp",
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

const galleryItems = pendantFiles.map((file) => ({
  title: titleFromFilename(file),
  image: `/images/aurea-jewellery/Pendants-Necklaces/${encodeURIComponent(file)}`,
}));

export default function PendantsAndNecklacesPage() {
  return (
    <>
      <JsonLd data={pendantsNecklacesFaqJsonLd()} />
      <CreationsPage
        title="Pendants & Necklaces"
        introHeadlineSerif={pendantsNecklacesIntroHeadline.serif}
        introHeadlineScript={pendantsNecklacesIntroHeadline.script}
        activeHref="/pendants-necklaces"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Creations" },
          { label: "Pendants & Necklaces" },
        ]}
        description=""
        introParagraphs={pendantsNecklacesIntroParagraphs}
        galleryItems={galleryItems}
        middleContent={<PendantsNecklacesStorySections />}
        showDualIntroCtas
        introDualLeadWithJourney
        introPrimaryCtaLabel={pendantsNecklacesIntroCtaConsultation}
        introSecondaryCtaLabel={pendantsNecklacesIntroCtaJourney}
        introOutlineCtaHref={pendantsNecklacesIntroJourneyHref}
        introSolidCtaHref={pendantsNecklacesIntroConsultationHref}
        ctaTitle={pendantsNecklacesJourneyCta.title}
        ctaBody={pendantsNecklacesJourneyCta.body}
        ctaStripButtonLabel={pendantsNecklacesJourneyCta.stripButtonLabel}
        ctaStripSecondaryLabel={pendantsNecklacesJourneyCta.stripSecondaryLabel}
        ctaStripPrimaryHref={pendantsNecklacesIntroConsultationHref}
        ctaStripSecondaryHref={pendantsNecklacesIntroJourneyHref}
        ctaStripPreserveCase
        benefitsFooterHidden
      />
    </>
  );
}
