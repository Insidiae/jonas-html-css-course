import * as React from "react";
import logo from "../logo.svg";
import "../App.css";
import DemoList from "../components/DemoList";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <DemoList />
      </header>
    </div>
  );
}
