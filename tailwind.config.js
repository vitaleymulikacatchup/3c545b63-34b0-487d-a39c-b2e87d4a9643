/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sinoptik-blue': '#2B7CE9',
        'sinoptik-light-blue': '#4A90E2',
        'sinoptik-dark-blue': '#1E5BB8',
        'sinoptik-gray': '#F5F5F5',
        'sinoptik-dark-gray': '#666666',
        'sinoptik-border': '#E0E0E0',
        'sinoptik-text': '#333333',
        'sinoptik-light-text': '#777777',
        'sinoptik-yellow': '#FFD700',
        'sinoptik-orange': '#FF8C00'
      },
      fontFamily: {
        'sans': ['Arial', 'Helvetica', 'sans-serif']
      },
      fontSize: {
        'xs': '11px',
        'sm': '12px',
        'base': '13px',
        'lg': '14px',
        'xl': '16px',
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px'
      }
    },
  },
  plugins: [],
}