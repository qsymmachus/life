import { createStore } from 'redux-zero'
import Grid from '../domain/Grid'

/**
 * Defines the initial Redux state of the application.
 */
const initialState = { grid: Grid.generate() }
const store = createStore(initialState)

export default store
