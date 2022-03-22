import * as React from "react";
import styled from "styled-components/macro";

import type { Chair } from "../../data/chairs";
import Button from "../Button";

export default function ChairCard({ chair }: { chair: Chair }) {
  return (
    <Wrapper>
      <ChairImage src={chair.imageSrc} alt={chair.imageAlt} />
      <ChairWrapper>
        <ChairName>{chair.name}</ChairName>
        <ChairDetails>
          {chair.details.map((chairDetail) => (
            <ChairDetailsItem key={chairDetail.text}>
              <span>{chairDetail.text}</span>
            </ChairDetailsItem>
          ))}
        </ChairDetails>
        <ChairPriceWrapper>
          {/* Just imagine this number is already formatted lmao */}
          <strong>{chair.price}€</strong>
          <Button>Add to cart</Button>
        </ChairPriceWrapper>
      </ChairWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.figure``;

const ChairImage = styled.img`
  width: 100%;
`;

const ChairWrapper = styled.div`
  padding: 24px;
`;

const ChairName = styled.h3`
  margin-bottom: 24px;
`;

const ChairDetails = styled.ul`
  list-style: none;
  margin-bottom: 24px;
`;

const ChairDetailsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ChairPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
