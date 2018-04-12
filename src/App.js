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

  /** Event handler to switch the Grid to a Gosper Glider Gun. */
  switchToGliderGun(event) {
    event.preventDefault()
    switchGridPattern(Patterns.gosperGliderGun())
  }

  /** Event handler to switch the Grid to a Switch Engine. */
  switchToSwitchEngine(event) {
    event.preventDefault()
    switchGridPattern(Patterns.switchEngine())
  }

  /** Event handler to switch the Grid to Noah's Ark. */
  switchToNoahsArk(event) {
    event.preventDefault()
    switchGridPattern(Patterns.noahsArk())
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
          <KeyHandler keyEventName={KEYPRESS} keyValue="n" onKeyHandle={this.switchToNoahsArk} />
          <GridContainer />
        </div>
      </Provider>
    )
  }
}

export default App
