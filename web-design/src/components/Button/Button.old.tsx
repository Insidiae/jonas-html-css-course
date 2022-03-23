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
    font-size: 14px;
    padding: 8px 12px;
  `,
  large: css`
    font-size: 18px;
    padding: 16px 32px;
  `,
});

interface ButtonProps {
  size?: keyof typeof buttonSizes;
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
  ${(props) => (props.size ? buttonSizes[props.size] : buttonSizes["small"])}
`;

export default Button;
