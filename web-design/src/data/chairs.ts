import type { IconType } from "../components/Icon/types";

interface ChairDetails {
  icon: IconType;
  text: string;
}

export interface Chair {
  name: string;
  imageSrc: string;
  imageAlt: string;
  // Just imagine this number is already formatted lmao
  price: number;
  details: Array<ChairDetails>;
}

export const chairs: Array<Chair> = [
  {
    name: "The Laid Back",
    imageSrc: "img/chair-1.jpg",
    imageAlt: "Photo of The Laid Back Chair",
    price: 250,
    details: [
      {
        icon: "sparkles",
        text: "Leisure and relaxing",
      },
      {
        icon: "clock",
        text: "Comfortable for 4h",
      },
      {
        icon: "globe",
        text: "Vegan leather",
      },
      {
        icon: "cube",
        text: "Weighs 16 kg",
      },
    ],
  },
  {
    name: "The Worker Bee",
    imageSrc: "img/chair-2.jpg",
    imageAlt: "Photo of The Worker Bee Chair",
    price: 525,
    details: [
      {
        icon: "sparkles",
        text: "Work",
      },
      {
        icon: "clock",
        text: "Comfortable for 8h",
      },
      {
        icon: "globe",
        text: "Vegan leather",
      },
      {
        icon: "cube",
        text: "Weighs 22 kg",
      },
    ],
  },
  {
    name: "The Chair 4/2",
    imageSrc: "img/chair-3.jpg",
    imageAlt: "Photo of The Chair 4/2",
    price: 1450,
    details: [
      {
        icon: "sparkles",
        text: "Leisure and relaxing",
      },
      {
        icon: "clock",
        text: "Comfortable all day!",
      },
      {
        icon: "globe",
        text: "Organic cotton",
      },
      {
        icon: "cube",
        text: "Weighs 80 kg",
      },
    ],
  },
];
