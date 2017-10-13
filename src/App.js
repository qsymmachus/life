import React, { Component } from 'react'
import { Provider } from 'redux-zero'

import store from './store/Store'
import { tick } from './actions/Actions'
import GridContainer from './containers/GridContainer'
import './App.css'

/** The root component of our application. */
class App extends Component {
  componentWillMount() {
    /** Automatically 'tick' the Game of Life every second once the App renders. */
    setInterval(tick, 500)
  }

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
