export class Store {
  constructor() {

  }
}

export class Getters {
  store: Store

  constructor( store: Store ) {
    this.store = store
  }
}

export class Mutations {
  store: Store
  getters: Getters

  constructor( getters: Getters ) {
    this.store = getters.store
    this.getters = getters
  }
}

export class Actions {
  store: Store
  getters: Getters
  mutations: Mutations
  constructor(  mutations: Mutations ) {
    this.store = mutations.getters.store
    this.getters = mutations.getters
    this.mutations = mutations
  }
}