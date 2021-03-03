import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui';
import EasiNoteProxy from 'easinote-proxy';
import 'element-ui/lib/theme-chalk/index.css';

//将引入的组件注册为全局Vue组件
Vue.use(Element);

Vue.config.productionTip = false

EasiNoteProxy.init().then(()=>{
  window['Proxy123'] = EasiNoteProxy.Proxy
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
})

