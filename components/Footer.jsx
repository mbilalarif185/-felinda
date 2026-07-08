import Link from "next/link";

import Logo from "@/components/Logo";
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

function PinterestIcon({ size = 17 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.625 0 12.017 0z" />
    </svg>
  );
}

function TikTokIcon({ size = 17 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.37-1.92 1.62-4.55 2.28-6.99 1.75-2.56-.54-4.83-2.31-5.83-4.73-.97-2.37-.83-5.17.36-7.44 1.14-2.17 3.32-3.73 5.75-4.14v4.06c-1.28.23-2.52.92-3.23 1.97-.68 1.03-.89 2.37-.53 3.54.4 1.28 1.48 2.31 2.8 2.62 1.28.29 2.67.04 3.73-.7 1.07-.75 1.72-1.99 1.83-3.29.13-2.82.04-5.65.08-8.47.01-3.14.01-6.28.01-9.42h1.27z" />
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
  {
    label: "Pinterest",
    href: CONTACT.pinterest,
    Icon: PinterestIcon,
  },
  {
    label: "TikTok",
    href: CONTACT.tiktok,
    Icon: TikTokIcon,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <Logo priority={false} variant="footer" />
          <p className="auréa-sans mt-5 max-w-sm text-[15px] leading-7 text-muted">
            A private bespoke jewelry atelier.
Fine jewelry, handcrafted one story at a time. Each piece entirely its own.
          </p>

          <ul className="mt-6 flex items-center gap-3" aria-label="Follow Auréa">
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
          <div className="auréa-sans text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Navigate
          </div>
          <ul className="auréa-sans mt-4 space-y-3 text-[15px] text-muted">
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
          <div className="auréa-sans text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Contact
          </div>
          <ul className="auréa-sans mt-4 space-y-3 text-[15px] text-muted">
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
          <div className="auréa-sans text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            BOUTIQUE
          </div>
          <p className="auréa-sans mt-4 text-[15px] leading-7 text-muted">
            {CONTACT.address}
          </p>
          <p className="auréa-sans mt-3 text-[15px] leading-7 text-muted">
            {CONTACT.hours}
          </p>
        </div>
      </div>
      <div className="border-t border-line/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs uppercase tracking-[0.18em] text-muted lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex flex-col gap-1.5">
            <div>
              © {new Date().getFullYear()} Auréa Jewellery • By appointment only
            </div>
            <div style={{ fontSize: "12px", color: "gray" }}>
              Developed by Quantel Solutions ·{" "}
              <Link
                href="https://quantel.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-muted/50 underline-offset-2 transition hover:text-rose hover:decoration-rose/60"
              >
                quantel.uk
              </Link>
            </div>
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
