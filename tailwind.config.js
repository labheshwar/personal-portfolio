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
        jetbrains: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
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
        'custom-grey': '#D9D9D9',
        'custom-grey-5': 'rgba(217, 217, 217, 0.5)',
        'glass-light': 'rgba(255, 255, 255, 0.08)',
        'glass-dark': 'rgba(0, 0, 0, 0.2)',
      },
      textColor: {
        'primary-light': '#646AFF',
        'primary-dark': '#00D1C7',
        'secondary-light': '#EDEDED',
        'secondary-dark': '#262626',
        'black-6': 'rgba(0, 0, 0, 0.6)',
        'muted-light': 'rgba(38, 38, 38, 0.7)',
        'muted-dark': 'rgba(237, 237, 237, 0.7)',
      },
      borderColor: {
        'primary-light': '#646AFF',
        'primary-dark': '#00D1C7',
        'secondary-light': '#EDEDED',
        'secondary-dark': '#262626',
        'glass-light': 'rgba(100, 106, 255, 0.3)',
        'glass-dark': 'rgba(0, 209, 199, 0.3)',
      },
      screens: {
        '2xl': '1420px',
        'xs': '450px'
      },
      opacity: {
        1: '0.2',
        2: '0.4',
        3: '0.6',
        4: '0.8',
        5: '1',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient-shift 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-light': 'radial-gradient(at 40% 20%, hsla(248, 100%, 70%, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(248, 100%, 70%, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(280, 100%, 70%, 0.1) 0px, transparent 50%)',
        'mesh-dark': 'radial-gradient(at 40% 20%, hsla(174, 100%, 41%, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(174, 100%, 41%, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(150, 100%, 48%, 0.1) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow-light': '0 0 20px rgba(100, 106, 255, 0.3), 0 0 40px rgba(100, 106, 255, 0.2)',
        'glow-dark': '0 0 20px rgba(0, 209, 199, 0.3), 0 0 40px rgba(0, 209, 199, 0.2)',
        'card-light': '0 8px 32px rgba(100, 106, 255, 0.1)',
        'card-dark': '0 8px 32px rgba(0, 209, 199, 0.1)',
      },
    },
  },
  plugins: [],
};
