// 使用抽取的方法名
import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations_type'

export default {
  addCart(context, payload) {
    // --方法二(查找之前数组中是否有该商品)
    let oldProduct = context.state.cartList.find( item => item.iid === payload.iid )
    if(oldProduct) {
      context.commit(ADD_COUNTER, oldProduct)
    }else {
      payload.count = 1
      context.commit(ADD_TO_CART, payload)
    }
  }
}