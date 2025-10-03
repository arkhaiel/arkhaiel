// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/seo', '@nuxt/content', "nitro-cloudflare-dev"],
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
          integrity: 'sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+',
          crossorigin: 'anonymous',
        },
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'arkhaiel' }
      ]
    },
  },
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://arkhaiel.dev',
    name: 'arkhaiel.dev',
    // description: 'Welcome to my awesome site!',
    defaultLocale: 'fr', // not needed if you have @nuxtjs/i18n installed
  },
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
    build: {
      markdown: {
        remarkPlugins: {
          'remark-math': {},
        },
        rehypePlugins: {
          'rehype-katex': {},
        },
        highlight: {
          theme: {
            // Default theme (same as single string)
            default: 'github-light',
            light: 'github-light',
            // Theme used if `html.dark`
            dark: 'github-dark',
            // Theme used if `html.sepia`
            sepia: 'monokai',
          },
          langs: ['py', 'md', 'http'],
        },
      },
    },
  },

  compatibilityDate: '2025-01-20',
  nitro: {
    prerender: { 
      routes: ['/scrivener'],
      autoSubfolderIndex: false 
    }
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ["@cloudflare/workers-types/2023-07-01"],
      },
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
