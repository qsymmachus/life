/** 
 * Represents a Cell in the game of life. 
 * 
 * A cell can either be alive or dead. A cell has a position
 * determined by `x` and `y` coordinates.
 */
class Cell {
  constructor(isAlive, x = 0, y = 0) {
    this.isAlive = isAlive
    this.x = x
    this.y = y
  }
}

/** Generates a Cell with a random initial state. */
Cell.generate = function(x = 0, y = 0) {
  return new Cell(randomBoolean(), x, y)
}

/** Helper function that returns a randomly generated boolean. */
function randomBoolean() {
  return Math.random() >= 0.5;
}

export default Cell
