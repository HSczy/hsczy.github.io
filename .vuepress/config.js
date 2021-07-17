module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
      title: "Work For 996",
      description: '9点起床，9点睡觉，每天工作6个小时',
    }
  }, 
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    mode: 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: false,
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      // { text: '归档', 
      //   icon: 'reco-message',
      //   items: [
      //     { text: 'vuepress-reco', link: '/docs/theme-reco/' }
      //   ]
      // },
      {
        text: '联系方式',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/HSczy', icon: 'reco-github' }
        ]
      }
    ],
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
    ],
    locales: {
      '/': {
        lang: "zh-CN",
        recoLocales: {
          homeBlog: {
            article: '文章', // 默认 文章
            tag: '标识', // 默认 标签
            category: '类别', // 默认 分类
            friendLink: '友链' // 默认 友情链接
          },
          pagation: {
            prev: '上一页',
            next: '下一页',
            go: '前往',
            jump: '跳转至'
          }
        }
      }
    },
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    sidebarDepth:2,
    // 最后更新时间
    lastUpdated: '最近更新于',
    // 作者
    author: '陈震宇',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    // 项目开始时间
    startYear: '2021',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  },
}
