module.exports = {
  content: [
    "./src/*.{html,js}",
    "./src/components/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
