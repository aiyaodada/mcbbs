import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import request from '@/utils/request'
import AuthPlugin from '@/utils/auth';
import tools  from './utils/tools';
Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.use(VueAxios, axios)
Vue.use(ElementUI);
Vue.use(AuthPlugin); // 注册插件
Vue.prototype.$tools = tools;
new Vue({
    el: '#app',
    router,
    render: h => h(App),
})