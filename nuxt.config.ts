export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Plus+Jakarta+Sans': true,
    },
    display: 'block'
  },
  devtools: { enabled: true }
})
