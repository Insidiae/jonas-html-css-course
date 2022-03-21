import * as React from "react";
import styled from "styled-components/macro";

import type { StyledComponentProps } from "styled-components";

interface ButtonStyles extends React.CSSProperties {
  "--font-size"?: string;
  "--padding"?: string;
}

const createButtonVariants = <
  ButtonVariantsType extends Record<string, ButtonStyles>
>(
  buttonVariants: ButtonVariantsType
) => buttonVariants;

const buttonVariants = createButtonVariants({
  small: {
    "--font-size": "14px",
    "--padding": "8px 12px",
  },
  large: {
    "--font-size": "18px",
    "--padding": "16px 32px",
  },
});

interface BaseButtonProps {
  size?: keyof typeof buttonVariants;
  styles?: ButtonStyles;
}

//TODO: Find a way to extend Styled Component and/or React props
interface ButtonProps {
  //! FIX THIS!
  children?: any;
  as?: any;
  href?: any;

  size?: keyof typeof buttonVariants;
  style?: ButtonStyles;
}

export default function Button({
  size = "small",
  style,
  ...props
}: ButtonProps) {
  const variantStyles = buttonVariants[size];
  return <BaseButton {...props} style={{ ...variantStyles, ...style }} />;
}

const BaseButton = styled.a<ButtonProps>`
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
  &:focus {
    outline-offset: 2px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }

  font-size: var(--font-size);
  padding: var(--padding);
`;
