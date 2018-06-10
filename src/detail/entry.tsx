import React, { Component } from "react"
import { hot } from "react-hot-loader"
import TheApp from "./components/TheApp"
import dva, { connect, Router } from "dva"
import modelsMap from "./models/index"
import { mapValues } from "lodash"

const appDom = document.getElementById( 'app' )
const markedHtml = appDom ? appDom.innerHTML : ''

const app = dva()

model()


const TheHotAppComponent = hot(module)(connect(props => props)(TheApp))

app.router(() => <TheHotAppComponent markedHtml={markedHtml}/>)

app.start("#app")


function model() {
  mapValues(modelsMap, (model: any) => app.model(model))
}
