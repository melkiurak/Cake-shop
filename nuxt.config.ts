import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from 'node:url'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins:[
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/test-utils',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@pinia/nuxt'
  ],
   alias: {
    '@components': fileURLToPath(new URL('./components', import.meta.url)),
    '@img': fileURLToPath(new URL('./public/img', import.meta.url)),
  }
})