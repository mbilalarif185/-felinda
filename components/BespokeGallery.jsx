import CreationsPage from "@/components/CreationsPage";
import BespokeStorySections from "@/components/bespoke/BespokeStorySections";
import {
  bespokeDocHeroIntroParagraphs,
  bespokeDocIntroButtonLine,
  bespokeDocIntroCtaConsultation,
  bespokeDocIntroCtaJourney,
  bespokeDocStripButtonLine,
  bespokeHero,
  bespokeIntroConsultationButtonHref,
  bespokeIntroJourneyButtonHref,
  bespokeJourneyCta,
  bespokeStripConsultationButtonHref,
  bespokeStripJourneyButtonHref,
} from "@/lib/content/bespoke-page";
import { bespokeGalleryItems } from "@/lib/data/bespoke-gallery";

export default function BespokeGallery() {
  return (
    <CreationsPage
      title={bespokeHero.title}
      activeHref="/bespoke"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Bespoke", href: "/bespoke" },
        { label: "Gallery" },
      ]}
      description=""
      introParagraphs={bespokeDocHeroIntroParagraphs}
      galleryItems={bespokeGalleryItems}
      overlapHeroCard
      middleContent={<BespokeStorySections />}
      showDualIntroCtas
      introDualLeadWithJourney
      introPrimaryCtaLabel={bespokeDocIntroCtaConsultation}
      introSecondaryCtaLabel={bespokeDocIntroCtaJourney}
      introOutlineCtaHref={bespokeIntroJourneyButtonHref}
      introSolidCtaHref={bespokeIntroConsultationButtonHref}
      introDocCaptionLine={bespokeDocIntroButtonLine}
      ctaTitle={bespokeJourneyCta.title}
      ctaBody={bespokeJourneyCta.body}
      ctaStripButtonLabel={bespokeJourneyCta.stripButtonLabel}
      ctaStripSecondaryLabel={bespokeJourneyCta.stripSecondaryLabel}
      ctaStripPrimaryHref={bespokeStripConsultationButtonHref}
      ctaStripSecondaryHref={bespokeStripJourneyButtonHref}
      ctaStripPreserveCase
      ctaStripDocCaptionLine={bespokeDocStripButtonLine}
      benefitsFooterHidden
    />
  );
}
