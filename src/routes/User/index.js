import { connect } from 'react-redux'
import { injectReducer } from 'STORE/reducers'
import Message from 'COMPONENT/Message'
import Review from 'COMPONENT/Review'
import { setname, setRegData } from './store/user'

export default (store) => ({
  path : 'user',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const User = require('./containers/userContainer').default
      const reducer = require('./store/user').default
      injectReducer(store, { key: 'user', reducer })
      cb(null, User)
    }, 'user')
  },

  indexRoute: { // 对应 Message
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, connect(
          (state) => ({ 
            mine : state.user.mine, 
            regData : state.user.regData 
          }), 
          { setname, setRegData }
        )(Message))
      }, 'message')
    }
  },

  childRoutes: [
  { // 对应 Review
    path: 'review',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, connect(
          (state) => ({ 
            regData : state.user.regData 
          }), 
          { setRegData }
        )(Review))
      }, 'review')
    },
    onEnter: () => console.log('用户认证！')
  }]

})
