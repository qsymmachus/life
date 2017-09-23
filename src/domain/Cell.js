/** 
 * Represents a Cell in the game of life. 
 * 
 * A cell can either be alive or dead.
 */
class Cell {
  constructor(isAlive) {
    this.isAlive = isAlive
  }
}

/** Generates a Cell with a random initial state. */
Cell.generate = function() {
  return new Cell(randomBoolean())
}

/** Helper function that returns a randomly generated boolean. */
function randomBoolean() {
  return Math.random() >= 0.5;
}

export default Cell
