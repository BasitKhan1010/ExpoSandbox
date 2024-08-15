/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['InterRegular'],
      'InterBlack': ['InterBlack'],
      'InterBold': ['InterBold'],
      'InterMedium': ['InterMedium'],
      'InterSemiBold': ['InterSemiBold'],
      'InterRegular' : ['InterRegular'],
    },
    extend: {
      colors: {
        'primary': '#1DBBD8',
        'secondary': '#8EEDFF',
      },
    },
  },
  plugins: [],
}

