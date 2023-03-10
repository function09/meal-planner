/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: { sideBar: "0.125fr 2fr" },
      gridTemplateRows: { navBar: "65px" },
      colors: {
        orange: {
          1: "#F3B700",
          2: "#FAA300",
          3: "#E57C04",
          4: "#FF6201",
          5: "#F63E02",
        },
      },
    },
  },
  plugins: [],
};
