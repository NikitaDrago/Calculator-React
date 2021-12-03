import React from 'react'
import { Error } from '@/components/ErrorBoundaries/component'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  render() {
    return this.state.errorInfo
      ? (
        <Error>
          <h2 style={{ color: '#FF0000' }}>Что-то пошло не так!</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </Error>
      )
      : this.props.children
  }
}

