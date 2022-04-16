module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
       toolTip: 'toolTip 3s ease-out 1'
      },
      keyframes: {
        toolTip: {
          '0%': { transform: 'scale(0)' },
          '10%': { transform: 'scale(1)' },
          '90%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        }
      },
    },
  },
  plugins: [],
}