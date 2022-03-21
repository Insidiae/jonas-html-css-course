interface ChairDetails {
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
        text: "Leisure and relaxing",
      },
      {
        text: "Comfortable for 4h",
      },
      {
        text: "Vegan leather",
      },
      {
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
        text: "Work",
      },
      {
        text: "Comfortable for 8h",
      },
      {
        text: "Vegan leather",
      },
      {
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
        text: "Leisure and relaxing",
      },
      {
        text: "Comfortable all day!",
      },
      {
        text: "Organic cotton",
      },
      {
        text: "Weighs 80 kg",
      },
    ],
  },
];
