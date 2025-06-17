/** @type {import('tailwindcss').Config} */
export default {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'custom-green': '#15AB8E',
      },
    },
  },
  plugins: [],
};
