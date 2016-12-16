import { Row, Col, Input, Button } from 'antd'
import React, { Component, PropTypes } from 'react'
import MessageForm from './MessageForm'
import handleChange from 'UTIL/handleChange'

export default class Message extends Component {
  
  constructor (props) {
    super(props)
    this.state = { inputVal: '' }
    // 将handleChange方法绑定在this上
    this.handleChange = handleChange.bind(this)
  }

  getVal (ev) {
    console.log(ev.target.value)
  }

  render() {
    let { mine, router, setname } = this.props
    return (
      <div>
        <Row type="flex" justify="space-between" style={{padding: '20px'}}>
          <Col span={3}>
          设置全局名字：
          </Col>
          <Col span={12}>
            <Input 
              placeholder="请输入用户名字" 
              name="inputVal" 
              value={this.state.inputVal}
              onChange={this.handleChange}
            />
          </Col>
          <Col span={3} style={{width: '100px'}}>
            <Button type="primary"  onClick={() => setname(this.state.inputVal)}>设置名字</Button>
          </Col>
          <Col span={3} style={{width: '110px'}}>
            <Button type="primary" onClick={router.goBack}>返回上一页</Button>
          </Col>
        </Row>
        <MessageForm setName={setname} mineName={mine} />
      </div>
    )
  }
}