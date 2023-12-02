/** @type {import('tailwindcss').Config, @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');} */

import { transform } from 'typescript';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'oswald':['Oswald', 'Arial','Helvetica', 'sans-serif']
      },
      transform:{
        'test':['Scale(1,2)']
      }
    },
  },
  plugins: [],
}
