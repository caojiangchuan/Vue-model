import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios'
Vue.use(Vuex)

const state = {
  isShow: false,
  List: []
}
const mutations = {// 改变状态
  change (state) {
    state.isShow = true
  },
  change2 (state) {
    state.isShow = false
  }
  // getdata (state, res) {
  //   state.List = res
  //   console.log(state.List)
  // } 结合actions接口

  // Axios.post('/h5Gateway/customer/getCarousel', {sysCode: 'H5'})
  //   .then(function (response) {
  //     console.log(response)
  //     state.List = response
  //   })
  //   .catch(function (error) {
  //     console.log(error)
  //   }) // 将接口数据保存在状态管理 对应的调用页面在created中 使用this.$store.commit(‘getdata')获取 然后将值直接带入this.$store.state.List
}

const actions = {// 异步使用改变状态Mutation
  achange (context) {
    context.commit('change')
  },
  achange2 (context) {
    context.commit('change2')
  },
  getdata2 (context) {
    // Axios.post('/h5Gateway/customer/getCarousel', {sysCode: 'H5'})
    //   .then(function (response) {
    //     context.commit('getdata', response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })   //   结合mutation中的getdata，将接口数据保存在状态管理 对应的调用页面在created中 使用this.$store.dispatch(‘getdata')获取 然后将值直接带入this.$store.state.List
    // }
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions

})

export default store
