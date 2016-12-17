import React, { Component } from 'react'

export default class Review extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    let { regData } = this.props
    let dataList = (regData) => (
      <div>
        {regData.email}
        {regData.confirm}
        {regData.password}
        {regData.residence[0]}
        {regData.residence[1]}
        {regData.residence[2]}
        {regData.nickname}
        {regData.phone}
        {regData.captcha}
      </div>
    ) 

    let noData = () => (
      <div>
        No Data！
      </div>
    )

    return (
      <div>
        {regData ? dataList(regData) : noData()}
        <h1>输入电话号码：</h1>
        <input type='tel' value="" placeholder="请输入号码"/>
      </div>
    )
  }

}
