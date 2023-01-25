/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Light Theme */
        "bright-blue": "hsl(220, 98%, 61%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-grayish-blue": "hsl(233, 11%, 84%)",
        "dark-grayish-blue": "hsl(236, 9%, 61%)",
        "very-dark-grayish-blue": "hsl(235, 19%, 35%)",

        /* Dark Theme */

        "very-dark-blue": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "dm-light-grayish-blue": "hsl(234, 39%, 85%)",
        "light-grayish-blue-hover": "hsl(236, 33%, 92%)",
        "dm-dark-grayish-blue": "hsl(234, 11%, 52%)",
        "dm-very-dark-grayish-blue": "hsl(233, 14%, 35%)",
        "very-dark-grayish-blue-2": "hsl(237, 14%, 26%)",
      },
      backgroundImage: {
        "desktop-dark": "url('./../public/images/bg-desktop-dark.jpg')",
        "desktop-light": "url('./../public/images/bg-desktop-light.jpg')",
        "mobile-dark": "url('./../public/images/bg-mobile-dark.jpg')",
        "mobile-light": "url('./../public/images/bg-mobile-light.jpg')",
      },
    },
  },
  plugins: [],
};
