import Link from "next/link";

import { CONTACT } from "@/lib/contact";

function InstagramIcon({ size = 17 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 17 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.91h-2.33V22c4.78-.8 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

const socials = [
  {
    label: "Instagram",
    href: CONTACT.instagram,
    Icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: CONTACT.facebook,
    Icon: FacebookIcon,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <div className="felinda-serif text-3xl tracking-[0.3em] text-rose">
            FELINDA
          </div>
          <div className="felinda-serif mt-1 text-xs tracking-[0.55em] text-rose">
            JEWELRY
          </div>
          <p className="felinda-sans mt-5 max-w-sm text-[15px] leading-7 text-muted">
            A private bespoke jewelry atelier. Handcrafted fine jewelry, made one story at a time.
          </p>

          <ul className="mt-6 flex items-center gap-3" aria-label="Follow Felinda">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e3c8bf] text-[#c88f87] transition hover:border-[#c88f87] hover:bg-[#c88f87] hover:text-white"
                >
                  <Icon size={17} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="felinda-sans text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Navigate
          </div>
          <ul className="felinda-sans mt-4 space-y-3 text-[15px] text-muted">
            <li>
              <Link href="/" className="hover:text-ink">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-ink">
                About
              </Link>
            </li>

            <li>
              <Link href="/custom-rings" className="hover:text-ink">
                Our Creations
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="felinda-sans text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Contact
          </div>
          <ul className="felinda-sans mt-4 space-y-3 text-[15px] text-muted">
            <li>
              <a
                href={CONTACT.whatsappWaMe}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-ink">
                Email
              </a>
            </li>
            <li>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink"
              >
                Instagram
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-ink">
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="felinda-sans text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Studio
          </div>
          <p className="felinda-sans mt-4 text-[15px] leading-7 text-muted">
            {CONTACT.address}
          </p>
          <p className="felinda-sans mt-3 text-[15px] leading-7 text-muted">
            {CONTACT.hours}
          </p>
        </div>
      </div>
      <div className="border-t border-line/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs uppercase tracking-[0.18em] text-muted lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            © {new Date().getFullYear()} Felinda Jewelry • By appointment only
            {" "}
            Developed by{" "}
            <Link
              href="https://cressoft.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-muted/50 underline-offset-2 transition hover:text-rose hover:decoration-rose/60"
            >
              Cressoft
            </Link>
          </div>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:text-ink">
                Privacy Policy
              </Link>
            </li>
            <li aria-hidden className="text-muted/60">
              •
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-ink">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
