import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    // mutations设计原则 : 完成的事情尽可能单一
    // --添加商品数量
    addCounter(state, payload) {
      payload.count++
    },
    // --添加商品
    addToCart(state, payload) {
      state.cartList.push(payload)
    }
  },
  // 处理添加商品到购物车
  // 这里面的逻辑本可以在mutation里面完成，但是mutation的设计单一原则使他在actions里面定义更好m,mutations里面进行单一的逻辑处理
  // actions的方法内使用mutations里面的函数
  // actions的方法接收两个参数（context,payload）context为mutations内的方法，payload为更新的参数
  actions: {
    addCart(context, payload) {
      // 判断商品是否存在
      // --方法一
      // const oldProduct = null
      // for(let item of state.cartList) {
      //   if(item.iid == payload.iid) {
      //     oldProduct = item
      //   }
      // }
      // --方法二(查找之前数组中是否有该商品)
      const oldProduct = state.cartList.find( item => item.iid === payload.iid )

      if(oldProduct) {
        context.commit('addCounter', oldProduct)
      }else {
        oldProduct.count = 1
        // payload新添加的商品
        // state.cartList.push(payload)
        context.commit('addToCart', oldProduct)
      }
    }
  }
})

export default store