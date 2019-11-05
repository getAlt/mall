// 使用抽取的方法名
import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations_type'

export default {
  // mutations设计原则 : 完成的事情尽可能单一
  // --添加商品数量
  [ADD_COUNTER](state, payload) {
    payload.count++
    // 保存到本地
    window.localStorage.setItem('cartListLoacl', JSON.stringify(payload))
  },
  // --添加商品
  [ADD_TO_CART](state, payload) {
    // 保存到本地
    window.localStorage.setItem('cartListLoacl', JSON.stringify(payload))
    payload.selector = true
    state.cartList.push(payload)
  }
}