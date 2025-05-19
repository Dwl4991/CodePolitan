/** @type {import('tailwindcss').Config} */
export default {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    iconPlugin({
      collection: getIconCollections(['material-symbols']),
    }),
  ],
};
