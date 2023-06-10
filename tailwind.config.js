/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#F3D93F',
        'secondary': '#FF8400',
        'tertiary': '#F6F1E9',
      },
      screens:{
        'tablet' : '980px',
        'mobile' : '460px',
        'laptop' : '1280px',
      }
    },
  },
  plugins: [],
}