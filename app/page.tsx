"use client";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import SectionLayout from "./Components/SectionLayout";
import { cards } from "./utils/Card";
import Card from "./Components/Card";
import FullPage from "./Components/FullPage";
import TextSection from "./TextSection";
import Footer from "./Components/Footer";
import HorizontalWrapper from "./Components/HorizontalWrapper";

export default function Home() {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={-1400}>
            <div className="cards">
              {cards.map((card, index): any => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.title}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>

        <FullPage />

        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={1400}>
            <div className="cards">
              {cards.map((card, index): any => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.title}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <Footer />
      </MainStyled>
    </>
  );
}

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;

  .cards {
    position: relative; // aq iyo absolute
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
  }

  .video {
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;
    iframe {
      border: none;
      width: 100%;
      height: 52rem;
    }
  }
`;
