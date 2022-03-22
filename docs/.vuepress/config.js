const { path } = require('@vuepress/utils')

module.exports = {
  title: 'WHS 硬件开发平台',
  lang: 'zh-CN',
  description: '下一代 硬件开发平台',
  head: [
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
          // { text: '注释',link: '/comment.html'},
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
          // { text: 'Comments',link: '/comment.html'},
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
          '/en/': {
            placeholder: 'Search Documentation',
            translations: {
              button: {
                buttonText: 'Search Documentation',
              },
            },
          },
          '/': {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
              },
            },
          },
        },
      },
    ],
    // [
    //   '@vuepress/plugin-search',
    //   {
    //    // 排除首页
    //     isSearchable: (page) => page.path !== '/',
    //     locales: {
    //       '/': {
    //         placeholder: '搜索',
    //       },
    //       '/en/': {
    //         placeholder: 'Search',
    //       },
    //     },
    //   },
    // ],
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
