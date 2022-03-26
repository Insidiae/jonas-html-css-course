import * as React from "react";
import styled from "styled-components/macro";

import Button from "../Button";
import Icon from "../Icon";

import { COLORS } from "../../constants";

import type { Chair } from "../../data/chairs";

export default function ChairCard({ chair }: { chair: Chair }) {
  return (
    <Wrapper>
      <ChairImage src={chair.imageSrc} alt={chair.imageAlt} />
      <ChairWrapper>
        <ChairName>{chair.name}</ChairName>
        <ChairDetails>
          {chair.details.map((chairDetail) => (
            <ChairDetailsItem key={chairDetail.text}>
              <Icon id={chairDetail.icon} color={COLORS.primary} size={24} />
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

const Wrapper = styled.figure`
  box-shadow: 0 20px 30px 0 hsl(0deg 0% 0% / 0.07);
`;

const ChairImage = styled.img`
  width: 100%;
`;

const ChairWrapper = styled.div`
  padding: 24px;
`;

const ChairName = styled.h3`
  margin-bottom: 24px;
  font-size: ${20 / 16}rem;
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
  font-size: ${20 / 16}rem;
`;
