export const amenitiesContent = [
  {
    heading: "Ambient Natural Lighting",
    description:
      "Our primary space boasts year-round ambient lighting for your shoot, equipped with wall-mounted rolling paper backdrops in a rainbow of colors, vintage designer furniture, tables and chairs.",
    imgPaths: [1, 2, 3, 4, 5].map(
      (i) => `/images/studio-imgs/whiteroom/${i}.jpg`
    ),
    checkerboardColors: `bg-checkerboard-green bg-green-200`,
  },
  {
    heading: "Floor to ceiling checkerboard",
    description:
      "Our floor to ceiling checkerboard is a unique feature that you won't find anywhere else. The bold contrast and geometric pattern naturally enhances the vibrancy and energy of the scenes, making your production more engaging and memorable.",
    imgPaths: [1, 2, 3].map((i) => `/images/studio-imgs/checkerboard/${i}.jpg`),
    checkerboardColors: `bg-checkerboard-red bg-red-200`,
  },
  {
    heading: "Boudoir Suite",
    description:
      "A 12 foot vaulted ceiling themed boudoir suite with a rare queen-sized circular bed, vintage vanity, and a full-length mirror, perfect for intimate portraits and lifestyle shoots.",
    imgPaths: [1, 2].map((i) => `/images/studio-imgs/boudoir/${i}.jpg`),
    checkerboardColors: `bg-checkerboard-blue bg-blue-200`,
  },
];
