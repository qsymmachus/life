let Life = {
  /**
   * Enforces the basic rules of Conway's Game of Life.
   * 
   * Given a cell and its neighbors, determines whether the cell will live or die
   * in the next generation. This is based on four rules:
   * 
   * 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
   * 2. Any live cell with two or three live neighbours lives on to the next generation.
   * 3. Any live cell with more than three live neighbours dies, as if by overpopulation.
   * 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
   */
  willLive: function(cell, neighbors) {
    let livingNeighbors = neighbors.filter((cell) => cell.isAlive)

    if (cell.isAlive) {
      if (livingNeighbors.length < 2) {
        return false
      } else if (livingNeighbors.length == 2 || livingNeighbors.length == 3) {
        return true
      } else if (livingNeighbors.length > 3) {
        return false
      }
    } else {
      if (livingNeighbors.length == 3) {
        return true
      } else {
        return false
      }
    }
  }
}

export default Life
