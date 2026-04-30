import Link from "next/link";
import {
  CalendarDays,
  Truck,
  ShieldCheck,
  Gem,
  ArrowRight,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CreationsGallery from "@/components/CreationsGallery";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageWebSiteJsonLd, productJsonLd } from "@/lib/seo/json-ld";
import {
  consultationBookingHref,
  whatsappBespokeJourneyHref,
} from "@/lib/contact";

const defaultBenefitIcons = [Truck, ShieldCheck, Gem, CalendarDays];

const defaultBenefits = [
  { title: "Complimentary Shipping", subtitle: "On all orders" },
  { title: "Lifetime Craftsmanship", subtitle: "Guaranteed for life" },
  { title: "Finest Materials", subtitle: "Ethically sourced gemstones" },
  { title: "Book a Consultation", subtitle: "Virtual or in-person" },
];

/**
 * Shared layout for every Creations / Bespoke gallery page.
 *
 * Props:
 *   title              — large hero title
 *   heroSubtitle       — optional second line under the hero H1 (see PageHero)
 *   breadcrumb         — array of { label, href? } items for the hero breadcrumb
 *   activeHref         — current route, used to highlight the nav
 *   description        — intro paragraph when introParagraphs is not provided
 *   introParagraphs    — optional multiple intro paragraphs under "Designed for Felinda"
 *   galleryItems       — array of { title, image } items for the photo grid
 *   galleryFirst       — when true, gallery appears at the top of the card, then intro and optional middle content
 *   middleContent      — optional React node (e.g. bespoke story sections) rendered after intro, before CTA strip
 *   ctaTitle, ctaBody     — optional overrides for the rose CTA band
 *   ctaStripButtonLabel   — optional label for the strip button (default: START YOUR BESPOKE JOURNEY)
 *   showDualIntroCtas     — when true, intro shows Book + secondary outline (bespoke brief)
 *   introSecondaryCtaLabel — second intro CTA label when showDualIntroCtas
 *   introDualLeadWithJourney — doc order: outline “Start Your Bespoke Journey” first, then solid “Book a Consultation”
 *   introPrimaryCtaLabel   — label for the solid consultation button in that mode
 *   benefitItems            — optional list of { title, subtitle } for the trust row (four columns when four items)
 *   overlapHeroCard         — main card overlaps hero with large rounded top corners (bespoke gallery layout)
 *   ctaStripSecondaryLabel  — optional second button on the CTA strip (doc: after primary)
 *   ctaStripPreserveCase    — do not force uppercase on strip button labels
 *   benefitsFooterHidden    — hide the four-column benefits row (bespoke: copy lives in doc “Why Choose” section)
 *   introDocCaptionLine     — optional verbatim line under intro CTAs (e.g. Word doc button instruction)
 *   ctaStripDocCaptionLine    — optional verbatim line under strip CTAs
 *   introOutlineCtaHref     — outline intro CTA (default: WhatsApp — bespoke journey)
 *   introSolidCtaHref       — solid intro CTA (default: /contact — book consultation)
 *   ctaStripPrimaryHref     — solid strip button when two CTAs; sole strip link when one (default: WhatsApp for default “journey” label)
 *   ctaStripSecondaryHref   — outline strip button when two CTAs (default: WhatsApp)
 *   introHeadlineSerif      — optional first line of intro H2 (default: “Designed”)
 *   introHeadlineScript     — optional script-accent line of intro H2 (default: “for Felinda”)
 */
export default function CreationsPage({
  title,
  heroSubtitle,
  breadcrumb,
  activeHref,
  description,
  introParagraphs,
  introHeadlineSerif = "Designed",
  introHeadlineScript = "for Felinda",
  galleryItems = [],
  galleryFirst = false,
  middleContent = null,
  ctaTitle,
  ctaBody,
  ctaStripButtonLabel,
  ctaStripSecondaryLabel,
  ctaStripPreserveCase = false,
  showDualIntroCtas = false,
  introDualLeadWithJourney = false,
  introPrimaryCtaLabel,
  introSecondaryCtaLabel,
  introOutlineCtaHref = whatsappBespokeJourneyHref,
  introSolidCtaHref = consultationBookingHref,
  ctaStripPrimaryHref = whatsappBespokeJourneyHref,
  ctaStripSecondaryHref = whatsappBespokeJourneyHref,
  introDocCaptionLine,
  ctaStripDocCaptionLine,
  benefitItems,
  benefitsFooterHidden = false,
  overlapHeroCard = false,
  seoPath,
}) {
  const introPs =
    Array.isArray(introParagraphs) && introParagraphs.length > 0 ? introParagraphs : [description];

  const benefits =
    Array.isArray(benefitItems) && benefitItems.length > 0 ? benefitItems : defaultBenefits;

  const stripTitle = ctaTitle ?? "Create something truly yours.";
  const stripBody = ctaBody ?? "Our designers are here to bring your vision to life.";

  const formatCta = (label, preserve) => {
    const base = label ?? "";
    if (!base) return "";
    return preserve ? base : base.toUpperCase();
  };

  const stripPrimaryText = formatCta(
    ctaStripButtonLabel ?? "START YOUR BESPOKE JOURNEY",
    ctaStripPreserveCase,
  );
  const stripSecondaryText = ctaStripSecondaryLabel
    ? formatCta(ctaStripSecondaryLabel, ctaStripPreserveCase)
    : "";

  const secondaryIntroLabel = introSecondaryCtaLabel ?? "Start Your Bespoke Journey";
  const primaryIntroConsultLabel = introPrimaryCtaLabel ?? "Book a Consultation";

  const introBlock = (
    <div
      className={`mx-auto max-w-[900px] text-center ${overlapHeroCard ? "pt-10 md:pt-16" : ""}`}
    >
      <h2 className="font-serif text-[44px] font-light leading-[1.05] tracking-[-0.03em] text-[#4f413a] md:text-[64px]">
        {introHeadlineSerif}{" "}
        <span
          className="text-[#d59a92]"
          style={{
            fontFamily: "var(--font-great-vibes), 'Great Vibes', 'Allura', cursive",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          {introHeadlineScript}
        </span>
      </h2>

      <div className="mx-auto mt-7 max-w-[760px] space-y-6">
        {introPs.map((paragraph, i) => (
          <p
            key={i}
            className="font-serif text-[18px] leading-[1.8] text-[#78675f] md:text-[20px] [&:last-of-type]:text-[#6e5c54]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {showDualIntroCtas && introDualLeadWithJourney ? (
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href={introOutlineCtaHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] border border-[#ddbdb3] bg-transparent px-8 py-4 text-[14px] font-medium tracking-[0.04em] text-[#c88f87] transition hover:border-[#c88f87] hover:bg-[#fdf8f6] sm:w-auto md:text-[15px]"
          >
            {secondaryIntroLabel}
            <ArrowRight size={17} aria-hidden />
          </Link>
          <Link
            href={introSolidCtaHref}
            className="inline-flex w-full items-center justify-center gap-3 rounded-[8px] bg-[#d29189] px-8 py-4 text-[15px] font-medium tracking-[0.02em] text-white shadow-sm transition hover:bg-[#c5827a] sm:w-auto md:text-[17px]"
          >
            <CalendarDays size={18} aria-hidden />
            {primaryIntroConsultLabel}
          </Link>
        </div>
      ) : showDualIntroCtas ? (
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href={introSolidCtaHref}
            className="inline-flex w-full items-center justify-center gap-3 rounded-[8px] bg-[#d29189] px-8 py-4 text-[15px] font-medium tracking-[0.02em] text-white shadow-sm transition hover:bg-[#c5827a] sm:w-auto md:text-[17px]"
          >
            <CalendarDays size={18} aria-hidden />
            BOOK A CONSULTATION
          </Link>
          <Link
            href={introOutlineCtaHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] border border-[#ddbdb3] bg-transparent px-8 py-4 text-[14px] font-medium tracking-[0.04em] text-[#c88f87] transition hover:border-[#c88f87] hover:bg-[#fdf8f6] sm:w-auto md:text-[15px]"
          >
            {secondaryIntroLabel.toUpperCase()}
            <ArrowRight size={17} aria-hidden />
          </Link>
        </div>
      ) : (
        <Link
          href={introSolidCtaHref}
          className="mt-9 inline-flex items-center gap-3 rounded-[8px] bg-[#d29189] px-8 py-4 text-[15px] font-medium tracking-[0.02em] text-white shadow-sm transition hover:bg-[#c5827a] md:text-[17px]"
        >
          <CalendarDays size={18} aria-hidden />
          BOOK A CONSULTATION
        </Link>
      )}

      {introDocCaptionLine ? (
        <p className="mx-auto mt-5 max-w-[760px] text-center font-sans text-[12px] leading-relaxed text-[#9a8a82]">
          {introDocCaptionLine}
        </p>
      ) : null}
    </div>
  );

  const galleryBlock = <CreationsGallery items={galleryItems} />;

  const ctaStrip = (
    <div className="mt-7 rounded-[18px] border border-[#eaded8] bg-[#f8f3ef] px-6 py-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-1 items-center gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#dfc5bc] text-[#cf938b]">
            <Gem size={22} strokeWidth={1.8} />
          </div>
          <div className="min-w-0">
            <h3 className="font-serif text-[26px] font-light text-[#54463f] md:text-[38px]">{stripTitle}</h3>
            <p className="mt-1 text-[16px] text-[#807069] md:text-[20px]">{stripBody}</p>
          </div>
        </div>

        {stripSecondaryText ? (
          <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row sm:justify-end lg:w-auto">
            <Link
              href={ctaStripPrimaryHref}
              className="inline-flex items-center justify-center gap-3 rounded-[10px] bg-[#d29189] px-8 py-4 text-[14px] font-medium tracking-[0.02em] text-white shadow-sm transition hover:bg-[#c5827a] md:px-10 md:text-[16px]"
            >
              <CalendarDays size={18} aria-hidden />
              {stripPrimaryText}
            </Link>
            <Link
              href={ctaStripSecondaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-[#ddbdb3] bg-transparent px-8 py-4 text-[14px] font-medium tracking-[0.04em] text-[#c88f87] transition hover:bg-[#c88f87] hover:text-white md:px-10 md:text-[16px]"
            >
              {stripSecondaryText}
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        ) : (
          <Link
            href={ctaStripPrimaryHref}
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-[10px] border border-[#ddbdb3] bg-transparent px-8 py-4 text-[14px] tracking-[0.04em] text-[#c88f87] transition hover:bg-[#c88f87] hover:text-white md:px-10 md:text-[17px]"
          >
            {stripPrimaryText}
            <ArrowRight size={18} aria-hidden />
          </Link>
        )}
      </div>
      {ctaStripDocCaptionLine ? (
        <p className="mt-5 border-t border-[#eaded8] pt-4 text-center font-sans text-[12px] leading-relaxed text-[#9a8a82]">
          {ctaStripDocCaptionLine}
        </p>
      ) : null}
    </div>
  );

  const benefitsBlock = (
    <div className="mt-7 border-t border-[#ece1dc] pt-6">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((item, index) => {
          const Icon = defaultBenefitIcons[index] ?? Gem;
          return (
            <div key={`${item.title}-${index}`} className="flex items-start gap-4">
              <Icon className="mt-1 shrink-0 text-[#d0938a]" size={22} />
              <div>
                <div className="font-serif text-[20px] font-light text-[#564840] md:text-[24px]">{item.title}</div>
                <div className="text-[14px] italic text-[#8e7b73] md:text-[16px]">{item.subtitle}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const resolvedSeoPath = seoPath || activeHref || "/";
  const breadcrumbItems = (breadcrumb || []).map((item) => ({
    name: item.label,
    href: item.href,
  }));
  const pageDescription = introPs[0] || description || "";
  const primaryImage = galleryItems[0]?.image;

  return (
    <>
      <JsonLd data={pageWebSiteJsonLd({ path: resolvedSeoPath, name: title, description: pageDescription })} />
      {breadcrumbItems.length > 0 ? <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} /> : null}
      <JsonLd
        data={productJsonLd({
          name: title,
          path: resolvedSeoPath,
          description: pageDescription,
          image: primaryImage,
          category: "Bespoke Fine Jewelry",
        })}
      />
      <Header activeHref={activeHref} />

      <div className="min-h-screen bg-[#f6f0ec] text-[#56463f]">
        <PageHero
          title={title}
          subtitle={heroSubtitle}
          breadcrumb={breadcrumb}
          extendedBottom={overlapHeroCard}
        />

        <div className="relative overflow-hidden">
          <section
            className={`relative z-10 px-6 pb-12 ${overlapHeroCard ? "-mt-10 md:-mt-14" : ""}`}
          >
            <div
              className={`mx-auto max-w-[1320px] overflow-hidden border border-[#e7dbd5] bg-[#fbf7f4] px-6 py-10 md:px-10 md:py-12 ${
                overlapHeroCard
                  ? "rounded-t-[2.5rem] rounded-b-[30px] shadow-[0_12px_40px_rgba(110,90,80,0.07)] md:rounded-t-[3rem] md:rounded-b-[30px]"
                  : "rounded-[30px] shadow-[0_10px_30px_rgba(110,90,80,0.04)]"
              }`}
            >
              {galleryFirst ? (
                <>
                  {galleryBlock}
                  <div className="mt-12 border-t border-[#ece1dc]" />
                  {introBlock}
                  {middleContent ? <div className="mt-2">{middleContent}</div> : null}
                  {ctaStrip}
                  {!benefitsFooterHidden ? benefitsBlock : null}
                </>
              ) : (
                <>
                  {introBlock}
                  <div className="mt-12 border-t border-[#ece1dc]" />
                  {galleryBlock}
                  {middleContent ? <div className="mt-12">{middleContent}</div> : null}
                  {ctaStrip}
                  {!benefitsFooterHidden ? benefitsBlock : null}
                </>
              )}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
