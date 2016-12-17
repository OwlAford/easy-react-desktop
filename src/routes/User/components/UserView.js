import React, { Component, PropTypes } from 'react'
import { Row, Col, Card, Input, Button, Tabs, Menu } from 'antd'
import { browserHistory } from 'react-router'
import handleChange from 'UTIL/handleChange'
import List from './ListView'
const InputGroup = Input.Group
const TabPane = Tabs.TabPane
const SubMenu = Menu.SubMenu

export default class UserView extends Component {
  static propTypes = {
    user        : PropTypes.object.isRequired,
    getuidAsync : PropTypes.func.isRequired,
    clear       : PropTypes.func.isRequired
  }

  constructor (props, context) {
    super(props, context)
    this.state = { 
      uidVal: this.props.user.uid,
      current: '/user',
      loadUid: false,
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
    // 将handleChange方法绑定在this上
    this.handleChange = handleChange.bind(this)
    browserHistory.listen(() => {
      this.setState({
        current: browserHistory.getCurrentLocation().pathname
      })
    })
  }

  asynsGetUid () {
    this.setState({
      loadUid: true
    })
    this.props.getuidAsync((data) => {
      this.state.uidVal = data.uid
      this.setState({
        loadUid: false
      })
    })
  }

  clearUid () {
    this.props.clear()
    this.setState({
      uidVal: 'default'
    })
  }

  handleItemClick (item,index,childState) {
      console.log(item, 'is clicked')
  }

  handlePage (e) {
    this.setState({
      current: e.key
    })
    browserHistory.push(e.key)
  }

  componentDidMount () {
    this.setState({
      current: browserHistory.getCurrentLocation().pathname
    })
  }

  render() {
    let groups = this.state.groups
    let list = groups.map(
      (item, i) => {
        return (
          <p key={i} style={{lineHeight: '24px'}}>
            <span className='mr10'>银行名称：{item.name}</span>
            <span className='mr10'>所在城市：{item.city}</span>
            <span className='mr10'>注册时间：{item.time}</span>
          </p> 
        ) 
      }
    )
    return (
      <div className="content">
        <div className='content-cell'>
          <h3>生成列表的两种方式</h3>
          <Row style={{padding: '15px 0 10px'}}>
            <Col span={12} style={{padding: '0 10px'}}>
              <Card title="节点循环">
                {list}
              </Card>
            </Col>
            <Col span={12} style={{padding: '0 10px'}}>
              <Card title="模板嵌套">
                <List groups={groups}/>
              </Card>
            </Col>
          </Row>
        </div>
        <div className='content-cell'>
          <Tabs defaultActiveKey="1" style={{marginBottom: '20px'}}>
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
          <Row type="flex" justify="space-between">
            <Col span={16}>
              <InputGroup size="large">
                <Col span="6">
                  <Input defaultValue="uid" disabled/>
                </Col>
                <Col span="12">
                  <Input placeholder='点击获取uid' name="uidVal" value={this.state.uidVal} onChange={this.handleChange}/>
                </Col>
              </InputGroup>
            </Col>
            <Col span={8} style={{width: '240px'}}>
              <Button type="primary" className='mr10' onClick={e => this.clearUid()}>
                设置默认UID
              </Button>
              <Button type="primary" loading={this.state.loadUid} onClick={e => this.asynsGetUid()}>
                同步获取UID
              </Button>
            </Col>
          </Row>
        </div>
        <div className='content-cell'>
          <Menu onClick={e => this.handlePage(e)} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="/user">账户信息完善</Menu.Item>
            <Menu.Item key="/user/review">账户信息一览</Menu.Item>
          </Menu>
          { this.props.children }
        </div>
      </div>
    )
  }
}