import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './Cell.css'

/** Renders a cell in the game of life. A cell can either be alive or dead. */
class CellComponent extends Component {
  get class() {
    let className = "cell"

    if (this.props.cell.isAlive) {
      className += " alive"
    }

    return className
  }

  render() {
    return (
      <div className={ this.class }>
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
