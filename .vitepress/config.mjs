import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Glow Theme Documentation",
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
          { text: 'Navigation', link: '/basics/navigation' },
          { text: 'Publication Settings', link: '/basics/publication-settings' },
          { text: 'Theme Settings', link: '/basics/theme-settings' },
        ],
      },
      {
        text: 'Core Features',
        items: [
          { text: 'Landing Pages', link: '/core-features/landing-pages' },
          { text: 'Membership and Subscriptions', link: '/core-features/members' },
          { text: 'Newsletter Page', link: '/core-features/newsletter-page' },
          { text: 'Authors Page', link: '/core-features/authors-page' },
          { text: 'Tags Page', link: '/core-features/tags-page' },
          { text: 'Theme Appearance', link: '/core-features/theme-appearance' },
          { text: 'Theme Translation', link: '/core-features/theme-translation' },
          { text: 'Comments', link: '/core-features/comments' },
        ]
      },
      {
        text: 'Additional Features',
        items: [
          { text: 'Social Icons', link: '/additional-features/social-icons' },
          { text: 'Code Highlighting', link: '/additional-features/code-highlighting' },
          { text: 'Tables', link: '/additional-features/tables' },
          { text: 'Buttons and Forms', link: '/additional-features/buttons-forms' },
          { text: 'Theme Development', link: '/additional-features/theme-development' },
          { text: 'Resources', link: '/additional-features/resources' },
        ],
      },
    ],
    outline: [2, 3],
    footer: {
      message: 'Designed and developed with ❤️ by <a href="https://eduardogomez.io" target="_blank">Eduardo Gómez</a>',
      copyright: 'Copyright © 2024 - present'
    }
  }
})
