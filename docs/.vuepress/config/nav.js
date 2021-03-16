module.exports = [{
        text: 'Home',
        link: '/',
        icon: 'reco-home'
    },
    {
        text: 'Guide',
        icon: 'reco-document',
        link: '/guide/'
    },
    {
        text: '文档',
        icon: 'reco-api',
        items: [{
                text: "invoke-api",
                link: "/apis/invoke-api/",
            },
            {
                text: "direct-api",
                link: "/apis/direct-api/",
            },
            {
                text: "basic-types",
                link: "/basic-types/",
            },
            {
                text: "npm",
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
    }

]