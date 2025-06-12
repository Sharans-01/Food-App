/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF6EE',
          100: '#FFEAD4',
          200: '#FFD5A8',
          300: '#FFC07D',
          400: '#FFAB51',
          500: '#FF7E1D', // Main primary color
          600: '#E86400',
          700: '#BD5200',
          800: '#934000',
          900: '#6A2F00',
        },
        secondary: {
          50: '#E9F7F5',
          100: '#D3F0EB',
          200: '#A7E0D7',
          300: '#7CD1C3',
          400: '#50C2AF',
          500: '#2A9D8F', // Main secondary color
          600: '#207D73',
          700: '#176057',
          800: '#0E433C',
          900: '#052621',
        },
        accent: {
          50: '#FCE9EB',
          100: '#F9D3D7',
          200: '#F4A7AF',
          300: '#EF7B87',
          400: '#EA4F5F',
          500: '#E63946', // Main accent color
          600: '#D01E2C',
          700: '#A71723',
          800: '#7D111A',
          900: '#540A11',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      height: {
        'screen-80': '80vh',
        'screen-90': '90vh',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};