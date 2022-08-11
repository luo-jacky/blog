module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    logo: 'https://gitee.com/luojinyuan/picture/raw/master/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/public/assts'
      }
    }
  }

}