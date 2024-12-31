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
      { text: '关于我们', link: '/TODO'},
      {
        text: '掌控板',
        items: [
          { text: '掌控板概述', link: '/hpy/index'}
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gxxk-dev/FlowEcho-WiKi' }
    ],
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    outline: { label: '目录' },
    returnToTopLabel: '返回顶部',
    editLink: { pattern: 'https://github.com/gxxk-dev/FlowEcho-WiKi/blob/main/:path', text: '源代码', },
    lastUpdated: { text: '更新于' },
    docFooter: { prev: '上一篇', next: '下一篇' },
  },
  sitemap: {
    hostname: 'https://wiki.flowecho.org'
  }
})
