import * as React from "react";
import { Link } from "react-router-dom";

export default function DemoList() {
  return (
    <div>
      <p>Component Demos</p>
      <ol>
        <li>
          <Link to="/demos/accordion">Accordion</Link>
        </li>
        <li>
          <Link to="/demos/carousel">Carousel</Link>
        </li>
        <li>
          <Link to="/demos/table">Table</Link>
        </li>
        <li>
          <Link to="/demos/pagination">Pagination</Link>
        </li>
      </ol>
      <p>Layout Demos</p>
      <ol>
        <li>
          <Link to="/demos/hero">Hero Section</Link>
        </li>
        <li>
          <Link to="/demos/app-layout">App Layout</Link>
        </li>
      </ol>
    </div>
  );
}
