import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Felinda Jewelry",
  description:
    "Reserve a private visit at the Felinda atelier — a concierge booking experience for bespoke jewelry consultations.",
};

const valueStrip = [
  "Private Atelier",
  "By Appointment Only",
  "Founder-Led Conversation",
  "Kuala Lumpur · Malaysia",
  "Reply Within 1 — 2 Days",
];

const reachOut = [
  {
    label: "WhatsApp",
    value: "+60 12 345 6789",
    note: "For swift, intimate conversations and bookings.",
    href: "https://wa.me/60123456789",
    cta: "Open Chat",
  },
  {
    label: "Email",
    value: "atelier@felinda.com",
    note: "For considered enquiries and references.",
    href: "mailto:atelier@felinda.com",
    cta: "Compose",
  },
  {
    label: "Instagram",
    value: "@felinda.jewelry",
    note: "A quiet visual journal of creations and atelier days.",
    href: "https://instagram.com/felinda.jewelry",
    cta: "Follow",
  },
];

const journey = [
  {
    no: "01",
    title: "Write",
    text: "Share the day, hour, and intention behind the piece you imagine.",
  },
  {
    no: "02",
    title: "Conversation",
    text: "We respond personally within one to two days to begin a private dialogue.",
  },
  {
    no: "03",
    title: "Atelier Visit",
    text: "When ready, you are invited to the atelier — by appointment only.",
  },
];

const directory = [
  ["Atelier", "Kuala Lumpur, Malaysia"],
  ["Open", "Tuesday — Saturday"],
  ["Hours", "11:00 — 18:00"],
  ["Reply", "Within 1 — 2 days"],
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header activeHref="/contact" />

      <main>
        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-roseSoft/20 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-roseSoft/20 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="felinda-sans mb-6 text-xs uppercase tracking-[0.28em] text-clay">
                The Concierge
              </div>
              <h1 className="felinda-serif max-w-xl text-5xl leading-[0.98] tracking-[-0.02em] lg:text-7xl">
                Reserve your hour at the atelier.
              </h1>
              <p className="felinda-sans mt-6 max-w-xl text-lg leading-8 text-muted">
                Choose a day, an hour, and a quiet intention. Each visit is
                arranged personally by the atelier — no automated calendars,
                no rushed conversations. Only the space to begin something
                considered.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="#book"
                  className="felinda-sans rounded-full bg-rose px-6 py-3.5 text-sm font-medium tracking-[0.04em] text-white transition hover:opacity-90"
                >
                  Reserve a Visit
                </Link>
                <a
                  href="https://wa.me/60123456789"
                  target="_blank"
                  rel="noreferrer"
                  className="felinda-sans rounded-full border border-line bg-white px-6 py-3.5 text-sm font-medium tracking-[0.04em] text-ink transition hover:bg-shell"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/80 bg-white p-4 shadow-[0_20px_70px_rgba(72,49,41,0.08)]">
                <div className="rounded-[1.5rem] bg-gradient-to-b from-[#F4E9E5] via-[#F8F3F1] to-[#EEE3DE] p-8 lg:p-10">
                  <div className="felinda-sans text-xs uppercase tracking-[0.22em] text-clay">
                    Atelier Directory
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7">
                    {directory.map(([k, v]) => (
                      <div key={k}>
                        <div className="felinda-sans text-xs uppercase tracking-[0.22em] text-clay">
                          {k}
                        </div>
                        <div className="felinda-serif mt-2 text-2xl text-ink">
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 border-t border-line pt-6">
                    <p className="felinda-sans text-[15px] leading-7 text-muted">
                      The full address is shared upon confirmation of your
                      visit, preserving the calm of the space.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 left-2 rounded-[1.5rem] border border-line bg-white/95 p-5 shadow-[0_10px_30px_rgba(72,49,41,0.08)] lg:bottom-6 lg:left-0">
                <div className="felinda-sans text-xs uppercase tracking-[0.22em] text-clay">
                  Concierge Live
                </div>
                <div className="felinda-serif mt-2 text-2xl text-ink">
                  Open by appointment
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── VALUE STRIP (matches homepage) ─── */}
        <section className="border-y border-line bg-white/70">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-5 text-center lg:grid-cols-5 lg:px-10">
            {valueStrip.map((item) => (
              <div
                key={item}
                className="felinda-sans text-sm tracking-[0.08em] text-muted"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ─── BOOKING SECTION ─── */}
        <section id="book" className="bg-shell py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="felinda-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
                  Concierge Booking
                </div>
                <h2 className="felinda-serif text-4xl lg:text-6xl">
                  Build your visit
                </h2>
              </div>
              <p className="felinda-sans max-w-xl text-lg leading-8 text-muted">
                Pick the moment, name the intention, and watch your calling
                card take shape as you compose your request.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>

        {/* ─── DIRECT REACH (cards, homepage style) ─── */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="felinda-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
                Or, More Directly
              </div>
              <h2 className="felinda-serif text-4xl lg:text-6xl">
                A direct line
              </h2>
            </div>
            <p className="felinda-sans max-w-xl text-lg leading-8 text-muted">
              Some conversations are best begun in fewer words. Reach the
              atelier in the way that feels most natural to you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reachOut.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target={r.href.startsWith("http") ? "_blank" : undefined}
                rel={r.href.startsWith("http") ? "noreferrer" : undefined}
                className="group overflow-hidden rounded-[1.75rem] border border-line bg-white p-7 shadow-[0_10px_35px_rgba(72,49,41,0.05)] transition hover:shadow-[0_18px_45px_rgba(72,49,41,0.08)]"
              >
                <div className="felinda-sans text-xs uppercase tracking-[0.22em] text-clay">
                  {r.label}
                </div>
                <h3 className="felinda-serif mt-3 text-3xl leading-tight">
                  {r.value}
                </h3>
                <p className="felinda-sans mt-3 text-[15px] leading-7 text-muted">
                  {r.note}
                </p>
                <div className="felinda-sans mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-[0.04em] text-ink transition group-hover:text-rose">
                  {r.cta}
                  <svg
                    className="h-3 w-3 transition group-hover:translate-x-1"
                    viewBox="0 0 14 10"
                    fill="none"
                  >
                    <path
                      d="M1 5H13M13 5L9 1M13 5L9 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ─── JOURNEY (process-style, homepage rhythm) ─── */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="felinda-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
                After You Reach Out
              </div>
              <h2 className="felinda-serif text-4xl lg:text-6xl">
                What happens next
              </h2>
              <p className="felinda-sans mt-5 text-lg leading-8 text-muted">
                A clear, unhurried path — nothing about the journey is
                automated, scripted, or rushed.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {journey.map((step) => (
                <div
                  key={step.no}
                  className="relative overflow-hidden rounded-[1.75rem] border border-line bg-white p-7 shadow-[0_10px_35px_rgba(72,49,41,0.04)]"
                >
                  <div className="felinda-serif absolute right-4 top-1 text-7xl text-[#F2E6E1]">
                    {step.no}
                  </div>
                  <div className="relative z-10">
                    <h3 className="felinda-serif text-3xl">{step.title}</h3>
                    <p className="felinda-sans mt-4 text-[15px] leading-7 text-muted">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ATELIER NOTE (testimonial-style band, homepage rhythm) ─── */}
        <section className="bg-[#F8F2EE] py-24">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
            <div className="felinda-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
              From the Atelier
            </div>
            <h2 className="felinda-serif text-4xl lg:text-6xl">
              A note before we meet
            </h2>

            <div className="mt-12 rounded-[2rem] border border-line bg-white px-8 py-12 shadow-[0_12px_35px_rgba(72,49,41,0.05)] lg:px-16">
              <div className="felinda-serif text-5xl text-rose">“</div>
              <p className="felinda-serif mt-4 text-3xl leading-relaxed text-ink lg:text-4xl">
                Every conversation is read personally, and answered in the same
                hand it was written.
              </p>
              <div className="felinda-sans mt-8 text-sm uppercase tracking-[0.18em] text-[#7D706A]">
                Felinda · Founder
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
