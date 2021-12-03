import React from 'react'
import { Calculator } from '@/containers/Calculator'
import { ErrorBoundary } from '@/components/ErrorBoundaries'

export const HomePage = () => {
  return (
    <ErrorBoundary>
      <Calculator />
    </ErrorBoundary>
  )
}
