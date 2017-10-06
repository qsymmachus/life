import Cell from './Cell'
import Position from './Position'
import { Option, None } from 'option-monad'

/** 
 * Represents a grid of cells in the game of life. 
 * 
 * Cells are stored in a two-dimensional array.
 */
class Grid {
  constructor(cells) {
    this.cells = cells
  }

  /** 
   * Returns the Cell at a given position.
   * 
   * Since no cell may be found, the result is wrapped in an Option.
   */
  getCell(position) {
    try {
      return Option(this.cells[position.y][position.x])
    } catch(e) {
      return None.create()
    }
  }

  /**
   * Returns the neighbors of a given Cell on the grid.
   */
  getNeighbors(cell) {
    let neighboringPositions = [
      new Position(cell.position.x - 1, cell.position.y - 1),
      new Position(cell.position.x - 1, cell.position.y),
      new Position(cell.position.x - 1, cell.position.y + 1),
      new Position(cell.position.x, cell.position.y - 1),
      new Position(cell.position.x, cell.position.y + 1),
      new Position(cell.position.x + 1, cell.position.y - 1),
      new Position(cell.position.x + 1, cell.position.y),
      new Position(cell.position.x + 1, cell.position.y + 1)
    ]

    return neighboringPositions
      .map((position) => this.getCell(position))
      .filter((optionalCell) => optionalCell.isDefined())
      .map((optionalCell) => optionalCell.get())
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
