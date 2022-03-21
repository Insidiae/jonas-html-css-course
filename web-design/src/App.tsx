import * as React from "react";
import styled from "styled-components/macro";

import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import Testimonial from "./components/Testimonial";
import ChairGrid from "./components/ChairGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <Wrapper>
      <Hero />
      <FeatureGrid />
      <Testimonial />
      <ChairGrid />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`;

export default App;
