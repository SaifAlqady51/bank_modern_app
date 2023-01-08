/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  mode:'jit',
  theme: {
    extend:{
      colors:{
        primary:'#00040f',
        secondary:'#00f6ff',
        dimwhite:"rgba(255,255,255,0.7)",
        dimblue: "rgba(9,151,125,0.1)",
      },
      fontFamily:{
        possins:["Poppins","sans-serif"],
      },
    },
    screens:{
      xs:"480px",
      ss:"620px",
      sm:"768px",
      md:"1060px",
      lg:"1200px",
      xl:"1700px"
    },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      }
    },
  plugins: [],
}
