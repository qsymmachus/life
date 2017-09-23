import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Cell from '../cell/Cell'
import { generateRandomCells } from '../../domain/Cell'

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
      ? generateRandomCells()
      : this.props.cells
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
  cells: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.bool)
  )
}

export default Grid
