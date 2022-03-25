//* Trying to implement the CSS Variables trick from #CSSforJS
import * as React from "react";
import styled from "styled-components/macro";

interface ButtonStyles extends React.CSSProperties {
  "--font-size"?: string;
  "--padding"?: string;
}

const createButtonSizes = <
  ButtonSizesType extends Record<string, ButtonStyles>
>(
  buttonSizes: ButtonSizesType
) => buttonSizes;

const buttonSizes = createButtonSizes({
  small: {
    "--font-size": `${14 / 16}rem`,
    "--padding": "8px 12px",
  },
  large: {
    "--font-size": `${18 / 16}rem`,
    "--padding": "16px 32px",
  },
});

//TODO: Find a way to properly extend Styled Component props
interface ButtonProps {
  //? This works, but still feels kinda iffy
  // children?: any;
  // href?: any;
  as?: string | React.ComponentType<any>;

  size?: keyof typeof buttonSizes;
  style?: ButtonStyles;
}

export default function Button({
  size = "small",
  style,
  ...props
}: React.ComponentPropsWithoutRef<"button" | "a"> & ButtonProps) {
  const sizeStyles = buttonSizes[size];
  return <BaseButton style={{ ...sizeStyles, ...style }} {...props} />;
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
