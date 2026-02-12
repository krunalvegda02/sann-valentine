export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'valentine-pink': '#FFB6D9',
        'valentine-light-pink': '#FFE5F1',
        'valentine-purple': '#E5D4FF',
        'valentine-light-purple': '#F5F0FF',
        'valentine-dark-pink': '#FF69B4',
        'valentine-dark-purple': '#DDA0DD',
      },
      fontFamily: {
        'cursive': ['Pacifico', 'cursive'],
        'cute': ['Poppins', 'Quicksand', 'sans-serif'],
        'script': ['Dancing Script', 'cursive'],
      },
      fontSize: {
        'xs': ['0.875rem', { lineHeight: '1.5' }],
        'sm': ['1rem', { lineHeight: '1.6' }],
        'base': ['1.125rem', { lineHeight: '1.75' }],
        'lg': ['1.25rem', { lineHeight: '1.75' }],
        'xl': ['1.5rem', { lineHeight: '1.75' }],
        '2xl': ['1.875rem', { lineHeight: '1.6' }],
        '3xl': ['2.25rem', { lineHeight: '1.5' }],
        '4xl': ['3rem', { lineHeight: '1.4' }],
        '5xl': ['3.75rem', { lineHeight: '1.3' }],
        '6xl': ['4.5rem', { lineHeight: '1.2' }],
        '7xl': ['6rem', { lineHeight: '1.1' }],
        '8xl': ['8rem', { lineHeight: '1' }],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'heart-beat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
}