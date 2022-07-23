export default {
  server : {
    host : process.env.HOST,
    port : process.env.PORT
  },
  publicRuntimeConfig:{
    APP_NAME : process.env.APP_NAME
  },
  head: {
    title: process.env.APP_NAME | 'Apollo Unity',
    meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
    { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  loading: {
   color: "#10161d",
   continuous : true,
   duration : 200,
   height: '2px'
 },

 css: [
 {src: "@/assets/scss/app.scss", lang : "scss"},
 {src :  "@mdi/font/css/materialdesignicons.min.css"}
 ],

 plugins: [
 {src: "@/plugins/uikit", mode : "client"},
 {src:"@/plugins/filters", mode: 'client'},
 {src: '@/plugins/axios'},
 {src: '@/plugins/app'},
 {src: '@/plugins/theme'},
 {src: '@/plugins/validation'},
 ],
 components: true,
 buildModules: [
 ],

 modules: [

 '@nuxtjs/axios',
 '@nuxtjs/auth-next',
    // '@nuxtjs/pwa',
    ],


    axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL,
  },

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  build: {
  }
}
