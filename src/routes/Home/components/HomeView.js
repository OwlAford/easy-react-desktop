import React, { Component } from 'react'
import v1Image from '../assets/v1.jpg'
import v2Image from '../assets/v2.jpg'
import v3Image from '../assets/v3.jpg'
import v4Image from '../assets/v4.jpg'
import './HomeView.scss'
import { Row, Col, Cascader, DatePicker, Icon, Menu, Table, Carousel, Steps, Checkbox } from 'antd'
import moment from 'moment'
const { MonthPicker, RangePicker } = DatePicker
const SubMenu = Menu.SubMenu
const Step = Steps.Step
const CheckboxGroup = Checkbox.Group

const dateFormat = 'YYYY/MM/DD'
const monthFormat = 'YYYY/MM'

const versionOptions = [{
  value: 'dev',
  label: '开发版',
  children: [
    {
      value: '001',
      label: '0.0.1'
    }, {
      value: '002',
      label: '0.0.2'
    }, {
      value: '003',
      label: '0.0.3'
    }, {
      value: '004',
      label: '0.0.4'
    }
  ]
}, {
  value: 'pro',
  label: '生产版',
  children: [
    {
      value: '101',
      label: '1.0.1'
    }, {
      value: '102',
      label: '1.0.2'
    }, {
      value: '103',
      label: '1.0.3'
    }
  ]
}]

const simpleColumns = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address'
}]

const simpleTableData = []
for (let i = 0; i < 46; i++) {
  simpleTableData.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}

const simpleTablePagination = {
  total: simpleTableData.length,
  showSizeChanger: true,
  pageSize: 20,
  onShowSizeChange: (current, pageSize) => {
    console.log('Current: ', current, '; PageSize: ', pageSize)
  },
  onChange: (current) => {
    console.log('Current: ', current)
  }
}

const selectColumns = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address'
}]

const selectTableData = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park'
}, {
  key: '4',
  name: 'Disabled User',
  age: 99,
  address: 'Sidney No. 1 Lake Park'
}]

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows)
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows)
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User'    // Column configuration not to be checked
  })
}

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false }
]


export default class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'mail'
    }
  }

  onVersionChange (value) {
    console.log(value)
  }

  onCheckChange (checkedValues) {
    console.log('checked = ', checkedValues)
  }

  onRangeChange (date, dateString) {
    console.log(date, dateString)
  }

  handleClick(e) {
    // console.log('click ', e)
    this.setState({
      current: e.key
    })
  }

  render () {

    return (
      <div className="home">
        <Menu onClick={e => this.handleClick(e)} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="mail">
            <Icon type="android" />Android
          </Menu.Item>
          <Menu.Item key="app">
            <Icon type="apple" />iPhone
          </Menu.Item>
          <Menu.Item key="alipay">
            <Icon type="mobile" />iPad
          </Menu.Item>
          <Menu.Item key="website">
            <Icon type="ie" />其他
          </Menu.Item>
        </Menu>
        <div className="content">
          <div className='content-cell'>
            <Row type="flex" justify="space-between">
              <Col span={4}>
                <span className='ft18 mr10 fc-blue'><Icon type="question-circle" /></span>
                <span className='ft16 fc-blue'>今日实时</span>
              </Col>
              <Col span={20}>
                <div className='fr'>
                  <DatePicker defaultValue={moment('2016/12/15', dateFormat)} format={dateFormat} onChange={this.onChange}/>
                </div>
                <div className='fr mr10'>
                  <Cascader defaultValue={['dev', '001']} options={versionOptions} onChange={this.onVersionChange} />
                </div>
              </Col>
            </Row>
          </div>
          <div className='content-cell'>
            <Table columns={simpleColumns} dataSource={simpleTableData} pagination={simpleTablePagination} scroll={{ y: 240 }}/>
          </div>
          <div className='content-cell'>
            <Steps current={1} status="error" className='pb10'>
              <Step title="Finished" description="This is a description" />
              <Step title="In Process" description="This is a description" />
              <Step title="Waiting" description="This is a description" />
            </Steps>
            <div style={{width: '777px', margin: '0 auto'}}>
              <Carousel autoplay>
                <div><img alt='v1' style={{height: '360px'}} src={v1Image} /></div>
                <div><img alt='v2' style={{height: '360px'}} src={v2Image} /></div>
                <div><img alt='v3' style={{height: '360px'}} src={v3Image} /></div>
                <div><img alt='v4' style={{height: '360px'}} src={v4Image} /></div>
              </Carousel>
            </div>
          </div>
          <div className='content-cell'>
            <Row>
              <Col span={6}>
                <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
              </Col>
              <Col span={6}>
                <RangePicker
                  defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                  format={dateFormat}
                  onChange={this.onRangeChange}
                />
              </Col>
              <Col span={8} offset={4}>
                <div style={{padding: '5px'}}>
                <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={this.onCheckChange} />
                </div>
              </Col>
            </Row>
            <Table rowSelection={rowSelection} columns={selectColumns} dataSource={selectTableData} className='mt10' />
          </div>
        </div>
      </div>
    )
  }

}  

