import store from '../store/Store'
import Grid from '../domain/Grid'
import Life from '../domain/Life'

/**
 * Given an array of cells, applies the rules of Conway's Game of Life to generate the next
 * generation or 'tick' of cells, and updates the application state with these new cells.
 */
export function tick(prevCells) {
  store.setState({
    cells: Life.tick(new Grid(prevCells)).cells
  })
}
