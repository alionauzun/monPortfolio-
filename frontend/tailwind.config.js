export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    keyframes: {
      fadeInUp: {
        '0%': {
          opacity: 0,
          transform: 'translateX(-100%) translateY(-100%)',
        },
        '100%': {
          opacity: 1,
          transform: 'translateX(0) translateY(0)',
        },
      },
    },
    animation: {
      fadeInUp: 'fadeInUp 1s ease-out forwards',
    },
  },
};
export const plugins = [];
