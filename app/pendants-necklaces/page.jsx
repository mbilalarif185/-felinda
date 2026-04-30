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
  path: "/pendants-necklaces",
});

export const revalidate = 86400;

const pendantFiles = [
  "FJ Insta- Alphabets Gemstone Pendant.webp",
  "FJ Insta- Carnet Circular Pendant.webp",
  "FJ Insta- Jade Diamond Pendant.webp",
  "FJ Insta- Tourmaline & Emerald Pendant 2.webp",
  "FJ Insta-3 stone Pendant.webp",
  "FJ Insta-4 Leaves Pendant-2.webp",
  "FJ Insta-AIYANA-Signature pedant.webp",
  "FJ Insta-AIYANA-Yellow pedant.webp",
  "FJ Insta-Akoya Necklace.webp",
  "FJ Insta-Amethyst Pendant Necklace 2.webp",
  "FJ Insta-Ammolite Necklace.webp",
  "FJ Insta-Aquarmarine Pendant.webp",
  "FJ Insta-Aquarmarine Sun&Moon Pendant.webp",
  "FJ Insta-Bi-Color Sapphire Pendant.webp",
  "FJ Insta-Black Onyx Pendant 1.webp",
  "FJ Insta-Citrine Pendant.webp",
  "FJ Insta-Diamond shape Pendant and Earrings.webp",
  "FJ Insta-Emerlard Pendant.webp",
  "FJ Insta-Evil Eye Pendant-1.webp",
  "FJ Insta-Grey Akoya with Diamond Pendant.webp",
  "FJ Insta-Grey Akoya with Versatile Heart Pendant.webp",
  "FJ Insta-Infinity Sapphire Pendant.webp",
  "FJ Insta-Mabe diamond pedant.webp",
  "FJ Insta-Mabe Floral Pendant.webp",
  "FJ Insta-Men's Gold Pendant-2.webp",
  "FJ Insta-MoonStone Pendant-3.webp",
  "FJ Insta-MORRIGAN Pendant.webp",
  "FJ Insta-OTHA Pendant.webp",
  "FJ Insta-Ribbon Halo Pendant.webp",
  "FJ Insta-Rubielite and diamond Pendant 1.webp",
  "FJ Insta-Sapphire & Moonstone Starburst Pendant.webp",
  "FJ Insta-Scarft Necklace.webp",
  "FJ Insta-Seashell Pendant 1.webp",
  "FJ Insta-Star Pendant-1.webp",
  "FJ Insta-Sun and Moon Pendant.webp",
  "FJ Insta-Versatile Heart Pendant.webp",
  "FJ Insta-Whale Pendant 2.webp",
  "FJ Insta-Wishing Star Pendant 2.webp",
  "FJ Insta-Wishing Star Pendant.webp",
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
  image: `/images/felinda-jewelry/Pendants-Necklaces/${encodeURIComponent(file)}`,
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
