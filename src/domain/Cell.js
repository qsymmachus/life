import Position from './Position'

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
Cell.generate = function(position = new Position(0, 0)) {
  return new Cell(randomBoolean(), position)
}

/** Helper function that returns a randomly generated boolean. */
function randomBoolean() {
  return Math.random() >= 0.5;
}

export default Cell
