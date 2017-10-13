import React, { Component } from 'react'
import { Provider } from 'redux-zero'

import store from './store/Store';
import GridContainer from './containers/GridContainer'
import './App.css'

/** The root component of our application. */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <h1>Conway's Game of Life</h1>
          <GridContainer />
        </div>
      </Provider>
    )
  }
}

export default App
