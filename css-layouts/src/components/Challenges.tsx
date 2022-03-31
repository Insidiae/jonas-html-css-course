import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Challenges() {
  return (
    <Wrapper>
      <h1>CSS Layout Challenges</h1>
      <ol>
        <li>
          <Link to="float">Float</Link>
        </li>
        <li>
          <Link to="flexbox">Flexbox</Link>
        </li>
        <li>
          <Link to="grid">Grid</Link>
        </li>
      </ol>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;
