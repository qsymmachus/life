import React, { Component } from 'react'
import Grid from './components/grid/Grid'
import './App.css'

/** The root component of our application. */
class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Conway's Game of Life</h1>
        <Grid cells={ [true, false, true, false, true, true] } />
      </div>
    )
  }
}

export default App
