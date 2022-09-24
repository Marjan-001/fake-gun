/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#b7c403",

          "secondary": "#f9ac68",

          "accent": "#89f48c",

          "neutral": "#211C26",

          "base-100": "#F5F5FA",

          "info": "#A5D0E9",

          "success": "#62E4A1",

          "warning": "#F5AE14",

          "error": "#EF7177",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
