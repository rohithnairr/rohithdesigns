/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero': "url('./background.jpg)",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        jakarta:["Plus Jakarta Sans","sans-serif"],
        cs:["Poppins"]
        
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require("daisyui")
  ],
}
