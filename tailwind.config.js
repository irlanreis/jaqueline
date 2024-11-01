/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // FullHD
        '4xl': '2560px',
        '5xl': '3840px',
        '6xl': '5120px',
        '7xl': '7680px',
        '8xl': '8192px', // 8k
        'mbl': { 'max': '639px' }, // Tamanho de tela para dispositivos móveis
        'lt': { 'max': '350px' },
      },

      fontFamily: {
        RasaRegular: ['Rasa', 'serif'],
        SpectralRegular: ['Spectral', 'serif'],
        MontserratRegular: ['Montserrat', 'sans-serif'],
      },

      backgroundImage: {
        'offWhite': "url('/src/assets/images/background.svg')",
        'jaqueSorriso': "url('/src/assets/images/background-mobile.svg')",
        'pricePack': "url('/src/assets/images/landing-page/10.png')",
        'lg-bg-start': "url('/src/assets/images/landing-page/lg-bg-start.jpg')",
        'lg-bg-mid': "url('/src/assets/images/landing-page/lg-bg-mid.jpg')",
        'lg-bg-end': "url('/src/assets/images/landing-page/lg-bg-end.jpg')",
        'lg-bg-clean': "url('/src/assets/images/landing-page/lg-bg-clean.jpg')",
      },

      colors: {
        'marrondarck': '#2D2D2D',
        'marronLight': '#52493D',
        'bejeAbobora': '#B28E6C',
        'bejeClaro': '#FFDEAB',
        'beje': '#CCC7BC',
        'bejeLigth': '#F1F1F1',
      },

      height: {
        '100vh': '100vh',
        '90vh': '90vh',
        '80vh': '80vh',
        '70vh': '70vh',
        '60vh': '60vh',
        '50vh': '50vh',
        '40vh': '40vh',
        '30vh': '30vh',
        '20vh': '20vh',
        '10vh': '10vh',
      },

      width: {
        '100vh': '100vh',
        '90vh': '90vh',
        '80vh': '80vh',
        '70vh': '70vh',
        '60vh': '60vh',
        '50vh': '50vh',
        '40vh': '40vh',
        '30vh': '30vh',
        '20vh': '20vh',
        '10vh': '10vh',
      },
    },
  },
  plugins: [],
}