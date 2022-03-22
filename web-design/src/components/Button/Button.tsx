//* Trying to implement the CSS Variables trick from #CSSforJS
import * as React from "react";
import styled from "styled-components/macro";

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

//TODO: Find a way to properly extend Styled Component props
interface ButtonProps {
  //? This works, but still feels kinda iffy
  // children?: any;
  // href?: any;
  as?: string | React.ComponentType<any>;

  size?: keyof typeof buttonVariants;
  style?: ButtonStyles;
}

export default function Button({
  size = "small",
  style,
  ...props
}: React.ComponentPropsWithoutRef<"button" | "a"> & ButtonProps) {
  const variantStyles = buttonVariants[size];
  return <BaseButton style={{ ...variantStyles, ...style }} {...props} />;
}

const BaseButton = styled.button<ButtonProps>`
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
