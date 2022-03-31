import * as React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./components/MainPage";
import Challenges from "./components/Challenges";
import FloatChallenge from "./layouts/float/FloatChallenge";
import FlexboxDemo from "./layouts/flexbox/FlexboxDemo";
import GridDemo from "./layouts/grid/GridDemo";
import FlexboxChallenge from "./layouts/flexbox/FlexboxChallenge";
import GridChallenge from "./layouts/grid/GridChallenge";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
            <Route path="challenges">
              <Route index element={<Challenges />} />
              <Route path="float" element={<FloatChallenge />} />
              <Route path="flexbox" element={<FlexboxChallenge />} />
              <Route path="grid" element={<GridChallenge />} />
            </Route>
            <Route path="flexbox" element={<FlexboxDemo />} />
            <Route path="grid" element={<GridDemo />} />
          </Route>
        </Routes>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;

