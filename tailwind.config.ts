import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#075E54",
        secondary: "#25D366",
        accent: "#DCF8C6",
      },
    },
  },
  plugins: [],
};

export default config;
