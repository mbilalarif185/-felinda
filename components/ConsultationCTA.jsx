import Link from "next/link";

import { CONTACT, consultationBookingHref } from "@/lib/contact";

function CtaButton({ href, className, children }) {
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function ConsultationCTA({
  eyebrow = "Begin Here",
  title = "The Right Piece Doesn’t Exist Yet Let’s Make It.",
  description = "Most people who reach out to us arrive with something between certainty and feeling — a moment they know is coming, a person they wish to honour, or an idea that has not yet taken full form. That is exactly where the process begins.",
  note = "By appointment only • Private • One-on-One Consultations • Serving clients\nAcross Malaysia",
  primary = { label: "Book Your Private Appointment", href: consultationBookingHref },
  secondary = { label: "Send a WhatsApp Message", href: CONTACT.whatsappWaMe },
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="rounded-[2.2rem] border border-line bg-white/[0.05] px-8 py-14 shadow-[0_16px_45px_rgba(72,49,41,0.05)] lg:px-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="auréa-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
            {eyebrow}
          </div>
          <h2 className="auréa-serif text-4xl lg:text-6xl">{title}</h2>
          <p className="auréa-sans mt-5 text-lg leading-8 text-muted">
            {description}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <CtaButton
              href={primary.href}
              className="auréa-sans rounded-full bg-rose px-6 py-3.5 text-sm font-medium tracking-[0.04em] text-luxeBlack transition hover:opacity-90"
            >
              {primary.label}
            </CtaButton>
            <CtaButton
              href={secondary.href}
              className="auréa-sans rounded-full border border-line bg-white/[0.05] px-6 py-3.5 text-sm font-medium tracking-[0.04em] text-ink transition hover:bg-shell"
            >
              {secondary.label}
            </CtaButton>
          </div>
          {note && (
            <div className="auréa-sans mt-6 whitespace-pre-line text-xs uppercase tracking-[0.18em] text-[#a89f95]">
              {note}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
