//* My old way of doing this kinda stuff
import * as React from "react";
import styled, { css } from "styled-components/macro";

import type { FlattenSimpleInterpolation } from "styled-components";

const createButtonVariants = <
  ButtonVariantsType extends Record<string, FlattenSimpleInterpolation>
>(
  buttonVariants: ButtonVariantsType
) => buttonVariants;

const buttonVariants = createButtonVariants({
  small: css`
    font-size: 14px;
    padding: 8px 12px;
  `,
  large: css`
    font-size: 18px;
    padding: 16px 32px;
  `,
});

interface ButtonProps {
  size?: keyof typeof buttonVariants;
}

const BaseButton = styled.button`
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
  font: inherit;
  color: inherit;
  &:focus {
    outline-offset: 2px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const Button = styled(BaseButton)<ButtonProps>`
  ${(props) =>
    props.size ? buttonVariants[props.size] : buttonVariants["small"]}
`;

export default Button;
