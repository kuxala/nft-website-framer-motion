"use client";
import React, { useRef } from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const TextWrapper = ({ children }: Props) => {
  const text = useRef<HTMLDivElement>(null);
  return (
    <div ref={text}>
      <p>{children}</p>
    </div>
  );
};
export default function TextSection() {
  return (
    <>
      <TextSectionStyled>
        <TextWrapper>
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </TextWrapper>
        <TextWrapper>
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </TextWrapper>
        <TextWrapper>
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </TextWrapper>
        <TextWrapper>
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </TextWrapper>
        <TextWrapper>
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </TextWrapper>
        <TextWrapper>
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </TextWrapper>
        <TextWrapper>
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </TextWrapper>
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
