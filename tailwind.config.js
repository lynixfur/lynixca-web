/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'darker': '#121212',
        'dark': '#1a1a1a',
        'card': '#1e1f22',
      }
    },
  },
  plugins: [],
}

