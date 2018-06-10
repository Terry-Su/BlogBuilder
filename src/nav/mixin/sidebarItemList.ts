import { removeElement } from "../../shared/utils/array";

class SidebarItemList {
  list = []
  defaultItem: any

  add( component ) {
    this.list.push( component )
  }

  remove( component ) {
    removeElement( this.list, component )
  }

  updateDefaultItem( component ) {
    this.defaultItem = component
  }
  removeDefaultItem() {
    this.defaultItem = null
  }

  activateOnly( component ) {
    this.deactivateComponentsExcept( component )
    component.activate()
  }

  activateOnlyDefaultItem() {
    this.defaultItem && this.activateOnly( this.defaultItem )
  }

  deactivateComponentsExcept( component ) {
    this.list
      .filter( theComponent => theComponent !== component )
      .map( component => component.deactivate() )
  }
}

export default new SidebarItemList()
