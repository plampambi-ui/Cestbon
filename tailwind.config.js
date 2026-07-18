export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          200: 'oklch(92.2% 0 none)',
          300: 'oklch(87% 0 none)',
          400: 'oklch(70.8% 0 none)',
          500: 'oklch(55.6% 0 none)',
          600: 'oklch(43.9% 0 none)',
          700: 'oklch(37.1% 0 none)',
          800: 'oklch(26.9% 0 none)',
          900: 'oklch(20.5% 0 none)',
          950: 'oklch(14.5% 0 none)',
        },
        red: {
          500: 'oklch(63.7% .237 25.331)',
        },
      },
    },
  },
  plugins: [],
}
