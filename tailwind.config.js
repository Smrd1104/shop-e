/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        primary:'#f2a930',
        secondary:'#ffe700'
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'3rem',
        }
      },
      fontFamily: {
        'fira': ['Fira Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
//  primary:'#fea928',
//         secondary:'#ed8900'
