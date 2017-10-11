import { createStore } from 'redux-zero'
import Grid from '../domain/Grid'

/**
 * Defines the initial state of the application.
 */
const initialState = { cells: Grid.generate().cells }
const store = createStore(initialState)

export default store
