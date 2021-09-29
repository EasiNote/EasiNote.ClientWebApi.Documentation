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
            "invoke-api": "API(v1)",
            "basic-types": "API(v1) 基础类型",
            "direct-api": "API(v2)",
            "direct-api-element": "API(v2) 创建元素",
            "extend-subject-tool": "学科工具扩展",
            "debug-pages": "调试页面",
        },
        sort: sortFn
    },
    // "@vuepress/register-components": {
    //     componentsDir: [
    //         "../components/legacy/",
    //         "../components/legacy/components/",
    //         "../components/legacy/views/",
    //     ]
    // }
}