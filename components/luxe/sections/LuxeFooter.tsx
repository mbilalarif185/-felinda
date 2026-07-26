"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import type { IconType } from "react-icons";

import { CONTACT } from "@/lib/contact";

const NAV: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Shop",
    links: [
      { label: "Necklaces", href: "/pendants-necklaces" },
      { label: "Pearls", href: "/pearl-creations" },
      { label: "Bespoke", href: "/custom-rings" },
      { label: "Earrings", href: "/earrings" },
    ],
  },
  {
    heading: "House",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "The Process", href: "/process" },
      { label: "Journal", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const SOCIALS: { label: string; href: string; Icon: IconType }[] = [
  { label: "Instagram", href: CONTACT.instagram, Icon: FaInstagram },
  { label: "Facebook", href: CONTACT.facebook, Icon: FaFacebookF },
  { label: "LinkedIn", href: CONTACT.linkedin, Icon: FaLinkedinIn },
];

export default function LuxeFooter() {
  return (
    <footer className="border-t border-luxeGold/12 bg-luxeBlack px-6 pb-10 pt-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-serif text-3xl tracking-[0.14em] text-luxeGoldSoft">
              AURÉA
            </div>
            <p className="mt-5 max-w-xs font-sans text-[14px] leading-7 text-luxeSmoke">
              Handcrafted fine jewellery from our Kuala Lumpur atelier. Made once,
              for one, to be worn for a lifetime.
            </p>
            <ul className="mt-7 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="grid h-10 w-10 place-items-center rounded-full border border-luxeGold/25 text-luxeGoldSoft transition-colors hover:border-luxeGold hover:bg-luxeGold hover:text-luxeBlack"
                  >
                    <Icon size={15} />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {NAV.map((col) => (
            <div key={col.heading}>
              <h3 className="font-sans text-[0.62rem] uppercase tracking-[0.24em] text-luxeGold">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="font-sans text-sm text-luxeSmoke transition-colors hover:text-luxeGoldSoft"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-sans text-[0.62rem] uppercase tracking-[0.24em] text-luxeGold">
              Visit
            </h3>
            <p className="mt-5 font-sans text-sm leading-7 text-luxeSmoke">
              By appointment
              <br />
              Kuala Lumpur, Malaysia
              <br />
              <a
                href={`mailto:${CONTACT.email}`}
                className="transition-colors hover:text-luxeGoldSoft"
              >
                {CONTACT.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-luxeGold/10 pt-7 sm:flex-row">
          <p className="font-sans text-[0.62rem] uppercase tracking-[0.18em] text-luxeSmoke/70">
            © {2026} Auréa Jewellery. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="font-sans text-[0.62rem] uppercase tracking-[0.18em] text-luxeSmoke/70 transition-colors hover:text-luxeGoldSoft"
            >
              Privacy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="font-sans text-[0.62rem] uppercase tracking-[0.18em] text-luxeSmoke/70 transition-colors hover:text-luxeGoldSoft"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
