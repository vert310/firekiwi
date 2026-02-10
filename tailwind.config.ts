import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          lime: "#E6FF08",
          "lime-button": "#CAE53C",
        },
        border: {
          dark: "#141414",
          "dark-hover": "#1C1C1C",
        },
        text: {
          muted: "#9AA0A6",
        },
      },
      borderRadius: {
        pill: "9999px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(230, 255, 8, 0.3)",
        "glow-hover": "0 0 30px rgba(230, 255, 8, 0.5)",
        card: "0 4px 20px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;




