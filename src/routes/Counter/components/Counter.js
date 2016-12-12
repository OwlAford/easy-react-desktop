import React from 'react'

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
    <h2>Counter: {props.counter.time}</h2>
    <button className='btn btn-default' onClick={props.logtime}>
      Get Time
    </button>
  </div>
)

Counter.propTypes = {
  counter     : React.PropTypes.object.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  logtime : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Counter
