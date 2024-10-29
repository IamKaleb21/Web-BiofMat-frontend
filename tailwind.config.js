/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  // Agrega Poppins como fuente predeterminada
      },
      backgroundImage: {
        // Añadir el nuevo radial gradient
        'radial-custom': 'radial-gradient(134.15% 97.25% at 2.54% 16.08%, #C48939 0%, #779ECC 50%, #C48939 100%)',
      },
      borderWidth: {
        '1.5': '1.5px', // Para manejar el borde de 1.5px
      },
      colors: {
        primary: {
          DEFAULT: '#195091',  // Color base
          700: '#153e73',      // Tonalidad 700 más oscura
          900: '#102d55',      // Tonalidad 900 aún más oscura
        },
        gray: {
          DEFAULT: '#D9D9D9',  // Color Base
          300: '#E9E4E4',      // Tonalidad 300 más clara
        },
      },
    },
  },
  plugins: [],
}

