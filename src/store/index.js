import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
// state
const state = {
  cartList: []
}

//actions (请求后台api)
const actions = {}

//mutations
const mutations = {
  addCart(state, e) {
    // state.cartList.push(e)
    const t = state.cartList.find(item => item.id === e.id)
    if (t) {
      t.count++
    } else {
      e.count = 1
      e.checked = false//初始不勾选
      state.cartList.push(e)
    }
  }
}

//创建 store对象
const store = new Vuex.Store({
  state,
  actions,
  mutations
})
export default store
