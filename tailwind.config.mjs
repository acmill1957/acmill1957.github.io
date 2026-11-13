/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        paper: '#F7F6F3',
        accent: '#C8102E',
        border: '#E4E2DD',
        muted: '#555555',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
