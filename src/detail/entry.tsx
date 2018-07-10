import React, { Component } from "react"
import { hot } from "react-hot-loader"
import TheApp from "./components/TheApp"
import dva, { connect, Router } from "dva"
import modelsMap from "./models/index"
import { mapValues } from "lodash"
import { applyStyle } from "../shared/utils/dom";
import { CSS_STYLE } from "../shared/constants/localization";

import "../shared/assets/css/main.scss"
import "highlight.js/styles/vs2015.css"
import './assets/css/index.css'


applyStyle( CSS_STYLE )

const app = dva()

model()

const TheHotAppComponent = hot(module)(connect(props => props)(TheApp))

app.router(() => <TheHotAppComponent />)

app.start("#app")


function model() {
  mapValues(modelsMap, (model: any) => app.model(model))
}
