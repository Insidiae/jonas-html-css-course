import * as React from "react";
import styled from "styled-components/macro";

import FeatureCard from "../FeatureCard";

import { features } from "../../data/features";

export default function FeatureGrid() {
  return (
    <Wrapper>
      <Title>What makes our chairs special</Title>
      <Grid>
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-bottom: 96px;
`;

const Title = styled.h2`
  margin-bottom: 48px;
  font-size: ${36 / 16}rem;
  letter-spacing: -0.5px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 80px;
`;
