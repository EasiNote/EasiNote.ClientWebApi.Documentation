module.exports = [{
        text: 'Home',
        link: '/',
        icon: 'reco-home'
    },
    {
        text: '指南',
        icon: 'reco-document',
        link: '/guide/'
    },
    {
        text: "API 文档",
        icon: 'reco-api',
        items: [
            {
                text: 'API(v1)',
                icon: 'reco-api',
                link: '/apis/invoke-api/'
            },
            {
                text: "API(v1) 基础类型",
                icon: "reco-api",
                link: "/apis/basic-types/",
            },
            {
                text: "API(v2)",
                icon: 'reco-api',
                link: "/apis/direct-api/"
            },
            {
                text: "API(v2) 具体元素",
                icon: 'reco-api',
                link: "/apis/direct-api-element/"
            },
            {
                text: "学科工具扩展",
                icon: "reco-document",
                link: "/apis/extend-subject-tool/",
            },
            {
                text: "npm 包",
                icon: "reco-document",
                link: "/apis/npm/",
            },
        ]
    },
    {
        text: 'Debug',
        icon: 'reco-other',
        link: '/debug-pages/'
    },
    {
        text: 'About',
        icon: 'reco-account',
        link: '/about/'
    },
    {
        text: 'Github',
        icon: 'reco-github',
        link: 'https://github.com/EasiNote/EasiNote.ClientWebApi.Documentation'
    }

]