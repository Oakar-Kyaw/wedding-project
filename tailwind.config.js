/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      Sail: ['Sail', 'sans-serif'], 
      Jost: ['Jost'],
    },
    extend: {
      animation: {
        "slide-bottom" : "slideBottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
      },
      keyframes: {
        slideBottom: {
         "0%" : {
              transform: "translateY(0)",
              transform: "translateY(0)"
          },
          "100%" : {
             transform: "translateY(100px)",
             transform: "translateY(100px)"
          }
        }
      },
      colors:{
        brown:"#2d2420",
        iconwhite:"#f5f5f5",
        abovewhite:"#eceae7",
        light:"#cecece",
        green:"#657150",
        white:"#ffff",
        pink:"#c8a8af"
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 768px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1536px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '2000px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

