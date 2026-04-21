"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import Logo from "./Logo";
import { navItems } from "@/lib/navigation";

// Felinda brand palette (mirrors tailwind.config.js — inline so the menu
// stays correct even if Tailwind tokens get reverted by OneDrive sync).
const COLORS = {
  cream: "#FBF8F6",
  shell: "#F5F0EB",
  ink: "#2B2321",
  rose: "#D8A29A",
  roseSoft: "#E8C4BF",
  clay: "#A17C75",
  muted: "#6E655F",
  line: "#E9DFDA",
  white: "#FFFFFF",
};

// Icons — inline SVG so we don't depend on any icon library
function FacebookIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden
      fill="currentColor"
      {...props}
    >
      <path d="M13.5 21v-7.5h2.55l.38-2.97H13.5V8.62c0-.86.24-1.45 1.47-1.45h1.57V4.5c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.81 1.38-3.81 3.92v2.18H7.9v2.97h2.55V21h3.05Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.25" cy="6.75" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com/", Icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com/", Icon: InstagramIcon },
];

/**
 * Self-contained mobile menu:
 *   • Hamburger trigger (visible < lg)
 *   • Full-screen overlay panel rendered via portal at <body>
 *     (escapes the header's backdrop-filter containing block)
 *   • Smooth fade + slide animation, staggered nav items
 *   • Body scroll lock, ESC to close, focus trap, focus return to trigger
 *   • Cream / rose Felinda palette via inline styles for visual resilience
 */
export default function MobileMenu({
  activeHref = "/",
  ctaLabel = "Book Appointment",
  ctaHref = "/contact",
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  // Lock body scroll while the menu is open
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // ESC + focus trap; cleanup returns focus to trigger on close
  useEffect(() => {
    if (!open) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    const raf = requestAnimationFrame(() => closeRef.current?.focus());

    return () => {
      window.removeEventListener("keydown", onKey);
      cancelAnimationFrame(raf);
      triggerRef.current?.focus();
    };
  }, [open, close]);

  const overlayUI = (
    <>
      {/* ── Backdrop ─────────────────────────────────────────────────────── */}
      <div
        onClick={close}
        aria-hidden
        style={{ backgroundColor: "rgba(43, 35, 33, 0.35)" }}
        className={`fixed inset-0 z-[1000] backdrop-blur-md transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* ── Panel ────────────────────────────────────────────────────────── */}
      <div
        ref={panelRef}
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
        style={{ backgroundColor: COLORS.cream, color: COLORS.ink }}
        className={`fixed inset-0 z-[1001] flex flex-col transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        {/* Top bar — close button */}
        <div className="flex items-center justify-end px-5 pt-5 sm:px-6 sm:pt-6">
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close navigation menu"
            style={{ color: COLORS.ink }}
            className="group inline-flex h-11 w-11 items-center justify-center transition hover:opacity-70"
          >
            <span className="sr-only">Close</span>
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              aria-hidden
              className="stroke-current"
            >
              <path
                d="M6 6 L18 18 M18 6 L6 18"
                strokeWidth="1.25"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </button>
        </div>

        {/* Logo with rose hairline divider */}
        <div className="flex flex-col items-center px-6 pb-8">
          <Logo />
          <span
            aria-hidden
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(216,162,154,0) 0%, ${COLORS.rose} 50%, rgba(216,162,154,0) 100%)`,
            }}
            className="mt-6 block h-px w-16"
          />
        </div>

        {/* Nav links — large, centered, staggered */}
        <nav
          aria-label="Mobile primary"
          className="flex flex-1 flex-col items-center justify-center gap-2 px-6"
        >
          <ul className="flex w-full max-w-sm flex-col items-stretch">
            {(() => {
              // Flatten nav into render rows so staggered transitionDelay works
              // across both top-level items and dropdown children.
              const rows = [];
              navItems.forEach((item) => {
                if (item.children?.length) {
                  rows.push({ kind: "section", label: item.label });
                  item.children.forEach((child) =>
                    rows.push({ kind: "link", ...child })
                  );
                } else {
                  rows.push({ kind: "link", ...item });
                }
              });

              return rows.map((row, i) => {
                if (row.kind === "section") {
                  return (
                    <li key={`section-${row.label}`}>
                      <div
                        style={{
                          color: COLORS.clay,
                          letterSpacing: "0.28em",
                          transitionDelay: open ? `${260 + i * 70}ms` : "0ms",
                        }}
                        className={`felinda-sans flex min-h-[40px] items-center justify-center pt-4 text-[11px] uppercase transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          open
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                        }`}
                      >
                        {row.label}
                      </div>
                    </li>
                  );
                }

                const isActive = row.href === activeHref;
                return (
                  <li key={row.label}>
                    <Link
                      href={row.href}
                      onClick={close}
                      aria-current={isActive ? "page" : undefined}
                      style={{
                        color: isActive ? COLORS.rose : COLORS.ink,
                        transitionDelay: open ? `${260 + i * 70}ms` : "0ms",
                      }}
                      className={`felinda-serif group flex min-h-[56px] items-center justify-center px-4 py-3 text-3xl font-light tracking-[-0.005em] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-4xl ${
                        open
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      } hover:!text-[var(--rose,#D8A29A)] focus:!text-[var(--rose,#D8A29A)]`}
                    >
                      <span className="relative">
                        {row.label}
                        <span
                          aria-hidden
                          style={{ backgroundColor: COLORS.rose }}
                          className={`absolute -bottom-1 left-1/2 h-px -translate-x-1/2 transition-all duration-500 ${
                            isActive
                              ? "w-8 opacity-100"
                              : "w-0 opacity-0 group-hover:w-8 group-hover:opacity-100 group-focus:w-8 group-focus:opacity-100"
                          }`}
                        />
                      </span>
                    </Link>
                  </li>
                );
              });
            })()}
          </ul>
        </nav>

        {/* CTA + social icons */}
        <div className="px-6 pb-10 pt-4 sm:pb-12">
          <div
            className={`flex flex-col items-center gap-7 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: open
                ? `${260 + navItems.length * 70 + 60}ms`
                : "0ms",
            }}
          >
            <Link
              href={ctaHref}
              onClick={close}
              style={{ backgroundColor: COLORS.rose, color: COLORS.white }}
              className="felinda-sans inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-full px-8 py-4 text-[12px] font-medium uppercase tracking-[0.28em] shadow-[0_10px_30px_rgba(216,162,154,0.35)] transition hover:opacity-90 focus:opacity-90"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </Link>

            {/* Social icons — Facebook & Instagram */}
            <div className="flex flex-col items-center gap-3">
              <span
                className="felinda-sans text-[11px] uppercase"
                style={{ color: COLORS.clay, letterSpacing: "0.28em" }}
              >
                Follow
              </span>
              <ul className="flex items-center gap-3">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={close}
                      aria-label={label}
                      style={{
                        color: COLORS.ink,
                        borderColor: COLORS.line,
                      }}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border bg-white transition hover:!text-white hover:!border-transparent"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = COLORS.rose;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = COLORS.white;
                      }}
                    >
                      <Icon />
                      <span className="sr-only">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* ── Hamburger trigger (stays inside the header) ─────────────────── */}
      <button
        ref={triggerRef}
        type="button"
        onClick={toggle}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        style={{ color: COLORS.ink }}
        className="group relative inline-flex h-11 w-11 items-center justify-center transition hover:opacity-70 lg:hidden"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className="flex h-3 w-6 flex-col justify-between" aria-hidden>
          <span className="h-px w-full bg-current" />
          <span className="h-px w-full bg-current" />
          <span className="h-px w-full bg-current" />
        </span>
      </button>

      {/* Overlay rendered at document.body — escapes header containing block */}
      {mounted ? createPortal(overlayUI, document.body) : null}
    </>
  );
}
