import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import { Menu, Icon, Switch } from 'antd'
import './Sidebar.scss'
const SubMenu = Menu.SubMenu

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'dark',
      current: '1'
    }
  }

  changeTheme(value) {
    this.setState({
      theme: value ? 'dark' : 'light'
    })
  }

  handleClick(e) {
    // console.log('click ', e.key)
    this.setState({
      current: e.key
    })
  }

  render() {
    return (
      <div className={this.state.theme === 'dark' ? 'sidebar' : 'sidebar light'}>
        <div className="switchTheme">
        <span className='title'>主题切换</span>
          <Switch
            checked={this.state.theme === 'dark'}
            onChange={e => this.changeTheme(e)}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </div>
        <Menu
          theme={this.state.theme}
          onClick={e => this.handleClick(e)}
          style={{ width: 240 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub1" title={<span><Icon type="laptop" /><span>今日实时</span></span>}>
            <Menu.Item key="1">
              <IndexLink to='/'>首页一览</IndexLink>
            </Menu.Item>
            <Menu.Item key="2">
              <IndexLink to='/counter'>统计中心</IndexLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>User</span></span>}>
            <Menu.Item key="5">
              <IndexLink to='/user'>Message</IndexLink>
            </Menu.Item>
            <Menu.Item key="6">
              <IndexLink to='/user/phone'>Phone</IndexLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation</span></span>}>
            <Menu.Item key="9">
              <IndexLink to='/404'>404 NoFound</IndexLink>
            </Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }  
}
