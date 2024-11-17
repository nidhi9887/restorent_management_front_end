/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx}"];
export const theme = {
  extend: {},
};
export const plugins = [
  function({ addUtilities }) {
    addUtilities({
      '.scrollbar-hide': {
        /* For all browsers */
        '-ms-overflow-style': 'none', /* IE and Edge */
        'scrollbar-width': 'none', /* Firefox */
        '&::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari, Opera */
        },
      },
    });
  },
];
