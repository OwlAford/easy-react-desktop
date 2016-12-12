import { connect } from 'react-redux'
import { increment, doubleAsync, logtime } from '../store/counter'
// 引入木偶组件
// 组件的属性通过props传递，关于 reducer 和 action 组件本身并不关心
import Counter from '../components/Counter'

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
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
