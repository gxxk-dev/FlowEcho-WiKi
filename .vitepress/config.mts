import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FlowEcho WiKi",
  description: "Awe is all.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],

    sidebar: [
      { text: '关于FlowEcho WiKi/Team', link: '/TODO'},
      {
        text: '掌控板',
        items: [
          { text: '掌控板概述', link: '/hpy/index'}
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gxxk-dev/FlowEcho-WiKi' }
    ]
  }
})
