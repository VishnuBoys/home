/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'class-bg': "url('../src/images/class-bg.jpg')",
        'lord-vishnu': "url('../src/images/lord-vishnu.png')",
        'student-bg-o': "url('../src/images/student-bg-opaque.png')",
        'wide-student-bg': "url('../src/images/wide-student-bg.jpg')",
        'wide-staff': "url('../src/images/wide-staff.jpg')",
      },
      colors: {
        'custom-orange' : '#ffa900', 
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
