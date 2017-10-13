import store from '../store/Store'
import Grid from '../domain/Grid'
import Life from '../domain/Life'

/**
 * Redux action to update the application state.
 * 
 * Given the Grid in application state, applies the rules of Conway's Game of Life to generate the next
 * generation or 'tick' of the grid., and updates the application state with this new grid.
 */
export function tick() {
  store.setState({
    grid: Life.tick(store.getState.grid())
  })
}
