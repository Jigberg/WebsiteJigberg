/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      keyframes: {
        moveLeft: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        wiggle: {
          "25%": { transform: "rotate(-10deg)" },
          "75%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        fadeOut: "fadeOut 1s ease-in-out forwards",
        moveLeft: "moveLeft 6s ease-in-out forwards",
      },
      colors: {
        mgrey: "#282A3A",
      },
    },
  },
  plugins: [],
};
