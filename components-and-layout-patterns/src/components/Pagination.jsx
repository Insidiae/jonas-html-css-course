import * as React from "react";
import styled from "styled-components";
import { colors } from "../constants";

export default function Pagination() {
  return (
    <Wrapper>
      <PrevButton />
      <PageLink>1</PageLink>
      <PageLink>2</PageLink>
      <PageLink isCurrent>3</PageLink>
      <PageLink>4</PageLink>
      <PageLink>5</PageLink>
      <PageLink>6</PageLink>
      <Dots>...</Dots>
      <PageLink>23</PageLink>
      <NextButton />
    </Wrapper>
  );
}

const PrevButton = () => (
  <Button>
    <ButtonIcon
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 19l-7-7 7-7"
      />
    </ButtonIcon>
  </Button>
);

const NextButton = () => (
  <Button>
    <ButtonIcon
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </ButtonIcon>
  </Button>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  border: 1px solid ${colors.primary};
  border-radius: 50%;
  background: none;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary};
  }
`;

const ButtonIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${colors.primary};

  ${Button}:hover & {
    stroke: ${colors.white};
  }
`;

const PageLink = styled.a`
  &,
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    border-radius: 50%;
    font-size: 18px;
    background-color: ${(props) => (props.isCurrent ? colors.primary : "")};
    color: ${(props) => (props.isCurrent ? colors.white : colors.gray23)};
    text-decoration: none;

    &:hover,
    &:active {
      background-color: ${colors.primary};
      color: ${colors.white};
    }
  }
`;

const Dots = styled.span`
  color: ${colors.gray56};
`;
