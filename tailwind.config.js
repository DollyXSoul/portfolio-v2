/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-10%)" },
          "50%": { transform: "translateY(5%)" },
        },
      },
    },
    fontFamily: {
      signature: ["Ruthie", "cursive"],
      heading: ["Platypi", "normal"],
      projectHeading: ["Rammetto One", "normal"],
      poppins: ["Poppins", "normal"],
    },
  },
  plugins: [],
};
