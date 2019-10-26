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

#### 商品数据请求（难点）

#### better-scroll滚动组件的使用及封装（细节）
