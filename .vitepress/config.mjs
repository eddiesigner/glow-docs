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
      { text: 'Changelog', link: '/misc/changelog' },
      { text: 'Support', link: '/misc/support' },
      { text: 'Terms of Service', link: '/misc/terms-of-service' },
      { text: 'Features', link: 'https://glow.eduardogomez.io/features' },
      { text: 'Style Guide', link: 'https://glow.eduardogomez.io/style-guide' },
      { text: 'Buy Glow', link: 'https://www.lemonsqueezy.com/' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Install Theme', link: '/basics/install-theme' },
          { text: 'Update Theme', link: '/basics/update-theme' },
        ],
      },
      {
        text: 'Core Features',
        items: [
          { text: 'Hero Section', link: '/core/hero-section' },
        ],
      },
      {
        text: 'Additional Features',
        items: [
          { text: 'Tables', link: '/additional-features/tables' },
          { text: 'Theme Development', link: '/additional-features/theme-development' },
          { text: 'Resources', link: '/additional-features/resources' },
        ],
      },
    ],
    footer: {
      message: 'Designed and developed with ❤️ by <a href="https://eduardogomez.io" target="_blank">Eduardo Gómez</a>',
      copyright: 'Copyright © 2024 - present'
    }
  }
})
