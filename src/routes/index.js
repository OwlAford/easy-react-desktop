import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import CounterRoute from './Counter'

// 配置路由
export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  // 子路由不进行模块分割
  // childRoutes : [
  //   CounterRoute(store)
  // ]
  
  //可将每个路由子模块切割成chunk加载，实现按需加载对应模块

  getChildRoutes (location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./Counter').default(store)
      ])
    })
  }
  
})

export default createRoutes
