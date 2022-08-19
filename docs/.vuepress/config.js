const $withBase = require('vue').$withBase
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  chainWebpack: (config, isServer) => {
    config.module
      .rule('pdfs')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: `[path][name].[ext]`,
      });

    config.module
      .rule('vue')
      .uses.store.get('vue-loader')
      .store.get('options').transformAssetUrls = {
      video: ['src', 'poster'],
      source: 'src',
      img: 'src',
      image: ['xlink:href', 'href'],
      a: 'href',
    };
  },
  base: '/blog/',
  theme: 'reco',
  themeConfig: {
    authorAvatar: '/log.png',
    noFoundPageByTencent: false,
    nav: [
      {
        text: '首页',
        link: '/',
        icon: '/log.png',
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
    logo: '/log.png',
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


