import Vue from 'vue'
import App from './App.vue'
// 配置路由
import router from "./router"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
// Vue.config.silent = true
