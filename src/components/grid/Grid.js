import React, { Component } from 'react'
import Cell from '../cell/Cell'

/**
 * Grid of up to 100 x 100 cells.
 * 
 * Cells are represented as a two-dimensional array of booleans. 
 * When rendered, `true` returns a live cell, and `false` returns 
 * a dead cell.
 * 
 * If the cells array is not passed as a prop, an array
 * of 100 x 100 cells is automatically created with a
 * randomly generated initial state.
 */
class Grid extends Component {
  get cells() {
    return this.props.cells == null
      ? this.generateRandomCells()
      : this.props.cells
  }

  generateRandomCells() {
    return [...Array(100).keys()].map(row => 
      [...Array(100).keys()].map(state =>
        this.randomBoolean()
      )
    )
  }

  randomBoolean() {
    return Math.random() >= 0.5;
  }

  renderCells() {
    return this.cells.map(row => 
      row.map(state => <Cell alive={ state }/>)
    )
  }

  render() {
    return (
      <div className="grid">
        { this.renderCells() }
      </div>
    )
  }
}

Grid.propTypes = {
  cells: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(React.PropTypes.bool)
  )
}

export default Grid
