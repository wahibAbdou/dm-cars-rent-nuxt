export default defineNuxtConfig({
  vite: {
    server: {
      cors: false
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_vars.scss" as *;',
        },
      },
    },
  },
  runtimeConfig: {
		public: {
			...process.env
		}
	},
  css: ['~/assets/css/global.scss'],
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss', 'vue3-carousel-nuxt', '@pinia/nuxt'],
  googleFonts: {
    families: {
      'Plus+Jakarta+Sans': [400, 500, 600, 700, 800],
    },
    display: 'block'
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  devtools: { enabled: true }
})
