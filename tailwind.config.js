module.exports = {
  content: ['./public/**/*.html', './src/**/*.vue'],
  theme: {
    colors:{
      white: '#fff',
      grey: '#D9D9D9',
      blue: '#00FFFF',
      red: '#AA4A44',

      greyBtn: "#565656",
    },
    extend: {
      boxShadow: {
        'inner-custom': 'inset 0px 6px 10px #888888',
      },
      minWidth: {
        '1/2': '50%',
        '1/3': '33%',
        '1/4': '25%',
        '1/5': '80%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}