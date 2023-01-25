/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'main': "url('../public/images/background.jpg')",
        'pattern': "url('../public/images/bg-pattern.png')",
        'input': "url('../../../public/images/bg-input.png')",
      },
      fontFamily:{
        'cinzel':['Cinzel', 'serif'],
        'kavoon':['Kavoon', 'cursive'],
        'solitreo':['Solitreo', 'cursive']
      }
    },
  },
  plugins: [],
}