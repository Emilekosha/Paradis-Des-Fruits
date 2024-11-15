/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary :"#ff7d00",
        secondary: "#06d6a0" 
      },
      fontFamily: {
        Montserrat : ["Montserrat", "sans-serif"],
        Poppins: [ "Poppins", "serif"],
        averia: [ "Averia Libre", "system-ui"]
      },

      container : {
        center : true,
        padding : {
          DEFAULT : "1rem",
          sm : "2rem",
          lg: "4rem",
          xl : "5rem",
          "2xl" : "6rem",
        }
      }
    },
  },
  plugins: [],
}

