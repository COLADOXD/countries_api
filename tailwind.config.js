/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      textColor: (theme) => ({
        ...theme("colors"),
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),
      }),
    },
  },
  plugins: [],
};
