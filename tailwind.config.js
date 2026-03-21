/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        apple: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        apple: {
          blue: '#0071e3',
          bluehov: '#0077ed',
          text: '#1d1d1f',
          secondary: '#6e6e73',
          bg: '#f5f5f7',
          white: '#ffffff',
          dark: '#000000',
          darkbg: '#1d1d1f',
          darkcard: '#2c2c2e',
          darksec: '#a1a1a6',
        }
      },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-up-1': 'fadeUp 0.8s 0.15s ease forwards',
        'fade-up-2': 'fadeUp 0.8s 0.3s ease forwards',
        'fade-up-3': 'fadeUp 0.8s 0.45s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
    }
  },
  plugins: [],
}
