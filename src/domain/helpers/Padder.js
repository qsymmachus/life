import { range } from './Range'

/**
 * Given a two-dimensional boolean array, pads the array to a given height and width.
 * 
 * For example, assuming we are using a height and width of 100, and given the following boolean array:
 * 
 *   [
 *     [false, true, false],
 *     [false, false, true]
 *   ]
 * 
 * The function will copy the contents of the two rows of this array. Then, it will fill in the rest of the array
 * with `false` elements until it has 100 rows, and each row is 100 elements long. This is what we mean by "padding".
 */
export function padBooleanArray(arrayToPad, width = 100, height = 100) {
  return range(height).map((y) =>
    range(width).map((x) => 
      arrayToPad[y] ? arrayToPad[y][x] : false
    )
  )
}