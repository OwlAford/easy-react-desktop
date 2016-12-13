import { connect } from 'react-redux'
import { getuidAsync, setuid } from '../store/user'

import User from '../components/User'

const mapDispatchToProps = {
  clear : () => setuid('default'),
  getuidAsync
}

const mapStateToProps = (state) => ({
  user : state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
