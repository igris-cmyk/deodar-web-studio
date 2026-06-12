import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        deodar: {
          ink: "#0F1613",
          surface: "#17211C",
          surface2: "#1D2A23",
          cream: "#F4EFE6",
          muted: "#B8B0A3",
          gold: "#B88746",
          accent: "#2F5D46",
          line: "rgba(244, 239, 230, 0.12)",
        },
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.28)",
        lift: "0 18px 40px rgba(0, 0, 0, 0.22)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
