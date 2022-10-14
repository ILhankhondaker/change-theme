/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#f3f4f6",
          secondary: "#FFC000",
          accent: "#ffffff", // Navbar backGround Color 
          neutral: "#000000", // Navbar text 
          "base-100": "#ffffff",
          info: "#1B1821",
          success: "#000000", // backGround color 
          warning: "#1B1821", // button color 
          error: "#ffffff",
        },
      },
      {
        dark: {
          primary: "#374151",
          secondary: "#FDE68A",
          accent: "#000000",
          neutral: "#ffffff",
          "base-100": "#1F2937",
          info: "#fde047",
          success: "#1BBB70",
          warning: "#fcfafa",
          error: "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}