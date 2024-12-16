/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container: "1140px"
      },
      fontFamily: {
        'popins': ['Poppins', 'sans-serif'],
      },
      backgroundImage:{
        ban:"url(./src/assets/bg.png)"
      }
    },
  },
  plugins: [],
}


