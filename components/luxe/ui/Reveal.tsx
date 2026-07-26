"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale";

const OFFSET = 34;

function hidden(direction: Direction, reduce: boolean) {
  if (reduce) return { opacity: 0 };
  switch (direction) {
    case "left":
      return { opacity: 0, x: -OFFSET };
    case "right":
      return { opacity: 0, x: OFFSET };
    case "scale":
      return { opacity: 0, scale: 0.92 };
    default:
      return { opacity: 0, y: OFFSET };
  }
}

/**
 * Scroll-triggered reveal. Animates once when it enters the viewport.
 * Honors prefers-reduced-motion by fading in place with no transform.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion() ?? false;

  return (
    <motion.div
      className={className}
      initial={hidden(direction, reduce)}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Wrapper that staggers its direct <Stagger.Item> children.
 * Use for headline lines, button rows, and card grids.
 */
export function Stagger({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

Stagger.Item = function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
};
