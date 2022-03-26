import type { IconType } from "../components/Icon/types";

export interface Feature {
  title: string;
  text: string;
  icon: IconType;
}

export const features: Array<Feature> = [
  {
    title: "Science meets design",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus similique adipisci praesentium.",
    icon: "beaker",
  },
  {
    title: "Maximal comfort",
    text: "Reprehenderit optio placeat quasi excepturi architecto, explicabo facilis perspiciatis error maxime magnam.",
    icon: "emoji-happy",
  },
  {
    title: "Ethical and sustainable",
    text: "Deleniti recusandae quidem nesciunt, eos dolorum iure, quaerat omnis est laudantium voluptatem voluptas!",
    icon: "heart",
  },
];
