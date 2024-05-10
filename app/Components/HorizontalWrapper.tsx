"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HorizontalWrapper({
  children,
  direction,
  height,
}: any) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const xTransfrom = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 0, direction]
  );
  return (
    <div ref={scrollRef}>
      <motion.div
        style={{
          height: height,
          zIndex: 6,
          position: "relative",
          translateX: xTransfrom,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
