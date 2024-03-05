import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'freegpts.org',
  description: '付出的人应该得到回报！',
  theme: defaultTheme({
    logo: '/apple-touch-icon.png',
    repo: 'freegpts-org/freegpts-org.github.io',
    docsBranch: "master",
    docsDir: "docs",
    navbar: [
        { text: '首页', link: '/' },
        { text: '反代教程', link: '/guide/' },
        { text: '项目推荐', link: '/project/' },
        { text: '违规公示', link: '/shame/' },
        { text: '公共镜像', link: 'https://chat.freegpts.org' },
        { text: '免费车队', link: 'https://share.freegpts.org' },
        { text: '交流社区', link: 'https://github.com/orgs/freegpts-org/discussions' },
    ],
  })
})