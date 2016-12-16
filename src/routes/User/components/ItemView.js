import React, { PropTypes } from 'react'

const Item = ({ name, city, time }) => (
  <li style={{lineHeight: '24px'}}>
    <span className='mr10'>银行名称：{name}</span>
    <span className='mr10'>所在城市：{city}</span>
    <span className='mr10'>注册时间：{time}</span>
  </li>
)

Item.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Item
