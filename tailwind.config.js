/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
    
      colors:{
        Shad:{
         400 : "#f5f7ff"
        },
        lightblue:{
          200 : "#D5E6FB"
        },
        darkblue:{
          500 : "#020D46"
        },
        student:{
          900 : "#F3797E"
        },
        faculty:{
          900 : "#7DA0FA"
        }
       
    },
   
    }
  },
  plugins: [],
}
