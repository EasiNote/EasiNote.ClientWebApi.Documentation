import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Vuex from 'vuex'
import store from './store/index.js';

export default async ({
    Vue, options, router 
}) => {
    Vue.use(ElementUI);
    Vue.use(hljs.vuePlugin);
    Vue.use(Vuex);
    Vue.mixin({ store: store });

    // https://github.com/vuejs/vuepress/issues/791
    await import('easinote-proxy').then(function (m) {
      Vue.use(m.default)
    });

    router.beforeEach((to, from, next) => {
        if (to.matched.length > 0 && to.matched[0].path === "*") {
          next("/404.html");
        } else {
          next();
        }
      });
}