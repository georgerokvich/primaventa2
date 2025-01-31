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
        primary: {
          DEFAULT: '#1B365D',
          light: '#2A4A7C',
          dark: '#142849'
        },
        secondary: {
          DEFAULT: '#7C9082',
          light: '#96A89B',
          dark: '#637269'
        },
        accent: {
          DEFAULT: '#C5A572',
          light: '#D4BC94',
          dark: '#B08E5B'
        },
        neutral: {
          DEFAULT: '#E5E5E5',
          light: '#F5F5F5',
          dark: '#A0A0A0'
        }
      },
    },
  },
  plugins: [],
};

export default config;
