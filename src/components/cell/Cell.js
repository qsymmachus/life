import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Cell.css'

/** A cell in the game of life. A cell can either be alive or dead. */
class Cell extends Component {
  get style() {
    return {
      backgroundColor: this.props.alive ? "black" : "white"
    }
  }

  render() {
    return (
      <div className="cell" style={ this.style }>
      </div>
    )
  }
}

Cell.propTypes = {
  alive: PropTypes.bool.isRequired
}

export default Cell
