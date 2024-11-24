import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  app: {
    // For GitHub pages.
    //baseURL: '/portfolio/',
    head: {
      title: 'Potter Portfolio - Web Developer',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content: 'Experienced web developer with 12 years in the field, combining a background in computer graphics, business, and leadership. Explore my professional accomplishments and get in touch if you\'re looking for a skilled and creative collaborator.'},
        {name: 'format-detection', content: 'telephone=no'}
      ],
      script: [
        {
          src: "https://unpkg.com/css-doodle@0.30.4/css-doodle.min.js"
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Roboto:wght@300;400;700&display=swap'
        }
      ]
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['css-doodle'].includes(tag)
    }
  },
  css: [
    '@/assets/scss/global.scss',
  ],
  nitro: {
    compressPublicAssets: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/_variables.scss";`
        }
      }
    }
  },
  modules: ['nuxt-gtag'],
})
