const sortFn = key => (a, b) => {

    let a1 = a[key].toLowerCase();
    let a2 = b[key].toLowerCase();

    if (a1 === 'readme') {
        return -1;
    }
    if (a2 === 'readme') {
        return 1;
    }

    if (a1 === a2) {
        return 0;
    }

    return a1 > a2 ? 1 : -1;
}

module.exports = {
    '@vuepress/last-updated': {
        transformer: (timestamp, lang) => {
            const moment = require('moment')
            moment.locale(lang)
            // Tuesday, March 9, 2021 22:19
            return moment(timestamp).format('dddd, MMMM D, YYYY HH:mm')
        }
    },
    "vuepress-plugin-auto-sidebar": {
        titleMap: {
            "guide": "指南",
            "basic-types": "基础类型",
            "direct-api": "直接 API",
            "direct-api-element": "直接 API(创建元素)",
            "invoke-api": "间接 API",
        },
        sort: sortFn
    },
}