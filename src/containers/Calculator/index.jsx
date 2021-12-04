import React, { useCallback } from 'react'
import { Display } from '@/components/Display'
import History from '@/components/History'
import { Keypad } from '@/components/Keypad'
import { MainLayout } from '@/layouts'
import { CalculatorWrapper } from '@/containers/Calculator/components'
import { CalculatorStorage } from '@/utils/CalculatorStorage'
import { useDispatch, useSelector } from 'react-redux'
import { setDisplay, setHistory, setInitValue, setOperation, setValue } from '@/actions'
import { displaySelector, historySelector, initValueSelector, operationSelector, valueSelector } from '@/store/selectors'

export const Calculator = () => {
  const calculator = new CalculatorStorage()
  const dispatch = useDispatch()
  const value = useSelector(valueSelector)
  const history = useSelector(historySelector)
  const operation = useSelector(operationSelector)
  const initValue = useSelector(initValueSelector)
  const display = useSelector(displaySelector)

  const getNumber = useCallback(target => {
    dispatch(setValue(value + target))
    dispatch(setDisplay(display + target))
  }, [display, value])
  const getOperation = useCallback(target => {
    if (target !== operation && target !== '+/-') {
      dispatch(setDisplay(display.slice(0, display.length - 1) + target))
    }
    if (value !== '' && target !== '+/-') {
      dispatch(setDisplay(`${value}${target}`))

      if (!initValue) {
        dispatch(setInitValue(+value))
      } else {
        calculator.executeCommand(operation, +initValue, +value)

        dispatch(setInitValue(calculator.value))
        dispatch(setDisplay(calculator.value + target))
        dispatch(setHistory(display))
      }
    }
    dispatch(setOperation(target))
    dispatch(setValue(''))

  }, [display, value, operation, initValue, history])

  const setNumberSign = useCallback(() => {
    if (display[0] === '-') {
      dispatch(setValue(value.slice(1)))
      dispatch(setDisplay(display.slice(1)))
    } else {
      dispatch(setDisplay('-' + display))
      dispatch(setValue('-' + value))
    }
  }, [display, value])

  const getAnswer = useCallback(() => {
    if (operation && initValue && value) {
      calculator.executeCommand(operation, +initValue, +value)

      dispatch(setDisplay(String(calculator.value)))
      dispatch(setValue(String(calculator.value)))
      dispatch(setInitValue(0))
      dispatch(setHistory(display))
    }
  }, [value, initValue, display, operation])

  const clearComputation = useCallback(() => {
    dispatch(setInitValue(0))
    dispatch(setValue(''))
    dispatch(setDisplay(''))
    dispatch(setOperation(''))
  }, [initValue, value, display, history, operation])

  const eraseButton = useCallback(() => {
    if (display === value) {
      dispatch(setDisplay(''))
    } else {
      dispatch(setDisplay(display.slice(0, display.length - value.length)))
    }

    dispatch(setValue(''))
  }, [display, value])

  const handleClick = useCallback(e => {
    const target = e.target.textContent

    switch (target) {
      case String(target.match(/[0-9.]/)):
        getNumber(target)
        break
      case String(target.match(/[+-/*%]/)):
        getOperation(target)
        break
      case '+/-':
        setNumberSign()
        break
      case '=':
        getAnswer()
        break
      case 'C':
        clearComputation()
        break
      default:
        eraseButton()
        break
    }
  }, [display, value, operation, initValue, history])

  return (
    <MainLayout>
      <CalculatorWrapper>
        <Display info={display} />
        <Keypad onClick={handleClick} />
      </CalculatorWrapper>
      <History history={history} />
    </MainLayout>
  )
}
