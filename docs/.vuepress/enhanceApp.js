import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

export default ({
    Vue, options, router 
}) => {
    Vue.use(ElementUI);
    Vue.use(hljs.vuePlugin);
}