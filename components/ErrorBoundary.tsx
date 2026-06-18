'use client'

import { Component } from 'react'
import type { ReactNode, ErrorInfo, JSX } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (process.env.NODE_ENV === 'production') {
      return
    }
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render(): JSX.Element {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-950">
          <div className="text-center p-8">
            <h2 className="text-xl font-bold text-white mb-2">Something went wrong</h2>
            <button
              onClick={(): void => this.setState({ hasError: false })}
              className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-600"
            >
              Try again
            </button>
          </div>
        </div>
      ) as JSX.Element
    }
    return this.props.children as JSX.Element
  }
}

export default ErrorBoundary
