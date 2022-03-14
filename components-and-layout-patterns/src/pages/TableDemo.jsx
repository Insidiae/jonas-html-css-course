import * as React from "react";
import styled from "styled-components";

import Table from "../components/Table";

export const tableData = [
  {
    name: "The Laid Back",
    details: {
      width: "80cm",
      height: "100cm",
      depth: "70cm",
      weight: "16kg",
    },
  },
  {
    name: "The Worker Bee",
    details: {
      width: "60cm",
      height: "110cm",
      depth: "65cm",
      weight: "22kg",
    },
  },
  {
    name: "The Chair 4/2",
    details: {
      width: "220cm",
      height: "90cm",
      depth: "80cm",
      weight: "80kg",
    },
  },
];

export default function TableDemo() {
  return (
    <Wrapper>
      <Table title="Chair" data={tableData} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;
