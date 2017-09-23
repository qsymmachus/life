/** 
 * Generates a random 100 x 100 grid of cells.
 * 
 * Cells are represented as a two-dimensional array of booleans. 
 * `true` represents a live cell, `false` represents a dead cell.
 */
export function generateRandomCells() {
  return range(100).map(row => 
    range(100).map(state =>
      randomBoolean()
    )
  )
}

/** Helper function that returns a randomly generated boolean. */
function randomBoolean() {
  return Math.random() >= 0.5;
}

/** Helper function that generates an array of [0..n-1] elements. */
function range(n) {
  return [...Array(n).keys()]
}
