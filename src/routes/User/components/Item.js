import React, { PropTypes } from 'react'

const Item = ({ name, city, time }) => (
  <li>
    <span>银行名称：{name}</span>
    &nbsp;
    <span>所在城市：{city}</span>
    &nbsp;
    <span>注册时间：{time}</span>
  </li>
)

Item.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Item
