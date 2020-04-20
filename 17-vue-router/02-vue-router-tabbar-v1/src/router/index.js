import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'//缺省时候重定向到/home
  },
  {
    path: '/home',
    component: () => import ('../views/home/Home.vue')
  },
  {
    path: '/categories',
    component: () => import ('../views/categories/Categories.vue')
  },
  {
    path: '/shop',
    component: () => import ('../views/shop/Shop.vue')
  },
  {
    path: '/profile',
    component: () => import ('../views/profile/Profile.vue')
  },
]

export default new Router({
  routes,
  // linkActiveClass:"active"
})
