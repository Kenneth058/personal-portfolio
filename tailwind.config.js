module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black-1': '#111',
        'yellow-1': '#ffb400',
      },
      spacing: {
        'full-x2': '200%',
        '97': '27rem',
        '100': '30rem',
      },
      inset: {
        '-83pc': '-83%',
      },
      rotate: {
        '-15': '-15deg',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        '4.2r': '4.2rem',
      },
      lineHeight: {
        '11': '2.75rem',
        '12': '3rem',
        '13': '4rem',
        '3.5r': '3.5rem',
      },
      borderColor: {
        'gray-1': '#252525',
      },
      boxShadow: {
        profile: '0 0 7px rgb(0 0 0 / 90%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
