import Vue from 'vue'
import App from './App.vue'

import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//全局css文件
import '@/assets/styles/border.css'
import '@/assets/styles/reset.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
import router from './router/index.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
