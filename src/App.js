import React, { Component } from 'react'
import Cell from './components/cell/Cell'
import './App.css'

/** The root component of our application. */
class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Conway's Game of Life</h1>
        <Cell alive={true}/>
      </div>
    )
  }
}

export default App
