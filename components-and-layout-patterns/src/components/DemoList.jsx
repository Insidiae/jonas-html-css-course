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
      </ol>
    </div>
  );
}
