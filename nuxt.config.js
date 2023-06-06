export default {
  ssr: false,

  head: {
    title: 'main',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/scss/globals.scss'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
  ],

  modules: ['@nuxtjs/axios', 'nuxt-sass-resources-loader'],

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },

  axios: {
    baseURL: '/',
  },

  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
      },
    },
  },
}
