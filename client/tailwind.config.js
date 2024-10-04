/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        md: "10px",
      },
    },
  },
  variants: {
    extend: {
      backdropFilter: ["responsive", "hover", "focus"],
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-filters")],
};
