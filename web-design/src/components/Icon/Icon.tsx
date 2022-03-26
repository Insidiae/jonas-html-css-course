import * as React from "react";
import styled from "styled-components/macro";
import { icons } from "./types";

import type { IconProps, IconWrapperProps } from "./types";

const Icon = ({ id, color, size, strokeWidth = 2, ...props }: IconProps) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...props}>
      <Component height={size} width={size} stroke={color} />
    </Wrapper>
  );
};

const Wrapper = styled.div<IconWrapperProps>`
  & > svg {
    display: block;
    stroke-width: ${(p) =>
      p.strokeWidth !== undefined ? p.strokeWidth + "px" : undefined};
  }
`;

export default Icon;
