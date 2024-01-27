/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      // Injecting UI vars in TailwindCSS
      colors: {
        'primary': 'var(--primary-color)',
        'primary-light': 'var(--primary-light)',
        'secondary-color': 'var(--secondary-color)',
        'tertiary-color': 'var(--tertiary-color)',
        'label-color': 'var(--label-color)',
        'heart-icon-active-color': 'var(--heart-icon-active-color)',
        'icon-default-color': 'var(--bg-heart-icon)',
        'heart-icon-border-color': 'var(--heart-icon-border-color)',
      },
      fontFamily: {
        'plus-jakarta-sans': ['var(--plus-jakarta-sans-font)'],
      },
    },
  },
  plugins: [],
}

