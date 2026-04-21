import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms & Conditions — Felinda Jewelry",
  description:
    "The terms that govern your relationship with Felinda Jewelry — bespoke commissions, payments, delivery, after-care and more.",
};

const sections = [
  {
    id: "agreement",
    title: "Acceptance of terms",
    body: (
      <>
        <p>
          These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use
          of the Felinda Jewelry website (&ldquo;Site&rdquo;) and the
          services we provide as a private bespoke jewelry atelier. By
          browsing the Site, booking a consultation or commissioning a piece,
          you agree to be bound by these Terms.
        </p>
        <p>
          If you do not agree with any part of these Terms, please refrain
          from using our services.
        </p>
      </>
    ),
  },
  {
    id: "the-atelier",
    title: "Who we are",
    body: (
      <>
        <p>
          Felinda Jewelry is a private bespoke atelier registered in
          Malaysia, operating from Bangsar, Kuala Lumpur. References to
          &ldquo;Felinda&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; and
          &ldquo;our&rdquo; mean Felinda Jewelry; references to
          &ldquo;you&rdquo; and &ldquo;your&rdquo; mean the visitor or client
          accepting these Terms.
        </p>
      </>
    ),
  },
  {
    id: "consultations",
    title: "Consultations &amp; commissions",
    body: (
      <>
        <p>
          All bespoke work begins with a private consultation, in studio or
          by video. The consultation itself is complimentary and creates no
          obligation on either side.
        </p>
        <p>
          A commission becomes binding once you have approved the final
          design and paid the agreed deposit. From this point, your piece
          enters our atelier schedule and the bench work begins.
        </p>
        <p>
          Bespoke pieces are produced to a written timeline shared at
          sign-off. Our typical lead time is 8 – 10 weeks; complex
          high-jewellery pieces or heirloom restorations may take 12 – 16
          weeks. We will keep you updated at every stage.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payments &amp; deposits",
    body: (
      <>
        <p>
          Bespoke commissions require a non-refundable deposit of fifty
          percent (50%) of the agreed total at sign-off. The remaining
          balance is payable before your finished piece is dispatched or
          collected.
        </p>
        <p>
          All prices are quoted in Malaysian Ringgit (MYR) unless otherwise
          stated. Quotes are valid for thirty (30) days and reflect prevailing
          metal and gemstone market rates at the time of issue. We accept
          bank transfer and major card payments through our payment partners;
          card details are processed by the partner and never stored by
          Felinda.
        </p>
      </>
    ),
  },
  {
    id: "changes-cancellations",
    title: "Changes &amp; cancellations",
    body: (
      <>
        <p>
          Once a commission has been signed off and stones have been sourced
          or production has begun, the design cannot be substantially
          changed. Minor adjustments (for example, ring sizing) are normally
          possible until the wax-fitting stage at no extra cost.
        </p>
        <p>
          Bespoke pieces are made specifically for you and are non-refundable
          once production has begun. If a commission is cancelled before
          production begins, the deposit is forfeit and any costs already
          incurred (for example, sourced stones) will be billed at cost.
        </p>
      </>
    ),
  },
  {
    id: "client-stones",
    title: "Heirloom &amp; client-supplied stones",
    body: (
      <>
        <p>
          Many Felinda commissions incorporate stones or jewellery our
          clients already own. These are received against a written receipt
          and held in our insured studio safe.
        </p>
        <p>
          We will assess each stone and advise on suitability, re-cutting or
          re-setting. While we take every reasonable precaution, the
          structural integrity of pre-owned stones cannot always be
          guaranteed; in the rare event of damage during cutting or setting,
          our liability is limited to the appraised value declared at intake.
        </p>
      </>
    ),
  },
  {
    id: "delivery",
    title: "Delivery &amp; collection",
    body: (
      <>
        <p>
          Finished pieces may be collected in studio at a private unveiling
          or shipped to you under fully insured, signature-required courier.
          International shipping is available worldwide.
        </p>
        <p>
          Risk passes to you once the piece is delivered to your address (or
          collected). Any import duties or local taxes outside Malaysia are
          your responsibility.
        </p>
      </>
    ),
  },
  {
    id: "warranty",
    title: "Lifetime craftsmanship promise",
    body: (
      <>
        <p>
          Every Felinda piece carries a lifetime craftsmanship promise.
          Re-polishing, re-rhodium plating and prong-tightening are
          complimentary, for as long as you wear the piece. Damage caused by
          accident, misuse or third-party alteration is not covered, but we
          will always quote fairly to put it right.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <>
        <p>
          All sketches, CAD renders, photography and written content
          published by Felinda — on this Site or elsewhere — remain the
          intellectual property of Felinda Jewelry and may not be reproduced
          without written permission.
        </p>
        <p>
          Bespoke designs created for you are yours to wear and to pass on.
          We retain the right to photograph the finished piece for our own
          archive and portfolio, with your name kept private unless you
          consent otherwise.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <>
        <p>
          To the fullest extent permitted by law, Felinda's total liability
          arising from any commission or use of this Site is limited to the
          value of the commission in question. We are not liable for
          indirect, consequential or sentimental loss.
        </p>
      </>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    body: (
      <>
        <p>
          These Terms are governed by the laws of Malaysia. Any dispute that
          cannot be settled amicably will be referred to the courts of Kuala
          Lumpur.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <p>
          For questions about these Terms or your commission, please contact
          us:
        </p>
        <p>
          Maison Felinda · Bangsar, Kuala Lumpur
          <br />
          <a href="mailto:atelier@felindajewelry.com">
            atelier@felindajewelry.com
          </a>
          <br />
          +60 3 2201 0088
        </p>
      </>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      activeHref="/terms-and-conditions"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Terms & Conditions" },
      ]}
      updatedAt="Updated · April 2026"
      intro="The terms that govern your relationship with Felinda Jewelry — bespoke commissions, payments, delivery, after-care and the lifetime promise that follows every piece home."
      sections={sections}
    />
  );
}
