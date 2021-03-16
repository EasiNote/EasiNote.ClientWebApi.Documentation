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
        }
    },
}