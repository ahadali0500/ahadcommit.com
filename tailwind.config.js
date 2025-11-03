/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#C0A7FF',
          default: '#7544F1',
          hover: '#6538d8',
        },
        secondary: {
          default: '#323756',
          light: '#EDE5FF',
          lighter: '#DBE0FF',
        },
        common: {
          grey_light: '#EAE6F8',
          warning_light: '#FFECDD',
          error_light: '#FFE5FF',
          success_light: '#D9FFF2',
          grey_dark: '#708090',
          grey: '#6B7B8A',
          grey_text: '#969696',
          white: '#ffffff',
          black: '#000000',
        },
        grey: {
          grey_100: '#DEDEDE',
          grey_200: '#F2F2F2',
        },
        error: {
          default: '#F90606',
        },
        success: {
          main: '#1CC95B',
        },
        backgroundImage: {
          'primary-gradient': 'linear-gradient(180deg, rgba(117, 68, 241, 0.02) 0%, rgba(117, 68, 241, 0.2) 100%)',
          'comunity-gradient': 'rgba(117, 68, 241, 1)',
        },
      },
      // fontFamily: {
      //   Jost: ["var(--font-Jost)", "Jost", "sans-serif"],
      // },

      boxShadow: {
        primary: '0px 0px 10px 0px rgba(0, 0, 0, 0.06)',
      },

      screens: {
        xxl: '1440px', // Adjust this value as per your design requirements
        '3xl': '1580px',
      },
      lineClamp: {
        12: '12',
        16: '16',
      },

    },
  },
  plugins: [],
};
