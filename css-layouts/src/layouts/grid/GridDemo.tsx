import * as React from "react";
import styled from "styled-components";

export default function GridDemo() {
  return (
    <Wrapper>
      <Container1>
        <Box style={{ "--box-color": "blueviolet" }}>HTML</Box>
        <Box
          style={{
            "--box-color": "orangered",
            gridColumn: "1 / -1",
            gridRow: 2,
          }}
        >
          and
        </Box>
        <Box style={{ "--box-color": "green", height: "150px" }}>CSS</Box>
        <Box style={{ "--box-color": "goldenrod" }}>are</Box>
        <Box style={{ "--box-color": "palevioletred" }}>amazing</Box>
        <Box
          style={{
            "--box-color": "steelblue",
            // gridRow: "3 / 5",
          }}
        >
          languages
        </Box>
        {/* <Box style={{ "--box-color": "yellow" }}>to</Box> */}
        <Box
          style={{
            "--box-color": "crimson",
            gridColumn: "2 / 3",
            gridRow: 1 / 2,
          }}
        >
          learn
        </Box>
      </Container1>
      <Container2>
        <Box style={{ "--box-color": "blueviolet" }}>(1)</Box>
        {/* <Box
          style={{
            "--box-color": "orangered",
            gridColumn: "1 / -1",
            gridRow: 2,
          }}
        >
          and
        </Box> */}
        <Box
          style={{
            "--box-color": "green",
            height: "150px",
            alignSelf: "center",
            justifySelf: "center",
          }}
        >
          (3)
        </Box>
        <Box style={{ "--box-color": "goldenrod" }}>(4)</Box>
        <Box style={{ "--box-color": "palevioletred" }}>(5)</Box>
        <Box style={{ "--box-color": "steelblue" }}>(6)</Box>
        <Box style={{ "--box-color": "yellow" }}>(7)</Box>
      </Container2>
    </Wrapper>
  );
}

const Wrapper = styled.main``;

const Container1 = styled.div`
  /* STARTER */
  font-family: sans-serif;
  background-color: #ddd;
  font-size: 32px;
  margin: 40px;

  /* CSS GRID */
  display: grid;
  /* grid-template-columns: 200px 200px 1fr 1fr; */
  /* grid-template-rows: 300px 200px; */
  /* grid-template-columns: 1fr 1fr 1fr auto; */

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  /* height: 500px; */

  /* column-gap: 20px;
  row-gap: 40px; */
  gap: 40px 20px;

  /* TEMP */
  display: none;
`;

const Container2 = styled.div`
  /* STARTER */
  font-family: sans-serif;
  background-color: black;
  font-size: 32px;
  margin: 40px;

  /* CSS GRID */
  display: grid;
  grid-template-columns: 125px 200px 125px;
  grid-template-rows: 250px 100px;
  gap: 50px;

  /* Aligning tracks inside container: distribute empty space */
  justify-content: center;
  /* justify-content: space-between; */
  align-content: center;

  /* Aligning items INSIDE cells: moving items around inside cells */
  align-items: end;
  justify-items: end;

  /* TEMP */
  /* display: none; */
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
