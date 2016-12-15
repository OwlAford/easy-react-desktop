import React from 'react'
import Sidebar from 'COMPONENT/Sidebar'
import 'STYLE/antd.min.css'
import 'STYLE/core.scss'
import './CoreLayout.scss'

// 构建页面主视图
export const CoreLayout = ({ children }) => (
  <div className='container'>
  	<Sidebar />
	<div className='core-layout'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
