/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Graphik', 'Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      primary: 'Poppins'
    },
    extend: {
      screens: {
        s: '370px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px'
      },
      backgroundImage: {
        gradientBg: "url('/src/assets/img/bg.png')"
      },
      keyframes: {
        shake: {
          '0%': {
            transform: 'translate(3px, 0)'
          },
          '50%': {
            transform: 'translate(-3px, 0)'
          },
          '100%': {
            transform: 'translate(0, 0)'
          }
        }
      },
      animation: {
        shake: 'shake 150ms 2 linear'
      }
    },
    variants: {
      extend: {
        backgroundColor: ['checked'],
        borderColor: ['checked']
      }
    }
  },
  plugins: [require('daisyui'), require('tailwindcss'), require('autoprefixer')],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'light'
  }
};
