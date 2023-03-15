/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      zIndex: {
        1: "1",
      },
      // gridTemplateColumns: {
      //   sidebar: "0.7fr 4fr",
      // },
    },
  },
  plugins: [],
};
