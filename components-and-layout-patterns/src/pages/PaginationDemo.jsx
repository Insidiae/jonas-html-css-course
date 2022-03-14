import * as React from "react";
import styled from "styled-components";

import Pagination from "../components/Pagination";

export default function PaginationDemo() {
  return (
    <Wrapper>
      <Pagination />
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
