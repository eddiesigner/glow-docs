import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Glow Ghost Theme",
  description: "Theme official documentation",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Changelog', link: '/misc/changelog' },
      { text: 'Terms of Service', link: '/misc/terms-of-service' },
      { text: 'Features', link: 'https://glow.eduardogomez.io/features' },
      { text: 'Style Guide', link: 'https://glow.eduardogomez.io/style-guide' },
      { text: 'Buy Glow', link: 'https://gumroad.com/' },
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    footer: {
      message: 'Designed and developed with ❤️ by <a href="https://eduardogomez.io" target="_blank">Eduardo Gómez</a>',
      copyright: 'Copyright © 2024 - present'
    }
  }
})
