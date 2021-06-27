module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing:{
        "19": "75px",
        "49": "198.38px"
      }
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'group-hover'],
      scale: ['group-hover'],
      overflow: ['hover'],
      display: ['group-hover'],
    },
  },
  plugins: [],
}
