/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        menlo: ['Menlo', 'monospace'],
        roboto: ['Roboto', 'sans-serif'],
        luckiestGuy: ['Luckiest Guy', 'cursive'],
        abrilFatface: ['Abril Fatface', 'cursive'],
        robotoFlex: ['Roboto Flex', 'sans-serif'],
      },
      fontWeight: {
        extraExtraBold: 1000,
      },
      backgroundColor: {
        'primary-light': '#646AFF',
        'primary-dark': '#00D1C7',
        'secondary-light': '#EDEDED',
        'secondary-dark': '#262626',
        'dark-20': 'rgba(255, 255, 255, 0.2)',
      },
      textColor: {
        'primary-light': '#646AFF',
        'primary-dark': '#00D1C7',
        'secondary-light': '#EDEDED',
        'secondary-dark': '#262626',
      },
      borderColor: {
        'primary-light': '#646AFF',
        'primary-dark': '#00D1C7',
        'secondary-light': '#EDEDED',
        'secondary-dark': '#262626',
      },
      screens: {
        '2xl': '1420px',
      },
      opacity: {
        1: '0.2',
        2: '0.4',
        3: '0.6',
        4: '0.8',
        5: '1',
      },
    },
    plugins: [],
  },
};
