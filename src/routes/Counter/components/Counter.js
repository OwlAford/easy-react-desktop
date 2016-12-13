import React, { PropTypes } from 'react'

// 定义 counter 木偶组件
export const Counter = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {props.counter.count}</h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
    {' '}
    <h2>Time: {props.counter.time}</h2>
    <button className='btn btn-default' onClick={props.logtime}>
      Get Time
    </button>
  </div>
)

Counter.propTypes = {
  counter     : PropTypes.object.isRequired,
  doubleAsync : PropTypes.func.isRequired,
  logtime     : PropTypes.func.isRequired,
  increment   : PropTypes.func.isRequired
}

export default Counter
