import { ProviderProps } from '@/shared/types'

import { ErrorBoundary } from './ErrorBoundary'

export const ErrorBoundaryWrapper = ({ children }: ProviderProps) => (
  <ErrorBoundary>{children}</ErrorBoundary>
)
