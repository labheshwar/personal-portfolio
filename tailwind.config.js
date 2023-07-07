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
    },
    plugins: [],
  },
};
