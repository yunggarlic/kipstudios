export const amenitiesContent = [
  {
    heading: "Ambient Natural Lighting",
    description:
      "Our primary space boasts year-round ambient lighting for your shoot and is equipped with wall-mounted rolling paper backdrops in a rainbow of colors, vintage designer furniture, tables and chairs.",
    imgPaths: [1, 2, 3, 4, 5].map(
      (i) => `/images/studio-imgs/whiteroom/${i}.webp`
    ),
    checkerboardColors: `bg-checkerboard-green bg-green-200`,
  },
  {
    heading: "Floor to ceiling checkerboard",
    description:
      "Our floor to ceiling checkerboard is a unique feature that you won't find anywhere else, naturally enhances the vibrancy of your production.",
    imgPaths: [1, 2, 3].map((i) => `/images/studio-imgs/checkerboard/${i}.webp`),
    checkerboardColors: `bg-checkerboard-red bg-red-200`,
  },
  {
    heading: "Boudoir Suite",
    description:
      "A 12 foot vaulted ceiling themed boudoir suite with a rare queen-sized circular bed, vintage vanity, and a full-length mirror, perfect for intimate portraits and lifestyle shoots.",
    imgPaths: [1, 2].map((i) => `/images/studio-imgs/boudoir/${i}.webp`),
    checkerboardColors: `bg-checkerboard-blue bg-blue-200`,
  },
];
