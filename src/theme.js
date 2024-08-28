export default {
  animation: {
    'reveal-bottom': 'reveal-bottom 1s ease-in-out',
    'rotate-360': 'rotate-360 1s ease-in-out'
  },
  keyframes: {
    'reveal-bottom': {
      from: {
        opacity: 0,
        translate: '0 50px',
        scale: .5
      },
      to: {
        opacity: 1,
        translate: '0 0',
        scale: 1
      }
    },
    'rotate-360': {
      '0%': {
        transform: 'rotate(0)'
      },
      '50%': {
        transform: 'rotate(270deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    }
  },
  animationDelay: {
    none: 0,
    0: 0,
    100: '100ms',
    200: '200ms',
    300: '300ms',
    400: '400ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms'
  },
  animationDuration: {
    none: 0,
    slower: '500ms',
    slow: '400ms',
    fast: '200ms',
    faster: '100ms',
    normal: '300ms',
    0: 0,
    100: '100ms',
    200: '200ms',
    300: '300ms',
    400: '400ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms'
  }
}