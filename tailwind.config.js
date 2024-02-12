import { transformWithEsbuild } from 'vite'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      mini:'300px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl:'1150px',
      xxl: '1400px',
      xxxl: '1500px',
    },
    extend: {
      colors:{
        greenColor:"#64ffda",
        navbgColor: "#172a45",
        bgColor: '#0a192f',
        textColor: '#8892b0',      
        head_Color: '#ccd6f6',
        imageColor: "#009b80",
        redColor: "#cc3433",
        darkColor: '#000',
        darkColorLight: "#171717",
      }
    },
    keyframes:{
      move:{
        '100%': {transform: 'translateY(-0.5rem) '}
      },
      moveX: {
        from: {
          width: '0'
        },
        to: {
          width: '65%'
        },
      }
    },
    animation:{
      'movingy': 'move 0.3s linear forwards',
      'movingX': 'moveX 0.3s linear'
    },
    fontFamily:{
      Roboto:['Roboto', 'sans-serif']
    },
    container: {
      
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
      },
      
    },

  },
  plugins: [],
}

