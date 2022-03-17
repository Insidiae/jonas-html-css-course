import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import logo from "./logo.svg";
import "./App.css";

import MainPage from "./components/MainPage";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <MainPage />
    </>
  );
}

export default App;
