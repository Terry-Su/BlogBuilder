import { Store, Getters, Mutations, Actions } from './state';

export default class BlogBuilder {
  store: Store
  getters: Getters
  mutations: Mutations
  actions: Actions

  constructor() {
    this.store = new Store()    
    this.getters = new Getters( this.store )    
    this.mutations = new Mutations( this.getters )    
    this.actions = new Actions( this.mutations )    
  }
}