import React from 'react'
import { KeypadLayout } from '@/layouts'
import { Button } from '@/components/Keypad/components'

const BUTTONS = ['C', '7', '8', '9', '*', '-', '4', '5', '6', '/', '+', '1', '2', '3', '=', '.', '+/-', '0', '%', 'CE']

export const Keypad = ({ onClick }) =>
  <KeypadLayout>
    {BUTTONS.map(btn => <Button key={btn} onClick={onClick}>{btn}</Button>)}
  </KeypadLayout>
