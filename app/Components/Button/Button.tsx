"use client";
import React from "react";
import styled from "styled-components";

interface ButtonProps {
  name: string;
  icon?: React.ReactNode;
  background?: string;
  color?: string;
  border?: string;
  link?: string;
}
export default function Button({
  name,
  icon,
  background = "var(--color-bg)",
  color,
  border,
  link,
}: ButtonProps) {
  return (
    <>
      <ButtonStyled
        style={{
          background: background,
          color: color,
          border: border,
        }}
        href={link}
      >
        {icon && icon}
        {name}
      </ButtonStyled>
    </>
  );
}
const ButtonStyled = styled.a`
  padding: 0.8rem 2rem;
  border-radius: 30px;
  border: 2px solid var(--color-border);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 1rem;
  &:hover {
    background-color: var(--color-border);
    color: white;
  }
`;
