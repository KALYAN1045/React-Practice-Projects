/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gap: {
        "0.8rem": ["0.8rem"],
      },
      padding: {
        "2.4rem": "2.4rem",
        "2.8rem": "2.8rem",
      },
      fontSize: {
        "8rem": ["8rem"],
        "2.4rem": ["2.4rem"],
      },
      colors: {
        "brand-y": "#f4a226",
        "brand-o": "#e5771f",
        "brand-b": "#76c7ad",
        "brand-db": "#5a3e2b",
        "brand-w": "#ffebb3",
      },
      fontFamily: {
        body: ["Monoton"],
        inherit: "inherit",
      },
      fontSize: {
        "1.8rem": "1.8rem",
      },
      letterSpacing: {
        "5px": "-5px",
      },
    },
  },
  plugins: [],
};
