/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "class-bg": "url('../src/images/general/class-bg.jpg')",
        "lord-vishnu": "url('../src/images/general/lord-vishnu.png')",
        "student-bg-o": "url('../src/images/general/student-bg-opaque.png')",
        "wide-student-bg": "url('../src/images/general/wide-student-bg.jpg')",
        "wide-staff": "url('../src/images/general/wide-staff.jpg')",
      },
      colors: {
        "custom-orange": "#ffa900",
      },
    },
  },
  plugins: [],
};
