/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f1ff',
          100: '#e7e5ff',
          200: '#d1cfff',
          300: '#b1a8ff',
          400: '#8a78ff',
          500: '#6641ff',
          600: '#541bff',
          700: '#4207f5',
          800: '#3807d0',
          900: '#3008aa',
          950: '#1a0174',
        },
        secondary: {
          50: '#f4f5f4',
          100: '#eef0ee',
          150: '#f4f4f5',
          200: '#daddda',
          300: '#bac0b9',
          400: '#949d93',
          500: '#768176',
          600: '#616960',
          700: '#4e564e',
          800: '#434943',
          900: '#3c3f3b',
          950: '#272a27',
        },
      },
    },
  },
  plugins: [],
};
