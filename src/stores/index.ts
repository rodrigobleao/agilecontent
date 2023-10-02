import { LoadingStore } from './loading.store'

class RootStore {
  loading: LoadingStore

  constructor() {
    this.loading = new LoadingStore()
  }
}

const store = new RootStore()
export { RootStore }
export default store
