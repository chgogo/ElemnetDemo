import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: { // 存储在全局的state值
    name: '小黑',
    age: 50,
    count: 1,
  },
  mutations: { // 利用mutations 直接修改state中的值
    add(state) {
      state.count = state.count + 1
    },
    jie(state,n) {
      state.count = state.count - n
    }
  },
  actions: { // 在actions中 在提交mutations去改变state中的值
    addfun(context) {
      context.commit('add')
    },
    jiefun(context,n) {
      context.commit('jie',n)
    },
  },
})
export default store