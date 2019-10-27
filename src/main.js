import Vue from 'vue'
import App from './App.vue'
// 配置路由
import router from "./router"

Vue.config.productionTip = false

// 添加事件中心（事件总线）(添加在vue原型上)
Vue.prototype.$bus = new Vue();


new Vue({
  render: h => h(App),
  router
}).$mount('#app');
// Vue.config.silent = true
