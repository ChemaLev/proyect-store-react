/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#ff3b3b",
        "secondary": "#7424a6",
        "tertiary": "#458f17"
      },
      height: {
        "inherit": "inherit"
      },
      minHeight: {
        "inherit": "inherit"
      }
    },
  },
  plugins: [],
}

