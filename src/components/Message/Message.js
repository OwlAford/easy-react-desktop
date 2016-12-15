import React, { Component, PropTypes } from 'react'
import handleChange from 'UTIL/handleChange'

export default class Message extends Component {
  
  constructor (props) {
    super(props)
    this.state = { inputVal: '' }
    // 将handleChange方法绑定在this上
    this.handleChange = handleChange.bind(this)
  }

  componentDidMount () {
    console.log(this.props)
  }

  getVal (ev) {
  	console.log(ev.target.value)
  }

  render() {
  	let { mine, router, setname } = this.props
    return (
      <div>
	    <h1>我是留言板：</h1>
	    <button onClick={router.goBack}>
	    返回
	    </button>
	    {mine}
	    <button onClick={() => setname(this.state.inputVal)}>
	    设置名字
	    </button>
	    <input 
	      placeholder="请输入用户名字" 
	      name="inputVal" 
	      value={this.state.inputVal}
	      onChange={this.handleChange}
	    />
	  </div>
    )
  }
}