import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import pageOne from '@/components/page/pageone'
import pageOneone from '@/components/page/pageOneone'
import pageTwo from '@/components/page/pagetwo'
import pageThree from '@/components/page/pagethree'
import pageFour from '@/components/page/pagefour'
import ueditor from '@/components/page/ueditor'
import xx from '@/components/page/xx'

Vue.use(Router)
const originalPush = Router.prototype.push // 这段代码解决点击菜单栏报错的问题
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: login,
      hidden: true,
        meta: {
            requireAuth: false
        }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      hidden: true,
        meta: {
            requireAuth: false
        }
    },
    {
      path: '/index',
      name: 'home',
      component: home,
      children:[
        {
          path: '/one',
          name: 'pageOne',
          component: pageOne
        },
        {
          path: '/oneone',
          name: 'pageOneone',
          component: pageOneone
        },
        {
          path: '/two',
          name: 'pageTwo',
          component: pageTwo
        },
        {
          path: '/three',
          name: 'pageThree',
          component: pageThree,
        },
        {
          path: '/four',
          name: 'pageFour',
          component: pageFour,
        },
        {
          path: '/ueditor',
          name: 'ueditor',
          component: ueditor,
        },
        {
          path: '/xx',
          name: 'xx',
          component: xx,
        },
      ]
    },
  ]
})
