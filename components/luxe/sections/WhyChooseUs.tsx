"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GiCutDiamond, GiAnvil } from "react-icons/gi";
import { PiLeafFill } from "react-icons/pi";
import { FaShieldAlt } from "react-icons/fa";
import type { IconType } from "react-icons";

import SectionHeading from "@/components/luxe/ui/SectionHeading";
import { features, type Feature } from "@/lib/luxe/content";

const ICONS: Record<Feature["icon"], IconType> = {
  gem: GiCutDiamond,
  hammer: GiAnvil,
  leaf: PiLeafFill,
  shield: FaShieldAlt,
};

export default function WhyChooseUs() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-luxeBlack to-luxeCharcoal px-6 py-28 lg:px-10">
      {/* Ambient gold haze */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-luxeGold/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Luxury with a conscience"
          subtitle="The promises behind every piece that leaves the atelier."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="luxe-glass group rounded-2xl p-7"
              >
                <motion.div
                  animate={reduce ? undefined : { y: [0, -7, 0] }}
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.35,
                  }}
                  className="grid h-14 w-14 place-items-center rounded-full border border-luxeGold/30 bg-luxeGold/5 text-luxeGold"
                >
                  <Icon size={24} />
                </motion.div>
                <h3 className="mt-6 font-serif text-xl text-white">{f.title}</h3>
                <p className="mt-3 font-sans text-[14px] leading-7 text-luxeSmoke">
                  {f.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
