import React, { Component, PropTypes } from 'react'
import { Row, Col, Button } from 'antd'

export default class CounterView extends Component {

  static propTypes = {
    counter     : PropTypes.object.isRequired,
    doubleAsync : PropTypes.func.isRequired,
    logtime     : PropTypes.func.isRequired,
    increment   : PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  enterLoading(e) {
    let self = this
    self.setState({ loading: true })
    self.props.doubleAsync(() => self.setState({ loading: false }))
  }

  render() {
    return (
      <div className="content">
        <div className='content-cell'>
          <Row>
            <Col span={6}>
              <span style={{lineHeight: '28px'}}>数字叠加器: {this.props.counter.count}</span>
            </Col>
            <Col span={8}>
              <Button type="primary" onClick={this.props.increment} className='mr10'>
                单次加一
              </Button>
              <Button type="primary" loading={this.state.loading} onClick={e => this.enterLoading(e)}>
                延时异步双倍叠加
              </Button>
            </Col>
            <Col span={6}>
              <span style={{lineHeight: '28px'}}>不定增量次数: {this.props.counter.time}</span>
            </Col>
            <Col span={4}>
              <Button type="primary" className='fr' onClick={this.props.logtime}>
                生成
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    )
  }

}