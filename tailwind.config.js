/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,css}"],
  theme: {
      extend: {
        colors: {
          pred: '#D04848',
          pyellow: '#F3B95F',
          plightyellow:'#FDE767',
          pblue: {
              DEFAULT: '#6895D2',
              dark: '#5885C2'
          }
        }
      }
  },
  plugins: [],
}

