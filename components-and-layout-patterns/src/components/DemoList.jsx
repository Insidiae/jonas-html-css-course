import * as React from "react";
import { Link } from "react-router-dom";

export default function DemoList() {
  return (
    <div>
      Component Demos
      <ol>
        <li>
          <Link to="/demos/accordion">Accordion</Link>
        </li>
      </ol>
    </div>
  );
}
