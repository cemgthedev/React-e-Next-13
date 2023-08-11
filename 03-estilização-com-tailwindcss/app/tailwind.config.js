/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // é importante definir desta forma para que a troca de temas funcione
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)', // observe que o layout principal contém font-sans, pois essa será a fonte principal da estilização
        alt: 'var(--font-alt)'
      },
      fontSize: {
        '3xl': '32px',
        '2xl': '28px',
        'xl': '24px',
        'lg': '20px',
        'md': '16px',
        'sm': '12px',
        'xs': '8px'
      },
      keyframes: {
        down: {
          '0%': {
            transform: 'translateY(-20px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0px)'
          }
        }
      },
      animation: {
        down: 'down 350ms ease-in-out'
      }
    },
  },
  plugins: [],
}
