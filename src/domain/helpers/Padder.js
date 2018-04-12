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
 * 
 * The optional `offset` parameter allows you shift the `arrayToPad` a given distance within the larger padded array.
 * For example, an `offset` of 25 will shift the `arrayToPad` 25 rows down and 25 elements to the right.
 */
export function padBooleanArray(arrayToPad, width = 100, height = 100, offset=0) {
  return range(height).map((y) =>
    range(width).map((x) => 
      arrayToPad[y - offset] ? arrayToPad[y - offset][x - offset] : false
    )
  )
}