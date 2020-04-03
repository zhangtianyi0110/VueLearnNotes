/**
 * 配置路由相关信息
 * 1.先导入vue实例和vue-router实例
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

// 2. 通过Vue.use(插件)，安装插件
Vue.use(Router)
//3. 创建 router路由对象
const routes = [
  {
    path: '',
    redirect: '/home'//缺省时候重定向到/home
  },
  //配置路由和组件之间的对应关系
  {
    path: '/home',//home  前端路由地址
    name: 'Home',
    component: Home, //组件名
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: '/home/news'//缺省时候重定向到/home/news
      // },
      {
        path: 'news',//子嵌套路由 无须加/
        name: 'News',
        component: () => import('@/components/HomeNews') //懒加载组件
      },
      {
        path: 'message',
        name: 'Message',
        component: () => import('@/components/HomeMessage') //懒加载组件
      }
    ]
  },
  {
    path: '/about',//about 前端路由地址
    name: 'About',
    component: () => import('@/components/About'), //懒加载组件
    beforeEnter: (to, from, next) => {
      console.log('来自' + from.path + ',要去' + to.path)
      next()
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userId',
    name: 'User',
    component: () => import('@/components/User'), //懒加载组件
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/components/Profile'), //懒加载组件
    meta: {
      title: '档案'
    }
  }
]
const router = new Router({
  //配置路由和组件之间的应用关系
  routes,
  mode: 'history',//修改模式为history
  linkActiveClass: 'active'
})

/**
 *
 * 前置守卫：从from跳转到to
 * from 来的路由
 * to 要去的路由
 */
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title //给目标路由的页面的title赋值
  next()//必须调用，不调用不会跳转
})
/**
 * 后置钩子
 */
router.afterEach((to, from) => {
  console.log('后置钩子调用了----')
})

//4.导出router实例
export default router
