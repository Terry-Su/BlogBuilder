import React, { Component } from "react"
import { hot } from "react-hot-loader"
import TheApp from "./components/TheApp"
import dva, { connect, Router } from "dva"
import modelsMap from "./models/index"
import { mapValues } from "lodash"


const app = dva()

model()

const TheHotAppComponent = hot(module)(connect(props => props)(TheApp))

app.router(() => <TheHotAppComponent />)

app.start("#app")

function model() {
  mapValues(modelsMap, (model: any) => app.model(model))
}
