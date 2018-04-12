import React, { Component } from 'react'
import KeyHandler, {KEYPRESS} from 'react-key-handler'
import { Provider } from 'redux-zero'

import store from './store/Store'
import { switchGridPattern, randomizeGrid, tick } from './actions/Actions'
import GridContainer from './containers/GridContainer'
import Patterns from './domain/Patterns'
import './App.css'

/** The root component of our application. */
class App extends Component {
  componentWillMount() {
    /** Automatically 'tick' the Game of Life every second once the App renders. */
    setInterval(tick, 500)
  }

  /** Event handler to switch the Grid to a gosper glider gun. */
  switchToGliderGun(event) {
    event.preventDefault()
    switchGridPattern(Patterns.gosperGliderGun())
  }

  /** Event handler to switch the Grid to a switch engine. */
  switchToSwitchEngine(event) {
    event.preventDefault()
    switchGridPattern(Patterns.switchEngine())
  }

  /** Event handler to randomize the Grid. */
  randomizeGrid(event) {
    event.preventDefault()
    randomizeGrid()
  }

  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <KeyHandler keyEventName={KEYPRESS} keyValue="r" onKeyHandle={this.randomizeGrid} />
          <KeyHandler keyEventName={KEYPRESS} keyValue="g" onKeyHandle={this.switchToGliderGun} />
          <KeyHandler keyEventName={KEYPRESS} keyValue="s" onKeyHandle={this.switchToSwitchEngine} />
          <GridContainer />
        </div>
      </Provider>
    )
  }
}

export default App
