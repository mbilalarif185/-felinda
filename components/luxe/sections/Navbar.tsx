"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

import { navItems } from "@/lib/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [creationsOpen, setCreationsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-luxeGold/15 bg-luxeBlack/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="font-serif text-2xl tracking-[0.14em] text-luxeGoldSoft"
          aria-label="Auréa home"
        >
          AURÉA
        </Link>

        {/* Desktop nav — real routes, so every page stays reachable */}
        <ul className="hidden items-center gap-9 lg:flex">
          {navItems
            .filter((item) => item.label !== "Home")
            .map((item) =>
              item.children ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setCreationsOpen(true)}
                  onMouseLeave={() => setCreationsOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setCreationsOpen((v) => !v)}
                    aria-expanded={creationsOpen}
                    className="group flex items-center gap-1.5 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-luxeSmoke transition-colors hover:text-luxeGoldSoft"
                  >
                    {item.label}
                    <FiChevronDown
                      size={13}
                      className={`transition-transform duration-300 ${creationsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {creationsOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 overflow-hidden rounded-2xl border border-luxeGold/15 bg-luxeCharcoal/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md"
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block rounded-xl px-4 py-2.5 font-sans text-[0.78rem] tracking-wide text-luxeSmoke transition-colors hover:bg-luxeGold/10 hover:text-luxeGoldSoft"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group relative font-sans text-[0.72rem] uppercase tracking-[0.2em] text-luxeSmoke transition-colors hover:text-luxeGoldSoft"
                  >
                    {item.label}
                    <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-luxeGold transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              )
            )}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full border border-luxeGold/40 px-5 py-2.5 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-luxeGoldSoft transition-colors hover:border-luxeGold hover:bg-luxeGold hover:text-luxeBlack lg:inline-block"
        >
          Book a Viewing
        </Link>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="text-luxeGoldSoft lg:hidden"
        >
          <HiMenuAlt4 size={26} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-luxeBlack/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-serif text-2xl tracking-[0.14em] text-luxeGoldSoft">
                AURÉA
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-luxeGoldSoft"
              >
                <HiX size={26} />
              </button>
            </div>

            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } } }}
              className="flex flex-col items-center gap-6 px-6 pb-16 pt-6 text-center"
            >
              {navItems
                .filter((item) => item.label !== "Home")
                .map((item) => (
                  <motion.li
                    key={item.label}
                    variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                    className="w-full"
                  >
                    {item.children ? (
                      <div>
                        <div className="font-serif text-2xl text-luxeGoldSoft">
                          {item.label}
                        </div>
                        <div className="mt-3 flex flex-col items-center gap-2.5">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="font-sans text-[0.9rem] tracking-wide text-luxeSmoke"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="font-serif text-2xl text-luxeGoldSoft"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                ))}

              <motion.li
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-block rounded-full border border-luxeGold/40 px-6 py-3 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-luxeGoldSoft"
                >
                  Book a Viewing
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
