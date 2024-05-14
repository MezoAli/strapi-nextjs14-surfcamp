import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image": "url('/public/hero-image.png')",
      },
      colors: {
        turquoise: "#14a998",
        lightBeige: "#fffbf4",
        lightBrown: "#f1e8d9",
        brown: "#d7c094",
        orange: "#ce822f",
        beige: "#d7c094",
      },
    },
  },
  plugins: [],
};
export default config;
