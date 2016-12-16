import { connect } from 'react-redux'
import { getuidAsync, setuid } from '../store/user'

import UserView from '../components/UserView'

const mapDispatchToProps = {
  clear : () => setuid('default'),
  getuidAsync
}

const mapStateToProps = (state) => ({
  user : state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(UserView)
