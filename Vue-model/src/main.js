// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import animated from 'animate.css' // npm install animate.css --save安装，再引入
import Vuex from 'vuex'
import store from './vuex/index'
import Axios from 'axios'

// 修改原型链，全局使用axios,这样之后可在每个组件的methods中调用$axios命令完成数据请求
Vue.prototype.$axios = Axios
Vue.use(animated)
Vue.use(Vuex)
Vue.config.productionTip = false// 引入store
Axios.interceptors.request.use(function (config) {
  // store.state.isShow = false 或者

  store.dispatch('achange')
  // setTimeout(function () {
  //   store.state.isShow = false
  // }, 5000)

  return config
})
// 定义一个响应拦截器
Axios.interceptors.response.use(function (config) {
  store.dispatch('achange2')
  return config
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
