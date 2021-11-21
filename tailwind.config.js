module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'jumbotronimg': "url('./component/img/jumbotronimg.png')",
        'heroimg': "url('./component/img/heroimg.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
