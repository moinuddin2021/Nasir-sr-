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
       
    },
   
    }
  },
  plugins: [],
}
