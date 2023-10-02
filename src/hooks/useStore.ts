import { useContext } from 'react'
import { MobXProviderContext } from 'mobx-react'
import { RootStore } from '@/stores'

export const useStore = (): RootStore =>
  useContext(MobXProviderContext).rootStore
