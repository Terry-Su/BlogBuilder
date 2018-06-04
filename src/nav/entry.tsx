import React, { Component } from "react"
import { hot } from 'react-hot-loader'
import App from './components/App'
import dva, { connect, Router } from 'dva'


class AppComponent  extends Component {
  render() {
    return (
      <App />
    )
  }
}

const app = dva();

app.model({
  namespace: 'count',
  state: 3,
});

const HotAppComponent = hot( module )( connect( props => props )( App ) )  

app.router(() => <HotAppComponent />);

app.start('#app');
