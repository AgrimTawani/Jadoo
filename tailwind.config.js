/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto': ['"Noto Sans"', 'sans-serif'],
        'poppins':['"Poppins"', 'sans-serif'],
        'Volkhov':['"Volkhov"', 'sans-serif'],
        'OpenSans':['"Open Sans"', 'sans-serif']
      },
    },
  },
  plugins: [],
}