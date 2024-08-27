/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'light-mood-bg': "url('../public/bg-desktop-light.jpg')",
        'dark-mood-bg': "url('../public/bg-desktop-dark.jpg')",
      }

    },
  },
  plugins: [],
}