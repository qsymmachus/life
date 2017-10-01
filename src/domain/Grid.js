import Cell from './Cell'
import Position from './Position'

/** 
 * Represents a grid of cells in the game of life. 
 * 
 * Cells are stored in a two-dimensional array.
 */
class Grid {
  constructor(cells) {
    this.cells = cells
  }
}

/** Generates a Grid with a random initial state. */
Grid.generate = function(width = 100, height = 100) {
  return new Grid(
    range(height).map(y => 
      range(width).map(x =>
        Cell.generate(new Position(x, y))
      )
    )
  )
}

/** Helper function that generates an array of [0..n-1] elements. */
function range(n) {
  return [...Array(n).keys()]
}

export default Grid
