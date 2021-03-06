import { CLEAR_HISTORY, SET_DISPLAY, SET_HISTORY, SET_INITVALUE, SET_OPERATION, SET_THEME, SET_VALUE } from '@/constants/actions'

export const setValue = value => ({ type: SET_VALUE, payload: value })
export const setHistory = history => ({ type: SET_HISTORY, payload: history })
export const clearHistory = () => ({ type: CLEAR_HISTORY, payload: '' })
export const setDisplay = display => ({ type: SET_DISPLAY, payload: display })
export const setOperation = operation => ({ type: SET_OPERATION, payload: operation })
export const setInitValue = initValue => ({ type: SET_INITVALUE, payload: initValue })
export const setTheme = theme => ({ type: SET_THEME, payload: theme })
