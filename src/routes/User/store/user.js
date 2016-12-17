import {BZ_REQUESTER} from 'UTIL/requesterMiddleware'

// Actions =============================================================

export function setuid (value) {
  return {
    type    : 'SET_UID',
    payload : value
  }
}

export function setRegData (data, cb) {
  return (dispatch) => {
    dispatch(setRegDataAction(data))
    cb && cb()
  }
}

export function setRegDataAction (data) {
  return {
    type : 'SET_REG_DATA',
    payload : data
  }
}

export function setname (value) {
  return {
    type    : 'SET_NAME',
    payload : value
  }
}

export const getuidAsync = (cb) => {
  return (dispatch, getState) => {
    dispatch(getuidAction(cb)).then(action => {
        dispatch(setuid(action.uid))
    })
  }
}

const getuidAction = (cb) => {
  return {
    [BZ_REQUESTER] : {
      url: 'http://amaze.qiniudn.com/user',
      callback: cb
    }
  }
}

// Reducer =============================================================

const initialState = {
  uid: '',
  mine: '',
  regData: null
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
    case 'SET_REG_DATA' :
      return {
        ...state,
        regData: action.payload
      }
    default:
      return state
  }
}
