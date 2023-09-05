import { ErrorBoundaryWrapper } from './ErrorBoundary/index'
import { MantineWrapper } from './MantineConfig/index'
import { AppRouter, RouterWrapper } from './RouterConfig/index'
import { StoreWrapper } from './StoreConfig/index'
import { WrapperComposer } from './WrapperComposer'

export const App = () => {
  return (
    <WrapperComposer
      wrappers={[
        RouterWrapper,
        MantineWrapper,
        StoreWrapper,
        ErrorBoundaryWrapper,
      ]}
      render={() => <AppRouter />}
    />
  )
}
