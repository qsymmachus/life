import React, { Component } from 'react'
import Cell from '../cell/Cell'

class Grid extends Component {
  renderCells() {
    return this.props.cells.map(state => 
      <Cell alive={ state }/>
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
  cells: React.PropTypes.arrayOf(React.PropTypes.bool)
}

export default Grid
