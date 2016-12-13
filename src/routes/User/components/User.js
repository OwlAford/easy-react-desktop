import React, { Component, PropTypes } from 'react'

export default class Counter extends Component {
  static propTypes = {
    user     : React.PropTypes.object.isRequired,
    getuidAsync : React.PropTypes.func.isRequired
  }

  componentDidMount () {
    console.log('dom更新完毕！')
  }

  render() {
    return (
      <div style={{ margin: '0 auto' }} >
        <h1>UID:{this.props.user.uid}</h1>
        <button className='btn btn-default' onClick={this.props.getuidAsync}>
          Get UID
        </button>
      </div>
    )
  }
}