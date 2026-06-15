import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        studio: {
          canvas: "#0A0D0B",
          surface: "#101512",
          elevated: "#151B17",
          subtle: "#1B221D",
          paper: "#E9E4DB",
          paperSoft: "#DCD5CA",
          text: "#F2EEE7",
          textSoft: "#D0CBC2",
          muted: "#9E9B94",
          faint: "#747870",
          green: "#708A76",
          greenBright: "#91A796",
          greenDeep: "#33473A",
          greenInk: "#0C120E",
          line: "rgba(242, 238, 231, 0.13)",
          lineStrong: "rgba(242, 238, 231, 0.24)",
          paperText: "#171A17",
          paperMuted: "#62675F",
          paperLine: "rgba(23, 26, 23, 0.16)",
          danger: "#C77970",
        },
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
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        editorial: ["var(--font-editorial)", "Georgia", "serif"],
      },
      borderRadius: {
        studioSm: "4px",
        studioMd: "8px",
        studioLg: "14px",
      },
    },
  },
  plugins: [],
};

export default config;
