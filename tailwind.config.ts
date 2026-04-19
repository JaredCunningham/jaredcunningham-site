import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fcfaf6",
          100: "#f7f3e9",
          200: "#eee6d0",
        },
        navy: {
          700: "#2b3d5c",
          800: "#1e2b44",
          900: "#141d30",
        },
        ink: "#141411",
        amber: {
          500: "#d08a3c",
          600: "#b0701f",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Georgia"', 'serif'],
        sans: ['"Inter"', '"ui-sans-serif"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Menlo"', 'monospace'],
      },
      maxWidth: {
        '70ch': '70ch',
      },
    },
  },
  plugins: [],
};

export default config;
