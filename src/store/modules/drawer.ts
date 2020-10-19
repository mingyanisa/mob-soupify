import { createModule, mutation } from 'vuex-class-component'

const VuexModule = createModule({
  namespaced: 'drawer',
  strict: false,
})

export default class extends VuexModule {
  private opened = false

  @mutation toggleDrawerState() {
    this.opened = !this.opened
  }
  @mutation changeDrawerState(payload: boolean) {
    this.opened = payload
  }

  get getDrawerState() {
    return this.opened
  }
}
