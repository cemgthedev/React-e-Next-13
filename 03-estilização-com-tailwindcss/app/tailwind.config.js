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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
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
      }
    },
  },
  plugins: [],
}
