# mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 项目知识点查漏补缺

```

1、props 的数据类型为数组或者对象是 默认参数必须是函数
```
```javascript

  props: {
    test: {
      type: Array,
      default() {
        return []
      }
    }
  }
```

#### axios封装

#### tabbar组件封装

#### vant库封装轮播组件

#### 选项卡组件封装

#### 商品数据请求（数据结构难点）

#### better-scroll滚动组件的使用及封装（细节）
```javascript
[配置相关属性]
  click: 监听scroll内的子组件点击事件 click: true
  probeType: 是否开启监听滚动距离
  pullUpLoad： 是否开启监听滚动到底部加载更多（0,1,2,3）3实时监听包括滑动的惯性距离 ，2手指在屏幕上的滑动的滚动距离不包括惯性距离
[监听方法]
  1、监听滚动距离，position为x，y的滚动距离参数
     this.scroll.on("scroll", function(position){})
  2、监听滚动底部加载更多
     this.scroll.on("pullingUp", function(){})
```
```javascript
注意事项：当监听下拉高度时图片过多情况下better-scroll无法准确监听高度
原因：图片未加载完成，高度不明确
解决方案：
  1、给图片添加@load监听事件，监听图片加载完成
  2、执行函数，将加载完成的事件传递给事件中心(通过给Vue的原型添加Vue实例则为事件中心)
     -- 创建事件中心 (Vue.prototype.$bus = new Vue())
     -- 将事件传递给事件中心 this.$bus.$emit("imageLoad")
     -- 监听事件中心的事件 this.$bus.$on("imageLoad", function(){})
  3、首页监听事件中心的图片加载完成事件
  4、执行better-scroll的refresh()事件重新加载高度
```

#### tab吸顶效果


#### mixin混入(代码复用)
`
类似继承 将混入的生命周期函数单独写到一个文件
通过import导入
在要是用这个生命周期函数的内容时在Vue实例内添加mixin:[导入的名字]进行使用

`

#### 锚点定位的思路
`
到达组件距离顶部的距离就是要scrollTop的距离
将滚动距离放在一个数组内
点击的某个板块的index值就是数组内对应的索引
在图片加载完成之后再获取相应模块距离顶部的距离然后再push到数组内
`

#### 添加购物车 (vuex)

`
通过vuex做数据管理
`