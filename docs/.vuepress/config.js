const $withBase = require('vue').$withBase
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/blog/',
  theme: 'reco',
  themeConfig: {
    noFoundPageByTencent: false,
    nav: [
      {
        text: '首页',
        link: '/',
        icon: '@alias/assts/log.png',
      },
    ],
    subSidebar: 'auto',
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '分类',
      },
      tag: {
        location: 3,
        text: '标签',
      },
    },
    logo: '@alias/assts/log.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
  },
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/.vuepress/public/'
      }
    }
  }
};


