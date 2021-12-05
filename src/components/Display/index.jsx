import React from 'react'
import { DisplayInput } from '@/components/Display/component'
import { useSelector } from 'react-redux'
import { displaySelector } from '@/store/selectors'

export const Display = () => {
  const display = useSelector(displaySelector)

  return (
    <DisplayInput>{display}</DisplayInput>
  )
}
