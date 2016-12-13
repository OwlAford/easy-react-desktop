import { connect } from 'react-redux'
import { getuidAsync } from '../store/user'

import User from '../components/User'

const mapDispatchToProps = {
  getuidAsync
}

const mapStateToProps = (state) => ({
  user : state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
