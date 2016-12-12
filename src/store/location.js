// 不知道哪来的臭毛病，定义一个同名的字段字符串变量
export const LOCATION_CHANGE = 'LOCATION_CHANGE'

// Action
export function locationChange (location = '/') {
  return {
    type    : LOCATION_CHANGE,
    payload : location
  }
}

// 专用的 Action Creator，直接分发参数
export const updateLocation = ({ dispatch }) => {
  return (nextLocation) => dispatch(locationChange(nextLocation))
}

// Reducer
const initialState = null
export default function locationReducer (state = initialState, action) {
  return action.type === LOCATION_CHANGE
    ? action.payload
    : state
}
