export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: '#F2A68D',
        darkgrey: '#4A3B32',
        offwhite: '#FFFBF7',
        terracotta: '#E8A598',
        primary: '#242A21',
        bgLight: '#FFFFFF',
        accentPink: '#F18C99',
        accentYellow: '#E8A741',
        accentGreen: '#5A6F4C',
        textGray: '#545454',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        swash: ['"Pinyon Script"', 'cursive'],
      }
    },
  },
  plugins: [],
}
