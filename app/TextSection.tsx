"use client";
import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children?: React.ReactNode;
}

const TextWrapper = ({ children }: Props) => {
  const text = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      "#f2994a",
      "#f2994a",
      "#f2994a",
      "#f2994a",
    ]
  );

  return (
    <div ref={text}>
      <motion.p style={{ opacity, x, color: colorChange }}>{children}</motion.p>
    </div>
  );
};
export default function TextSection() {
  return (
    <>
      <TextSectionStyled>
        <TextWrapper>Why Devi's Realm?</TextWrapper>
        <TextWrapper>
          Step into a world where ancient Georgian mythology meets modern
          digital art.
        </TextWrapper>
        <TextWrapper>
          Devi's Realm is a captivating NFT collection that brings to life the
          legendary Devi
        </TextWrapper>
        <TextWrapper>
          an enigmatic and powerful spirit from Georgian folklore.
        </TextWrapper>
        <TextWrapper>
          Our unique project features 1,000 distinct NFT artworks,
        </TextWrapper>
        <TextWrapper>
          each a mesmerizing depiction of the Devi in various forms,
        </TextWrapper>
        <TextWrapper>settings, and stories.</TextWrapper>
      </TextSectionStyled>
    </>
  );
}

const TextSectionStyled = styled.section`
  p {
    font-size: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }
`;
