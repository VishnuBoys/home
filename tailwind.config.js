/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',

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
    
  ],
}
