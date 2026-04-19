export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: '#7FAF8E',
        cream: '#F6F1EB',
        dustyRose: '#D8A7A0',
        warmPeach: '#E6B8A2',
        forest: '#3F5F4A',
        goldenGlow: '#EED9A0',
        warmTaupe: '#B8A79A',
        mutedGrey: '#8C8C8C',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        swash: ['Allura', 'cursive'],
      }
    },
  },
  plugins: [],
}
