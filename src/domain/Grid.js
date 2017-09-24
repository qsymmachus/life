import Cell from './Cell'

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
Grid.generate = function() {
  return new Grid(
    range(100).map(y => 
      range(100).map(x =>
        Cell.generate(x, y)
      )
    )
  )
}

/** Helper function that generates an array of [0..n-1] elements. */
function range(n) {
  return [...Array(n).keys()]
}

export default Grid
