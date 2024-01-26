/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      // Injecting UI vars in TailwindCSS
      colors: {
        'primary': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'bg-color': 'var(--bg-color)',
        'bg-label': 'var(--bg-label)',
        'bg-heart-icon-active': 'var(--bg-heart-icon-active)',
        'bg-heart-icon-default': 'var(--bg-heart-icon)',
        'bg-heart-icon-border': 'var(--bg-heart-icon-border)',
      },
      fontFamily: {
        'plus-jakarta-sans': ['var(--plus-jakarta-sans-font)'],
      },
    },
  },
  plugins: [],
}

