const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./root/index.html', './src/**/*.{html,ts,tsx}'],
  theme: {
    fontFamily: {
      serif: ['Bitter', ...defaultTheme.fontFamily.serif],
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      mono: ['"PT Mono"', ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  variants: {
    display: [],
  },
  plugins: [require('@tailwindcss/forms')],
};
