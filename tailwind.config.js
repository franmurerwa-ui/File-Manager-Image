/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A57E8',
        info: '#08B1BA',
        background: '#F5F6FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0,0,0,0.05)',
        'hover': '0 8px 24px rgba(0,0,0,0.08)',
      },
      backdropBlur: {
        'sm': '8px',
      },
    },
  },
  plugins: [],
}