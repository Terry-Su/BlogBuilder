import React, { Component } from "react"
import { hot } from "react-hot-loader"
import TheApp from "./components/TheApp"
import dva, { connect, Router } from "dva"
import modelsMap from "./models/index"
import { mapValues, find } from "lodash"
import localStore from "./store/localStore"

const app = dva({
  onStateChange: () => {
    let category = null
    let categorySequence = null
    try {
      category = app['_store'].getState().category.info
      categorySequence = app['_store'].getState().category.sequence
    } catch(e) {}
    
    console.log( app['_store'].getState() )
    localStore.setCategory( category )
    localStore.setCategorySequence( categorySequence )
  }
})

model()

const TheHotAppComponent = hot(module)(connect(props => props)(TheApp))

app.router(() => <TheHotAppComponent />)

app.start("#app")

function model() {
  mapValues(modelsMap, (model: any) => app.model(model))
}
