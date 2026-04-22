/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0D0D0D',
        gray: '#666666',
      },
      fontFamily: {
        serif: ['serif'],
        sans: ['sans-serif'],
      },
    },
  },
  plugins: [],
}