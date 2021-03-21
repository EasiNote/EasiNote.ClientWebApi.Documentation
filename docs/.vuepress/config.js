import projectConst from "./project-const"

module.exports = {
    base: projectConst.base,
    title: '希沃白板文档',
    description: '希沃白板，为互动教学而生',
    head: [
        ['link', {
            rel: 'icon',
            href: '/assets/img/favicon.ico'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }]
    ],

    plugins: require("./config/plugins"),
    theme: 'reco',
    themeConfig: {
        logo: '/assets/img/easinote.png',
        author: '希沃白板团队',
        authorAvatar: '/assets/img/easinote.png',
        lastUpdated: "更新时间",
        nav: require("./config/nav"),
        noFoundPageByTencent: false,
        sidebar: {

        },
    }
}