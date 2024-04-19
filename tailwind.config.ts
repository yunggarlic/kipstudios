import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      desktop: "1024px",
    },
    extend: {
      height: {
        "screen-minus-nav": "calc(100vh - 6rem)",
      },
      minHeight: {
        "screen-minus-nav-footer": "calc(100vh - 6rem - 205px)",
        "screen-minus-nav": "calc(100vh - 6rem)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "checkerboard-default":
          "linear-gradient(45deg, var(--checkerboard-light) 25%, transparent 25%), linear-gradient(-45deg, var(--checkerboard-light) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--checkerboard-light) 75%), linear-gradient(-45deg, transparent 75%, var(--checkerboard-light) 75%);",
        "checkerboard-yellow":
          "linear-gradient(45deg, var(--checkerboard-yellow) 25%, transparent 25%), linear-gradient(-45deg, var(--checkerboard-yellow) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--checkerboard-yellow) 75%), linear-gradient(-45deg, transparent 75%, var(--checkerboard-yellow) 75%);",
      },
      backgroundSize: {
        "checkerboard-size-default":
          "var(--checkerboard-size) var(--checkerboard-size)",
      },
      backgroundPosition: {
        "checkerboard-position-default": "var(--checkerboard-position)",
      },
    },
  },
  plugins: [],
};
export default config;
