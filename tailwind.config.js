module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#0f1010',
        // gray: '#808080',
        fff: '#ffffff',
        projectsbg: '#E1F0F0',
        cardborder: '#44546a',
        headerbg: '#4472C4',
        'header-dimtext': '#d9d9d9',
        'header-icon': '#ed7d31',
      },
      fontFamily: {
        'Roboto-Condensed': ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
      borderOpacity: ['first'],
    },
  },
  plugins: [],
};
