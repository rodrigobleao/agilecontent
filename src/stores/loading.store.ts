import { makeAutoObservable } from 'mobx'

export class LoadingStore {
  loading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  switchOnLoading = () => {
    this.loading = true
  }

  stopLoading = () => {
    this.loading = false
  }

  isLoading = () => {
    return this.loading
  }
}

const store = new LoadingStore()
export default store
