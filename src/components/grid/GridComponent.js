import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CellComponent from '../cell/CellComponent'

/**
 * Renders a grid of up to 100 x 100 cells.
 * 
 * If the cells array is not passed as a prop, an array
 * of 100 x 100 cells is automatically created with a
 * randomly generated initial state.
 */
class GridComponent extends Component {
  renderCells() {
    return this.props.grid.cells.map(row => 
      row.map(cell => <CellComponent cell={ cell }/>)
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

GridComponent.propTypes = {
  grid: PropTypes.objectOf(PropTypes.shape({
    cells: PropTypes.arrayOf(
      PropTypes.shape({ isAlive: PropTypes.bool })
    )
  }))
}

export default GridComponent
