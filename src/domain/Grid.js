import Cell from './Cell'
import Position from './Position'
import { Option } from 'giftbox'
import { range } from './helpers/Range'

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
      return Option(undefined)
    }
  }

  /**
   * Returns the neighbors of a given Cell on the grid.
   * 
   * For the game of life, we use the Moore neigborhood.
   * See: https://en.wikipedia.org/wiki/Moore_neighborhood
   */
  getNeighbors(cell) {
    let neighboringPositions = [
      new Position(cell.position.x - 1, cell.position.y - 1),
      new Position(cell.position.x, cell.position.y - 1),
      new Position(cell.position.x + 1, cell.position.y - 1),
      new Position(cell.position.x - 1, cell.position.y),
      new Position(cell.position.x + 1, cell.position.y),
      new Position(cell.position.x - 1, cell.position.y + 1),
      new Position(cell.position.x, cell.position.y + 1),
      new Position(cell.position.x + 1, cell.position.y + 1)
    ]

    return neighboringPositions
      .map((position) => this.getCell(position))
      .filter((optionalCell) => optionalCell.isDefined())
      .map((optionalCell) => optionalCell.get())
  }
}

/** Generates a Grid with a random initial state. 
 * 
 * The optional 'density' parameter determines the what proportion
 * of cells are likely to be alive. Defaults to 50. Higher density
 * means more live cells, a lower density means fewer live cells.
 */
Grid.generate = function(width = 100, height = 100, density = 50) {
  return new Grid(
    range(height).map(y => 
      range(width).map(x =>
        Cell.generate(new Position(x, y), density)
      )
    )
  )
}

/** 
 * Generates a Grid from a two-dimensional array of booleans.
 * 
 * The booleans determine whether each generated Cell is alive.
 * The position coordinates are filled in automatically.
 */
Grid.generateFromBooleans = function(booleans) {
  return new Grid(
    booleans.map((row, y) =>
      row.map((boolean, x) =>
        new Cell(boolean, new Position(x, y))
      )
    )
  )
}

export default Grid
