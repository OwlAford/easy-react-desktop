// Actions =============================================================

export function setuid (value) {
  return {
    type    : 'SET_UID',
    payload : value
  }
}

export function setname (value) {
  return {
    type    : 'SET_NAME',
    payload : value
  }
}

export const getuidAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      fetch('http://amaze.qiniudn.com/user')
      .then((res) => {
        return res.json().then((json) => {
          dispatch(setuid(json.uid))
          resolve()
        })
      })
    })
  }
}

// Reducer =============================================================

const initialState = {
  uid: '',
  mine: ''
}
export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_UID' :
      return {
        ...state,
        uid: action.payload
      }
    case 'SET_NAME' :
      return {
        ...state,
        mine: action.payload
      }
    default:
      return state
  }
}
