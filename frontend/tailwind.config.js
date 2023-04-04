/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        yelp: {
          primary: "#ea5422",
          secondary: "#c45743",
          accent: "#000",
          neutral: "#fff",
          info: "#20C9F3",

          success: "#4AE88C",

          warning: "#BD6C0F",

          error: "#E93A45",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
