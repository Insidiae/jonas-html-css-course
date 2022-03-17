import * as React from "react";
import styled from "styled-components";

export default function FlexboxDemo() {
  return (
    <Wrapper>
      <Box style={{ "--box-color": "blueviolet", alignSelf: "flex-start" }}>
        HTML
      </Box>
      <Box style={{ "--box-color": "orangered" }}>and</Box>
      <Box style={{ "--box-color": "green", height: "150px" }}>CSS</Box>
      <Box style={{ "--box-color": "goldenrod" }}>are</Box>
      <Box
        style={{
          "--box-color": "palevioletred",
          alignSelf: "stretch",
          order: 1,
        }}
      >
        amazing
      </Box>
      {/* <Box style={{ "--box-color": "steelblue", order: -1 }}>languages</Box>
      <Box style={{ "--box-color": "yellow" }}>to</Box>
      <Box style={{ "--box-color": "crimson" }}>learn</Box> */}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  /* STARTER */
  font-family: sans-serif;
  background-color: #ddd;
  font-size: 32px;
  margin: 40px;

  /* FLEXBOX */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

interface BoxProps {
  style: { "--box-color": string };
}

const Box = styled.div<BoxProps>`
  background-color: var(--box-color);

  /*
    DEFAULTS:
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
  */

  /* flex-basis: 200px; */
  /* flex-shrink: 0; */
  /* flex: 0 0 200px; */

  /* flex-grow: 1; */
  flex: 1;
`;
