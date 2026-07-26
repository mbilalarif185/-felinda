"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { FiCheck } from "react-icons/fi";

import Reveal from "@/components/luxe/ui/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // Front-end demo only — wire to your ESP / /api/contact when ready.
    setStatus("done");
  }

  return (
    <section className="relative bg-luxeCharcoal px-6 py-28 lg:px-10">
      <Reveal className="mx-auto max-w-3xl">
        <div className="luxe-glass overflow-hidden rounded-[1.8rem] px-8 py-14 text-center lg:px-16">
          <div className="luxe-rule mx-auto max-w-[7rem]">
            <span className="font-sans text-[0.6rem] uppercase tracking-[0.32em] text-luxeGold">
              The List
            </span>
          </div>
          <h2 className="mt-6 font-serif text-3xl font-light text-white sm:text-4xl">
            First look at new pieces
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-sans text-[15px] leading-7 text-luxeSmoke">
            Join the list for early access to collections, private viewings, and
            the occasional note from the bench. No noise — just the good things.
          </p>

          <div className="mt-9">
            <AnimatePresence mode="wait">
              {status === "idle" ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
                >
                  <label htmlFor="nl-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="nl-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="peer flex-1 rounded-full border border-luxeGold/25 bg-luxeBlack/50 px-6 py-3.5 font-sans text-sm text-white placeholder:text-luxeSmoke/50 transition-colors focus:border-luxeGold focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-gradient-to-r from-luxeGoldDeep via-luxeGold to-luxeGoldSoft px-7 py-3.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-luxeBlack transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxeGold focus-visible:ring-offset-2 focus-visible:ring-offset-luxeCharcoal"
                  >
                    Subscribe
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mx-auto flex max-w-md flex-col items-center gap-3"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                    className="grid h-14 w-14 place-items-center rounded-full bg-luxeGold text-luxeBlack"
                  >
                    <FiCheck size={26} />
                  </motion.span>
                  <p className="font-serif text-xl text-white">You&rsquo;re on the list</p>
                  <p className="font-sans text-[13px] text-luxeSmoke">
                    Watch your inbox — the next collection lands there first.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
