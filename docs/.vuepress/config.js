const { path } = require('@vuepress/utils')

module.exports = {
  title: 'WHS 硬件开发平台',
  lang: 'zh-CN',
  description: '下一代 硬件开发平台',
  head: [
    ['meta', {  "http-equiv": 'pragram', content: 'no-cache' }],
    ['meta', {  "http-equiv": 'cache-control', content: 'no-cache, no-store, must-revalidate' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: './hardware32.png' }],
    ['script', { src: 'https://cdn.wwads.cn/js/makemoney.js', async: '' }],
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
  // // 主题和它的配置
  // theme: '@vuepress/theme-default',
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    repo: 'https://github.com/rayzhb/WHS',
    docsRepo: 'https://github.com/rayzhb/WHS_Document',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    logo: './hardware32.png',
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
          {text: '快速上手',link: '/start.html'},
          { text: '指南',link: '/guide.html'},
          { text: '后续',link: '/future.html'},
          {
            text: '示例',
            children: [ 
              { text: '机器人',link: '/hardware/agv.html'},
              { text: '机器人地图设计',link: '/hardware/agvmapdesign.html'},
              { text: '声音',link: '/hardware/audio.html'},
              { text: '重量',link: '/hardware/weight.html'},
          ],
          },
        ],
      },
      '/en/': {
        selectLanguageName: 'English',
        repoLabel:"Site",
        // page meta
        editLinkText: 'Edit this page on GitHub',
        navbar: [
          {text: 'Strat',link: '/en/start.html'},
          { text: 'Guide',link: '/en/guide.html'},
          { text: 'Future',link: '/en/future.html'},
          {
            text: 'Demos',
            children: [ 
              { text: 'AGV',link: '/en/hardware/agv.html'},
              { text: 'AGV MAP DESIGN',link: '/en/hardware/agvmapdesign.html'},
              { text: 'AUDIO',link: '/en/hardware/audio.html'},
              { text: 'WEIGHT',link: '/en/hardware/weight.html'},
          ],
          },
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
  },
  plugins: [
    [
      '@vuepress/docsearch',
      {
        appId: 'ZWUBKBHZT0',
        apiKey: '796955fbbe154ad615a249f76ea5f894',
        indexName: 'whs-ray-zhb',
        locales: {
          '/': {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消',
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除',
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接',
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者',
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  openIssueText: '你认为该查询应该有结果？',
                  openIssueLinkText: '点击反馈',
                },
              },
            },
          },
        },
      },
    ],
    [
      '@vuepress/pwa',
      {
        skipWaiting: false,
      },
    ],
    [
      '@vuepress/plugin-pwa-popup',
      {
        locales: {
          '/en/': {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
          '/': {
            message: '发现新内容可用',
            buttonText: '刷新',
          },
        },
      },
    ],
  ]
}
