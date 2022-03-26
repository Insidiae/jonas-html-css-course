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
              <Icon
                id={chairDetail.icon}
                color={COLORS.primary[1000]}
                size={24}
              />
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
  border-radius: 12px;
  box-shadow: 0 20px 30px 0 hsl(0deg 0% 0% / 0.07);
`;

const ChairImage = styled.img`
  width: 100%;
  border-radius: 12px 12px 0 0;
`;

const ChairWrapper = styled.div`
  padding: 32px;
`;

const ChairName = styled.h3`
  margin-bottom: 24px;
  font-size: ${20 / 16}rem;
`;

const ChairDetails = styled.ul`
  list-style: none;
  margin-bottom: 48px;
`;

const ChairDetailsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ChairPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${20 / 16}rem;
`;
