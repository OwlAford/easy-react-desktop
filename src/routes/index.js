import CoreLayout from 'LAYOUT/CoreLayout'
import Home from './Home'
// import Counter from './Counter'
// import User from './User'

// 配置路由
export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  // 子路由不进行模块分割
  // childRoutes : [
  //   Counter(store)
  // ]
  
  //可将每个路由子模块切割成chunk加载，实现按需加载对应模块

  getChildRoutes (location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./Counter').default(store),
        require('./User').default(store),
        // 强制“刷新”页面的 hack
        { path: 'redirect', component: require('COMPONENT/Redirect').default },
        // 无路由匹配的情况一定要放到最后，否则会拦截所有路由
        { path: '*', component: require('COMPONENT/404').default }
      ])
    })
  }
  
})

export default createRoutes
