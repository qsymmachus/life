import Position from './Position'
import { randomBoolean } from './helpers/Random'

/** 
 * Represents a Cell in the game of life. 
 * 
 * A cell can either be alive or dead. A cell has a position on the game grid.
 */
class Cell {
  constructor(isAlive, position = new Position(0, 0)) {
    this.isAlive = isAlive
    this.position = position
  }
}

/** Generates a Cell with a random initial state. */
Cell.generate = function(position = new Position(0, 0), likelihoodAlive = 50) {
  return new Cell(randomBoolean(likelihoodAlive), position)
}

export default Cell
