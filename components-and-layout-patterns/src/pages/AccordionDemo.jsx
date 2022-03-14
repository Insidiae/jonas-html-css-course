import * as React from "react";

import { Accordion, AccordionItem } from "../components/Accordion";

export default function AccordionDemo() {
  return (
    <Accordion>
      <AccordionItem title="Where are these chairs assembled?">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          dolor at sequi obcaecati cupiditate. Voluptates repellendus cupiditate
          aperiam! Incidunt amet quo neque.
        </p>
      </AccordionItem>
      <AccordionItem title="How long do I have to return my chair?">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          dolor at sequi obcaecati cupiditate. Voluptates repellendus cupiditate
          aperiam! Incidunt amet quo neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quaerat
          quia, atque, distinctio quos quas, ad velit hic cupiditate dignissimos
          architecto qui voluptate? Nihil explicabo tempora quae quidem, hic
          repudiandae.
        </p>
      </AccordionItem>
      <AccordionItem title="Do you ship to countries outside the EU?">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          dolor at sequi obcaecati cupiditate. Voluptates repellendus cupiditate
          aperiam! Incidunt amet quo neque.
        </p>
        <ul>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          <li>Quasi accusamus corporis totam tempora suscipit ab obcaecati.</li>
          <li>Tempora, et atque officia at consequatur laborum!</li>
          <li>Repudiandae praesentium illo voluptate in, atque enim.</li>
        </ul>
      </AccordionItem>
    </Accordion>
  );
}
