import { connect } from 'react-redux'
import { increment, doubleAsync, logtime } from '../store/counter'
import CounterView from '../components/CounterView'

const mapDispatchToProps = {
  increment : () => increment(1),
  logtime : () => logtime(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  counter : state.counter
})

// 关于 reselect 见github https://github.com/reactjs/reselect
// 每次调用 selector 函数之前，
// 它会判断参数与之前缓存的是否有差异，若无差异，
// 则直接返回缓存的结果，反之则重新计算

/*

import { createSelector } from 'reselect'

const counter = (state) => state.counter
const tripleCount = createSelector(counter, (count) => count * 3)

const mapStateToProps = (state) => ({
  counter: tripleCount(state)
})

*/

// 将 mapDispatchToProps 和 mapStateToProps 连接到组件
export default connect(mapStateToProps, mapDispatchToProps)(CounterView)
