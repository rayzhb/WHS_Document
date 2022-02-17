module.exports = {
  title: 'WHS 硬件开发平台',
  lang: 'zh-CN',
  description: '下一代 硬件开发平台',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: './whs.ico' }],
    ['script', { src: 'https://cdn.wwads.cn/js/makemoney.js', async: '' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'WHS 硬件开发平台',
      description: '下一代 硬件开发平台',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Warehouse Hardware System',
      description: 'Warehouse Hardware System',
    },

  },
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    repo: 'https://github.com/rayzhb/WHS',
    docsRepo: 'https://github.com/rayzhb/WHS_Document',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    logo: './whs.ico',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        repoLabel:"站点",
        // page meta
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
        navbar: [
          {text: '快速上手',link: '/start'},
          { text: '指南',link: '/guide'},
          { text: '后续',link: '/future'},
          {
            text: '示例',
            children: [ 
              { text: '机器人',link: '/hardware/agv'},
              { text: '机器人地图设计',link: '/hardware/agvmapdesign'},
              { text: '声音',link: '/hardware/audio'},
              { text: '重量',link: '/hardware/weight'},
          ],
          }
        ],
      },
      '/en/': {
        selectLanguageName: 'English',
        repoLabel:"Site",
        // page meta
        editLinkText: 'Edit this page on GitHub',
        navbar: [
          {text: 'Strat',link: '/en/start'},
          { text: 'Guide',link: '/en/guide'},
          { text: 'Future',link: '/en/future'},
          {
            text: 'Demos',
            children: [ 
              { text: 'AGV',link: '/en/hardware/agv'},
              { text: 'AGV MAP DESIGN',link: '/en/hardware/agvmapdesign'},
              { text: 'AUDIO',link: '/en/hardware/audio'},
              { text: 'WEIGHT',link: '/en/hardware/weight'},
          ],
          }
        ],
      },
    },
  },
  markdown: {
    anchor: {
      renderPermalink: require('./render-perma-link')
    },
    config: (md) => {
      md.use(require('./markdown-it-custom-anchor'))
    },
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          path.resolve(__dirname, '../../packages/@vuepress')
        ),
    },
  }
}
