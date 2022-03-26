//* My old way of doing this kinda stuff
import * as React from "react";
import styled, { css } from "styled-components/macro";

// This seems to be the return type of that `css` tagged template literal
import type { FlattenSimpleInterpolation } from "styled-components";

const createButtonSizes = <
  ButtonSizesType extends Record<string, FlattenSimpleInterpolation>
>(
  buttonSizes: ButtonSizesType
) => buttonSizes;

const buttonSizes = createButtonSizes({
  small: css`
    font-size: ${14 / 16}rem;
    padding: 8px 12px;
  `,
  large: css`
    font-size: ${18 / 16}rem;
    padding: 16px 32px;
  `,
});

interface ButtonProps {
  size?: keyof typeof buttonSizes;
}

const BaseButton = styled.button`
  display: inline-block;
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

  /* 
    Any large value would work here.
    It just need to be bigger than the button's height!
  */
  border-radius: 100px;
  background-color: var(--color-primary-1000);
  color: var(--color-white);
  font-weight: 500;
  text-transform: uppercase;

  &:hover,
  &:active {
    background-color: var(--color-primary-900);
  }
`;

const Button = styled(BaseButton)<ButtonProps>`
  /* 
    ${(props) => (props.size ? buttonSizes[props.size] : buttonSizes["small"])}
  */
  /* OR: */
  ${({ size = "small" }) => buttonSizes[size]}
`;

export default Button;
