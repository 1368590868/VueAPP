import VueRouter from 'vue-router'

import Detail from '../views/detail/detail.vue'
import Home from '../views/home/Home.vue'

//就是一个router对象
const routes = [
  {
    path: '/', //默认路由
    name: 'home',
    component: Home
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]
/* { 有需要，可以这样配置404找不到的路由
    path: '*',
    component: Home
} */

const router = new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})

export default router
