import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy — Felinda Jewelry",
  description:
    "How Felinda Jewelry collects, uses and protects the personal information of our clients and visitors.",
};

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    body: (
      <>
        <p>
          Felinda Jewelry (&ldquo;Felinda&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo; or &ldquo;our&rdquo;) is a private bespoke jewelry
          atelier based in Kuala Lumpur, Malaysia. We respect your privacy and
          are committed to protecting the personal information you share with
          us — whether you are a client, a prospective client, or simply a
          visitor to our website.
        </p>
        <p>
          This Privacy Policy explains what information we collect, how we use
          and store it, and the rights you have over it. By using our website
          or engaging our services, you agree to the practices described
          here.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>We collect only what we need in order to serve you well:</p>
        <ul>
          <li>
            <strong>Contact details</strong> — your name, email address, phone
            number, and (where relevant) shipping and billing addresses.
          </li>
          <li>
            <strong>Consultation details</strong> — design preferences,
            references, sketches, gemstone or heirloom details you choose to
            share, and the notes our designers take during your sessions.
          </li>
          <li>
            <strong>Order &amp; payment information</strong> — the items
            commissioned, deposits and balance payments, and transaction
            references. Card details are processed by our payment partners and
            are never stored by Felinda.
          </li>
          <li>
            <strong>Website usage</strong> — IP address, browser type, pages
            viewed and approximate location, collected through standard
            analytics so we can improve the site.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    body: (
      <>
        <p>Your information is used to:</p>
        <ul>
          <li>
            Schedule consultations, manage commissions and deliver finished
            pieces.
          </li>
          <li>
            Communicate with you about your order, fittings, after-care and
            our lifetime craftsmanship promise.
          </li>
          <li>
            Send occasional updates about new collections or atelier news —
            only if you have opted in, and you can unsubscribe at any time.
          </li>
          <li>
            Improve our website, services and client experience based on
            aggregated, non-identifying analytics.
          </li>
          <li>Comply with our legal, tax and accounting obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing your information",
    body: (
      <>
        <p>
          We do not sell your personal information. We share it only with
          trusted partners who help us run our atelier — for example:
        </p>
        <ul>
          <li>
            Insured shipping and white-glove delivery couriers, to dispatch
            your finished piece.
          </li>
          <li>
            Independent gemmologists and casting partners, where a stone or
            production step requires their expertise.
          </li>
          <li>
            Payment processors, who handle card and bank transactions on our
            behalf.
          </li>
          <li>
            Professional advisers (legal, tax and accounting) where required.
          </li>
        </ul>
        <p>
          Each partner is bound by confidentiality and is permitted to use
          your information only for the specific purpose we engage them for.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies &amp; analytics",
    body: (
      <>
        <p>
          Our website uses a small number of essential and analytics cookies
          to remember your preferences and to understand how visitors use the
          site. You can disable cookies through your browser settings; the
          site will continue to work, though some convenience features may be
          limited.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "How we protect your information",
    body: (
      <>
        <p>
          Personal information is stored on secured systems with restricted
          access. Sensitive design files and client notes are kept on
          encrypted, access-controlled studio drives. We retain your
          information only for as long as needed to fulfil the purpose for
          which it was collected, or as required by law.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li>Request a copy of the personal information we hold about you.</li>
          <li>Ask us to correct anything that is inaccurate or out of date.</li>
          <li>
            Request deletion of your information, subject to our legal and
            record-keeping obligations.
          </li>
          <li>
            Withdraw consent for marketing communications at any time, with no
            effect on your client relationship.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please write to us at{" "}
          <a href="mailto:atelier@felindajewelry.com">
            atelier@felindajewelry.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices or in the law. The most current version
          will always be posted on this page, with the date of the last
          update shown above.
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
          If you have any questions about this Privacy Policy or how we
          handle your information, we would be glad to hear from you:
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

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      activeHref="/privacy-policy"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Privacy Policy" },
      ]}
      updatedAt="Updated · April 2026"
      intro="Felinda Jewelry is committed to protecting the privacy of every client and visitor. This page sets out, in plain language, what we collect, how we use it, and the choices you have."
      sections={sections}
    />
  );
}
