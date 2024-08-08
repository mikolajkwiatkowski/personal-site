/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'maincontent': '85vh',
        'contentinmaincontent': '82vh',
      },
      fontFamily: {
        'poppins': 'Poppins',  
      }
      
      
    },
  },
  plugins: [],
}

