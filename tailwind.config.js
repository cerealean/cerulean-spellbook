/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        cerulean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        wood: {
          50: '#fefbf0',
          100: '#fdf5e0',
          200: '#f8e8c1',
          300: '#f2d79c',
          400: '#e9c46a',
          500: '#daa520',
          600: '#cd941c',
          700: '#b67e17',
          800: '#9c6b15',
          900: '#7d5512',
        }
      },
      fontFamily: {
        'cursive': ['Brush Script MT', 'cursive'],
        'serif': ['Times New Roman', 'serif'],
      },
      animation: {
        'book-open': 'bookOpen 1.5s ease-in-out forwards',
        'page-turn': 'pageTurn 0.8s ease-in-out forwards',
        'zoom-out': 'zoomOut 1.5s ease-in-out forwards',
      },
      keyframes: {
        bookOpen: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(-25deg)' }
        },
        pageTurn: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' }
        },
        zoomOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.8)' }
        }
      }
    },
  },
}