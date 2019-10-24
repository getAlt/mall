import {request} from './request'

// 获取banne/recommends数据
export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  })
}

// 获取goods数据(请求的数据类，请求的页码)
export function getHomeGoods(type, page) {
  return request({
    url: "/home/data",
    // 拼接请求的参数
    params: {
      type, page
    }
  })
}