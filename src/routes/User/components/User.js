import React, { Component, PropTypes } from 'react'
import List from './List'

export default class Counter extends Component {
  static propTypes = {
    user        : PropTypes.object.isRequired,
    getuidAsync : PropTypes.func.isRequired,
    clear       : PropTypes.func.isRequired
  }

  constructor (props, context) {
    super(props, context)
    this.state = { 
      killer: 'Alex',
      groups: [
        {
          name: '杭州银行',
          city: '杭州',
          time: '2016-12-01'
        },
        {
          name: '宁波银行',
          city: '宁波',
          time: '2016-12-02'
        },
        {
          name: '上海银行',
          city: '上海',
          time: '2016-12-03'
        },
        {
          name: '南昌银行',
          city: '南昌',
          time: '2016-12-03'
        },
        {
          name: '广发银行',
          city: '广州',
          time: '2016-12-03'  
        }  
      ]
    }
  }

  componentDidMount () {
    console.log('dom更新完毕！')
  }

  testClick () {
    alert('自定义事件方法！')
  }

  render() {
    let groups = this.state.groups
    return (
      <div style={{ margin: '0 auto' }} >
        <h1>UID:{this.props.user.uid}</h1>
        <button className='btn btn-default' onClick={this.props.getuidAsync}>
          Get UID
        </button>
        <br/>
        <button className='btn btn-default' onClick={this.props.clear}>
          Clear UID
        </button>
        <br/>
        <button className='btn btn-default' onClick={this.testClick}>
          test btn
        </button>
        <List
          groups={groups}
        />
        { this.props.children }
      </div>
    )
  }
}