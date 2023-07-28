/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Graphik', 'Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      screens: {
        s: '370px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px'
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
