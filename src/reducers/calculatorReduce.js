import { CLEAR_HISTORY, SET_DISPLAY, SET_HISTORY, SET_INITVALUE, SET_OPERATION, SET_THEME, SET_VALUE } from '@/constants/actions'

const initState = {
  value: '',
  history: [],
  display: '',
  operation: '',
  initValue: 0,
  theme: 'Light Theme',
}

export default function calculatorReduce(state = initState, action) {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: action.payload,
      }
    case SET_HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload],
      }
    case CLEAR_HISTORY:
      return {
        ...state,
        history: action.payload,
      }
    case SET_DISPLAY:
      return {
        ...state,
        display: action.payload,
      }
    case SET_OPERATION:
      return {
        ...state,
        operation: action.payload,
      }
    case SET_INITVALUE:
      return {
        ...state,
        initValue: action.payload,
      }
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      }
    default:
      return state
  }
}
