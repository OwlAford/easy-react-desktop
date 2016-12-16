// 定义一个常量
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'

// Actions =============================================================
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

export function logtime (value = 1) {
  return {
    type    : 'LOG_TIME',
    payload : value
  }
}

// 这是一个 thunk，立即为一个延迟计算返回一个方法，在异步调用action非常有用
export const doubleAsync = (cb) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(increment(getState().counter.count))
        cb && cb()
        resolve()
      }, 2600)
    })
  }
}

// Reducer =============================================================
const initialState = {
  count: 0,
  time: 0
}
export default function counterReducer (state = initialState, action) {
  switch (action.type) {
    case COUNTER_INCREMENT :
      return {
        ...state,
        count: state.count + action.payload
      }

    case 'LOG_TIME' :
      return {
        ...state,
        time: (state.time + state.count + action.payload) * 2
      }  
    default:
      return state
  }
}
