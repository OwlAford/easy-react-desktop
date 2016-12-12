// 获取 reducer 注入方法
import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'counter',
  // 路由匹配时异步获取组件
  getComponent (nextState, cb) {
    // webpack 打包时通过 'require.ensure' 为异步加载模块创建分割点
    require.ensure([], (require) => {
      // 引入定义打包依赖模块
      const Counter = require('./containers/CounterContainer').default
      // 获取 counter 模块的 reducer 并注入
      const reducer = require('./store/counter').default
      injectReducer(store, { key: 'counter', reducer })
      // 回调里返回该组件
      cb(null, Counter)

    // webpack bundle 包名
    }, 'counter')
  }
})
