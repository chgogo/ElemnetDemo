// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './assets/index.scss'
Vue.use(ElementUI)

import echarts from 'echarts' // 图表
Vue.prototype.$echarts = echarts

import Vuex from 'vuex' // vuex
import store from './store/store'
Vue.use(Vuex)

Vue.config.productionTip = false;
router.beforeEach((to,from,next)=>{
  if(Boolean(localStorage.getItem('Tonk')) || to.name=='login'){
    next()
  } else {
    //如果没有token值,则跳到登录页面
    next({path:'/login'})
  }
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
