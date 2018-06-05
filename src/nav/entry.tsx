import React, { Component } from "react"
import { hot } from "react-hot-loader"
import App from "./components/App"
import dva, { connect, Router } from "dva"
import modelsMap from "./models/index"
import { mapValues } from "lodash"

class AppComponent extends Component {
  render() {
    return <App />
  }
}

const app = dva()

model()

const HotAppComponent = hot(module)(connect(props => props)(App))

app.router(() => <HotAppComponent />)

app.start("#app")

function model() {
  mapValues(modelsMap, (model: any) => app.model(model))
}
