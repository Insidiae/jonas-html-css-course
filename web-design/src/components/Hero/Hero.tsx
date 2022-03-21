import * as React from "react";
import styled from "styled-components/macro";

import Button from "../Button";

export default function Hero() {
  return (
    <Wrapper>
      <HeroTextBox>
        <Title>We design and build better chairs, for a better life</Title>
        <HeroText>
          In a small shop in the heart of Lisbon, we spend our days relentlessly
          perfecting the chair. The result is a perfect blend of beauty and
          comfort, that will have a lasting impact on your health.
        </HeroText>
        <Button as="a" size="large" href="#">
          Shop chairs
        </Button>
      </HeroTextBox>
      <HeroImage src="img/hero.jpg" alt="A sample of our custom-built chairs" />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  margin-top: 48px;
  margin-bottom: 48px; ;
`;

const HeroTextBox = styled.div`
  align-self: center;
`;

const Title = styled.h1`
  margin-bottom: 24px;
`;

const HeroText = styled.p`
  margin-bottom: 24px;
`;

const HeroImage = styled.img`
  width: 100%;
`;
