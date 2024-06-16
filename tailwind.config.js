/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#010851",
        "color-secondary": "#9A7AF1",
        "color-tartiary": "#707070",
        "color-pink": "#EE9AE5",
      },
      boxShadow: {
        "3xl": "0 10px 50px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
