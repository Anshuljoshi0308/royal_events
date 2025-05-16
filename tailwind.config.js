/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        royal: {
          blue: {
            50: '#EEF2FF',
            100: '#D9E2FD',
            200: '#BECBFA',
            300: '#94A7F5',
            400: '#667AEC',
            500: '#4756E2',
            600: '#303CD0',
            700: '#2732AA',
            800: '#1E3A8A',
            900: '#1C2C6C',
          },
          gold: {
            50: '#FDF9E5',
            100: '#FCF3CA',
            200: '#F8E595',
            300: '#F2D15F',
            400: '#ECBE38',
            500: '#D4AF37',
            600: '#B38D27',
            700: '#94691F',
            800: '#76531E',
            900: '#63461E',
          },
          purple: {
            50: '#F3F0FA',
            100: '#E9E1F6',
            200: '#D4C3ED',
            300: '#B897DD',
            400: '#9C6BCA',
            500: '#7E4BB2',
            600: '#673997',
            700: '#562C7C',
            800: '#4C1D95',
            900: '#371A54',
          },
        },
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to right, rgba(30, 58, 138, 0.8), rgba(76, 29, 149, 0.7))',
        'gold-gradient': 'linear-gradient(to right, #D4AF37, #F2D15F)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};