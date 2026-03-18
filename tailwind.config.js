export default {
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        floatImage: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-24px)' },
        }
      },
      animation: {
        'slide-right': 'slideRight 1s ease forwards',
        'float': 'floatImage 4s ease-in-out infinite',
      }
    },
  },
}