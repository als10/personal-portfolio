module.exports = {
  purge: ["./src/**/*.js", "./src/**/**/*.js"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
