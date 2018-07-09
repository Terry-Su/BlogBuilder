import React, { Component } from "react"
import { hot } from "react-hot-loader"
import TheApp from "./components/TheApp"
import dva, { connect, Router } from "dva"
import modelsMap from "./models/index"
import { mapValues, find, pick, cloneDeep } from 'lodash';
import localStore from "./store/localStore"
import { isBackFromOnePage, removeBackInfoFromUrl } from './navUtils/url';
import { shouldLocalstorageUpdate } from './navUtils/initialize';



const app = dva({
  onStateChange: () => {
    // let category = null
    // let categorySequence = null

    let store = null

    try {
      const storeKeys = Object.keys(modelsMap)
      store = pick(app["_store"].getState(), storeKeys)
    } catch (e) {}

    localStore.setStore(store)
  }
})

model(app)

const TheHotAppComponent = hot(module)(connect(props => props)(TheApp))

app.router(() => <TheHotAppComponent />)

app.start("#app")

function model(app) {
  let resModelsMap = modelsMap

  const theshouldLocalstorageUpdate = shouldLocalstorageUpdate()
  if ( ! theshouldLocalstorageUpdate ) {
    const storeLocal = localStore.getStore()

    resModelsMap = getNewResModelsMapStatesWithStoreLocal( resModelsMap, storeLocal  )
  }

  mapValues(resModelsMap, (model: any) => app.model(model))
}

function getNewResModelsMapStatesWithStoreLocal( resModelsMap, storeLocal ) {
  try {
    if ( resModelsMap && storeLocal ) {
      let clonedReModelsMap = cloneDeep( resModelsMap )
      mapValues( storeLocal, ( value, key ) => {
        clonedReModelsMap[key]['state'] = value
      } )
      return clonedReModelsMap
    }
  } catch(e) {}

  return resModelsMap
}