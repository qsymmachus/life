import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Cell.css'

/** Renders a cell in the game of life. A cell can either be alive or dead. */
class CellComponent extends Component {
  get style() {
    return {
      backgroundColor: this.props.cell.isAlive ? "black" : "white"
    }
  }

  render() {
    return (
      <div className="cell" style={ this.style }>
      </div>
    )
  }
}

CellComponent.propTypes = {
  cell: PropTypes.shape(
    { isAlive: PropTypes.bool.isRequired }
  ).isRequired
}

export default CellComponent
