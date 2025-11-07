"use client";

import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import Image from "next/image";

const svgImages = [
  "/BugV4_1.svg",
  "/BugV4_3.svg",
  "/BugV4_2.svg",
  "/BugV4_4.svg",
];

export default function BugAssembleAnimation() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.3 }}
        variants={containerVariants}
        className="grid grid-cols-2 grid-rows-2 w-full aspect-video"
      >
        {svgImages.map((src, i) => (
          <motion.div
            key={i}
            variants={itemVariants(i)}
            className="relative w-full h-full flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Bug part ${i + 1}`}
                fill
                sizes=""
                className="p-0 m-0 bg-slate-200 dark:bg-slate-900"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ========================
   Animation Variants
======================== */

const containerVariants: Variants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
};

// Each SVG fades and slides into place
const itemVariants = (i: number): Variants => ({
  offscreen: { opacity: 0, y: 100 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: i * 0.2,
    },
  },
});
