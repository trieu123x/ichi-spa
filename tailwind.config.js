export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          DEFAULT: '#7B5C3E',
          light: '#A07850',
          dark: '#4E3520',
        },
        be: {
          DEFAULT: '#E8DCCB',
          light: '#F5EFE4',
          soft: '#FAF6F0',
        },
        cream: '#FDF9F4',
        'text-dark': '#2E1F0E',
        'text-mid': '#6B4F35',
        'text-soft': '#9C7D5F',
        accent: '#C9A97A',
        line: 'rgba(123,92,62,0.15)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
      }
    },
  },
  plugins: [],
}
