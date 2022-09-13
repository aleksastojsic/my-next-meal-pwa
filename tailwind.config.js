/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      colors: {
        custom: {
          light: '#e0a72e',
          dark: '#dd944c'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    require('daisyui')
  ],
  daisyui: {
    themes: ['bumblebee', 'coffee'],
    darkTheme: 'coffee'
  },
  variants: {
    scrollbar: ['dark', 'rounded']
  }
};
