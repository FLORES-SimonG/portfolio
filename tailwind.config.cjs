/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          light: '#c561f6',
          DEFAULT: '#7611a6',
          dark: '#1c0056',
        },
        gray: {
          0: '#090b11',
          50: '#141925',
          100: '#283044',
          200: '#3d4663',
          300: '#505d84',
          400: '#6474a2',
          500: '#8490b5',
          600: '#a3acc8',
          700: '#c3cadb',
          800: '#e3e6ee',
          900: '#f3f4f7',
          999: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
