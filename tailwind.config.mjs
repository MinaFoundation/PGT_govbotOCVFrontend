/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          primary: '#8A2BE2',
          secondary: '#FF69B4',
          background: '#F8F9FE',
          text: '#333333',
          accent: '#00BFFF'
        }
      },
    },
    plugins: [],
  }