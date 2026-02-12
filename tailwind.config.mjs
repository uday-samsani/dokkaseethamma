/**
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        golden: {
          50: '#fdf9f0',
          100: '#fcf2dc',
          200: '#f9e4b8',
          300: '#f5d08a',
          400: '#f0b855',
          500: '#e89f2a',
          600: '#d4821f',
          700: '#b0641b',
          800: '#8f4f1d',
          900: '#74411a',
        },
        cream: {
          50: '#fdfcfb',
          100: '#faf8f5',
          200: '#f5f0e8',
          300: '#ebe4d6',
          400: '#ddd4c1',
          500: '#c9bda5',
          600: '#a89985',
          700: '#857968',
          800: '#6e6358',
          900: '#5a524a',
        },
        earth: {
          50: '#f6f5f0',
          100: '#e8e6da',
          200: '#d2ceb6',
          300: '#b6b08c',
          400: '#9e966b',
          500: '#847a52',
          600: '#665f3f',
          700: '#524b34',
          800: '#433e2e',
          900: '#39352b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
