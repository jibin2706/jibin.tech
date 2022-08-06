/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"Source Sans Pro"', 'serif'],
      },
      colors: {
        'primary-lighter': '#81defd',
        'primary-light': '#40c3f7',
        primary: '#0b69a3',
        'primary-darker': '#035388',
        'primary-red': 'hsl(5, 66%, 60%)',
        'secondary-red': 'hsl(18, 83%, 63%)',
        'primary-blue': 'hsl(225, 40%, 33%)',
        'secondary-blue': 'hsl(225, 30%, 49%)',
        'primary-yellow': 'hsl(46, 83%, 76%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
