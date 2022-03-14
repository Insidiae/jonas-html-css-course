import * as React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DemoList from "./components/DemoList";

// Components
import AccordionDemo from "./pages/AccordionDemo";
import CarouselDemo from "./pages/CarouselDemo";
import TableDemo from "./pages/TableDemo";
import PaginationDemo from "./pages/PaginationDemo";

// Layout Patterns
import Hero from "./layout/Hero";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inter", sans-serif;
    color: #343a40;
    line-height: 1;
  }
`;

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="demos">
              <Route index element={<DemoList />} />
              <Route path="accordion" element={<AccordionDemo />} />
              <Route path="carousel" element={<CarouselDemo />} />
              <Route path="table" element={<TableDemo />} />
              <Route path="pagination" element={<PaginationDemo />} />
              <Route path="hero" element={<Hero />} />
            </Route>
          </Route>
        </Routes>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
