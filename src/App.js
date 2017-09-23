import React, { Component } from 'react'
import GridComponent from './components/grid/GridComponent'
import './App.css'

/** The root component of our application. */
class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Conway's Game of Life</h1>
        <GridComponent />
      </div>
    )
  }
}

export default App
