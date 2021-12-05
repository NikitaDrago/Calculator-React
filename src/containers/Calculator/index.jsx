import React from 'react'
import { Display } from '@/components/Display'
import History from '@/components/History'
import { Keypad } from '@/components/Keypad'
import { MainLayout } from '@/layouts'
import { CalculatorWrapper } from '@/containers/Calculator/components'
import { useCalculator } from '@/containers/Calculator/useCalculator'


export const Calculator = () => {
  const { handleClick } = useCalculator()

  return (
    <MainLayout>
      <CalculatorWrapper>
        <Display />
        <Keypad onClick={handleClick} />
      </CalculatorWrapper>
      <History />
    </MainLayout>
  )
}
