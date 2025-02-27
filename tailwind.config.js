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
        primary:'#C5963B',
        secondary:'#2874f0'
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'3rem',
        }
      },
      fontFamily: {
        'Roboto': ['Roboto', 'serif'],
      },
    },
  },
  plugins: [],
}
//  primary:'#fea928',
//         secondary:'#ed8900'

//  primary:'#f2a930',
//         secondary:'#ffe700'
// ffe11b