import { request } from './request'

export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}
// 通过class类整合杂乱无章的数据(商品信息)
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services.filter((item,index) => {
      return index>1
    });
    this.realPrice = itemInfo.lowNowPrice
  }
}

// 商家信息
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

// 参数信息
export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

//  推荐商品
export function getRecommend() {
  return request({
    url: "/recommend"
  })
}