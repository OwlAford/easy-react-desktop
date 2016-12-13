import React from 'react'
import Header from 'COMPONENT/Header'
import 'STYLE/normalize.css'
import 'STYLE/core.scss'
import './CoreLayout.scss'

// 构建页面主视图
export const CoreLayout = ({ children }) => (
  <div className='container'>
    <Header />
    <div className='core-layout'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
