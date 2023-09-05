import React, { ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  constructor(props: ErrorBoundaryProps) {
    super(props)
    // eslint-disable-next-line react/state-in-constructor
    this.state = { hasError: false }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info)
  }

  render() {
    const { hasError } = this.state
    if (hasError) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100dvh',
          }}
        >
          <h1>🛠️ Error 🛠️</h1>
        </div>
      )
    }

    // eslint-disable-next-line react/destructuring-assignment
    return this.props.children
  }
}
