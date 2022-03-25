import * as React from "react";
import styled from "styled-components/macro";

export default function Footer() {
  return (
    <Wrapper>
      Copyright &copy; 2027 by Jonas Schmedtmann. Part of "Build Responsive
      Real-World Websites with HTML and CSS" online course. Use for learning
      purposes only.
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin-bottom: 48px;
  font-size: ${14 / 16}rem;
`;
