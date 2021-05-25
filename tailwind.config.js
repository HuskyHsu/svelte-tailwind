module.exports = {
  darkMode: 'class', // This can be 'media' if preferred.
  mode: 'jit',
  purge: [
    './src/**/*.svelte',
    './src/**/*.html',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        svelte: '#ff3e00',
      },
      height: {
        card: '300px'
      }
    }
  },
  variants: {},
  plugins: [],
}
