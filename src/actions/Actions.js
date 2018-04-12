import store from '../store/Store'
import Grid from '../domain/Grid'
import Life from '../domain/Life'

/**
 * Redux action to update the state of the game Grid.
 * 
 * Given the Grid in application state, applies the rules of Conway's Game of Life to generate the next
 * generation or 'tick' of the grid, and updates the application state with this new grid.
 */
export function tick() {
  store.setState({
    grid: Life.tick(store.getState().grid)
  })
}

/**
 * Redux action to update the state of the Grid.
 * 
 * Regenerates the Grid with the given pattern. A pattern is a two-dimensional array of booleans.
 * 
 * See: `src/domain/Patterns.js` for example patterns.
 */
export function switchGridPattern(pattern) {
  store.setState({
    grid: Grid.generateFromBooleans(pattern)
  })
}

/**
 * Redux action to update the state of the Grid.
 * 
 * Randomizes the state of the Grid.
 */
export function randomizeGrid() {
  store.setState({
    grid: Grid.generate(100, 100, 30)
  })
}
