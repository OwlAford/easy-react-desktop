import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'user',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const User = require('./containers/userContainer').default
      const reducer = require('./store/user').default
      injectReducer(store, { key: 'user', reducer })
      cb(null, User)
    }, 'user')
  }
})
