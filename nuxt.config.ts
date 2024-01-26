export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_vars.scss" as *;',
        },
      },
    },
  },
  css: ['~/assets/css/global.scss'],
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss'],
  googleFonts: {
    families: {
      'Plus+Jakarta+Sans': true,
    },
    display: 'block'
  },
  devtools: { enabled: true }
})
