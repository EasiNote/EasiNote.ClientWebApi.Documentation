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
        text: '文档(间接API)',
        icon: 'reco-api',
        link: '/apis/invoke-api/'
    },
    {
        text: "文档(直接API)",
        icon: 'reco-api',
        items: [{
                text: "API",
                link: "/apis/direct-api/"
            },
            {
                text: "API-具体元素",
                link: "/apis/direct-api-element/"
            }
        ]
    },
    {
        text: "文档(其它)",
        icon: 'reco-api',
        items: [{
                text: "基础类型",
                link: "/apis/basic-types/",
            },
            {
                text: "npm 包",
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