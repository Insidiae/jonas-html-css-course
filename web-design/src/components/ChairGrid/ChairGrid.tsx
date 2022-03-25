import * as React from "react";
import styled from "styled-components/macro";

import ChairCard from "../ChairCard";

import { chairs } from "../../data/chairs";

export default function ChairGrid() {
  return (
    <Wrapper>
      <Title>Our bestselling chairs</Title>
      <Grid>
        {chairs.map((chair) => (
          <ChairCard key={chair.name} chair={chair} />
        ))}
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-bottom: 48px;
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
