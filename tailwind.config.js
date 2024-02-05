import { transformWithEsbuild } from 'vite'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl:'1150px',
      xxl: '1400px'
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
        '50%': {transform: 'translateY(-1rem) '}
      }
    },
    animation:{
      'movingY': 'move 2s lenear infinite'
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

