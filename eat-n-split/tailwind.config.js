/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: "Barlow",
      },
      colors: {
        "color-lightest": "#fff4e6",
        "color-light": "#ffe8cc",
        "color-medium": "#ffa94d",
        "color-dark": "#ff922b",
        "color-db": "#3F292B",
      },
      boxShadow: {
        "glow-orange": "0 0 20px rgba(255, 165, 0, 0.5)",
        "glow-db": "0 0 20px #3F292B",
        medium: "#ffa94d",
      },
    },
  },
  plugins: [],
};
