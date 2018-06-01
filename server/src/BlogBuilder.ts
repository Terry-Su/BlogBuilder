import { Store, Getters, Mutations, Actions } from './state';

export default class BlogBuilder {
  store: Store
  getters: Getters
  mutations: Mutations
  actions: Actions

  constructor( root: Path, output: Path ) {
    this.store = new Store()    
    this.getters = new Getters( this.store )    
    this.mutations = new Mutations( this.getters )    
    this.actions = new Actions( this.mutations )    

    const { mutations } = this

    mutations.UPDATE_ROOT( root )
    mutations.UPDATE_OUTPUT( output )

  }

  build() {
    this.actions.build()
  }
}