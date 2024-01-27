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
      backgroundColor: {
        'feather-gradient': 'background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)'
      },
      backgroundImage: {
        'hero-card-primary': 'url(~/assets/images/card-image-primary.png)',
        'hero-card-light': 'url(~/assets/images/card-image-light.png)',
        'hero-card-light-mobile': 'url(~/assets/images/card-image-light-mobile.png)',
      }
    },
  },
  plugins: [],
}

