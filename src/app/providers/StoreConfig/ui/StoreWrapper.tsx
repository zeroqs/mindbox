import { Provider } from 'react-redux'

import { ProviderProps } from '@/shared/types'

import { store } from '../config/StoreConfig'

export const StoreWrapper = ({ children }: ProviderProps) => {
  return <Provider store={store}>{children}</Provider>
}
