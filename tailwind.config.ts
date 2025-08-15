import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        smoothPulse: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.2)", opacity: "0" }, // Slight scale increase and smooth fade-out
        },
      },
      animation: {
        smoothPulse: "smoothPulse 1s ease-in-out infinite ", // Smoother animation with longer duration
      },
      colors: {
        main: {
          50: "#FCE2E2",
          200: "#FF9996",
          300: "#FF9996",
          500: "#F96864",
          700: "#D1403C",
          800: "D1403C",
        },
        secondary: {
          50: "#EDF9FF",
          100: "#C9ECFD",
          200: "#9FDDFC",
          300: "#9FDDFC",
          400: "#48BEF8",
          500: "#20B0F7",
          600: "#1B96D2",
          700: "#177DAF",
          800: "#12648D",
        },
        pastel: {
          blue: "#E0FDFF",
          yellow: "#FFE5E5",
          red: "#FFE5FA",
          green: "#D6FCE9",
          purple: "#E6E6FF",
        },
        primary: {
          "20": "#FBF5F6",
          "30": "#FFF4F0",
          "50": "#FCECED",
          "100": "#FBAFB2",
          "150": "#FFD4D6",
          "200": "#EABBBB",
          "300": "#DE9FA1",
          "400": "#D38387",
          "500": "#C7696E",
          "600": "#E33F4C",
          "700": "#E33F4C",
          "750": "#AD1F23",
          "800": "#991F23",
          "900": "#85171A",
        },

        success: {
          600: "#00A63E",

          50: "#F0FDF4",
        },

        error: {
          50: "#FEF2F2",
          500: "#FB2C36",
          600: "#E7000B",
        },

        green: {
          10: "#33B27D1A",
          500: "#33B27D",
        },
        indigo: {
          50: "#F0F5FF",
          100: "#E5EDFF",
          200: "#CDDBFE",
          300: "#B4C6FC",
          400: "#8DA2FB",
          500: "#6875F5",
          600: "#5850EC",
          700: "#5145CD",
          800: "#42389D",
          900: "#362F78",
        },
        purple: {
          50: "#EFF1F9",
          300: "#8B94F8",
          400: "#6E78E7",
          500: "#4A55D1",
          600: "#5151DA",
          800: "#38389B",
        },
        orange: {
          400: "#FE804B",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      fontSize: {
        "5xl": ["3rem", "4.25rem"],
      },
      boxShadow: {
        "red-aura": "0px 0px 20px 1px #E01010B2",
        "custom-purple": "0px 0px 132px 12px #8768F5",
        "custom-red": "0px 0px 132px 12px #F81F4E",
        "color-shadow": "0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A",
        card: "0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
        "card-top": "0px -1px 4px 0px #0000001A",
        "card-top-sm": "0px -1px 2px 0px #0000001A",
        "tab-top-sm": "0px -1px 4px 0px rgba(0, 0, 0, 0.10)",
        "button-popped": "0px 2px 0px 0px #9FDDFC",
        smallCard: "0px 1px 2px 0px #00000014",
        sidebar: "4px 4px 12px 0px rgba(0, 0, 0, 0.20);",
        bottom: "0px -1px 4px 0px #0000001A",
      },
      backdropBlur: {
        custom: "132px",
      },
      zIndex: {
        "-1": "-1",
      },
      borderRadius: {
        "2.5xl": "18px",
      },

      backgroundImage: {
        "Dark-gradient":
          "linear-gradient(93.81deg, #2E264E 1.29%, #633BF2 95.8%)",
        "header-gradient":
          "linear-gradient(93.81deg, #6875F5 1.29%, #7C50E2 95.8%)",
        "purple-banner":
          "linear-gradient(96.16deg, #6C3FED 1.06%, #9772F4 14.35%, #6C3FED 96%)",
        "purple-pink-banner":
          "linear-gradient(93.81deg, #6875F5 1.29%, #7C50E2 95.8%);",
        "green-gradient":
          "linear-gradient(90.96deg, #057A55 0.21%,  #05687A 99.84%)",
        "button-gradient":
          "linear-gradient(90.96deg, #262626 0.21%, #484848 50.02%, #262626 99.84%)",
        "button-purple-gradient":
          "linear-gradient(90deg, #6875F5 1.06%, #9772F4 14.35%, #7C50E2 96%)",
        "pink-gradient":
          "linear-gradient(90.96deg, #E63F49 0.21%,  #E12D99 99.84%)",
        "main-gradient":
          "linear-gradient(93.81deg, rgb(235, 237, 250) 1.29%, rgb(247, 231, 233) 95.8%)",
        ai: "linear-gradient(91.73deg, #6875F5 2.68%, #C436E8 96.26%)",
        "ai/10": "linear-gradient(91.73deg, #6875F510 2.68%, #C436E810 96.26%)",
      },

      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "2rem",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1088px",
        xl: "1280px",
        "2xl": "1344px",
      },
    },
  },
  plugins: [],
};
export default config;
