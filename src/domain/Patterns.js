import { padBooleanArray } from './helpers/Padder'

/**
 * Some established Game of Life patterns that we can use as the initial state for a grid.
 * 
 * Each pattern is represented as a two-dimensional array of booleans. A `true` cell is a live cell.
 * Each pattern is 100 x 100 cells (even if the underlying pattern is smaller).
 * 
 * To use a pattern, instantiate a Grid with it:
 * 
 *   Grid.generateFromBooleans(Patterns.somePattern())
 * 
 */
let Patterns = {
  /** Given a plaintext pattern string, converts it to a two-dimensional array of booleans. */
  fromString: function(patternString) {
    let patternArray = patternString
      .split("\n")
      .filter((line) => line !== '')
      .map((line) => 
        line.split('').map((char) => char === 'O' ? true : false)
      )
      
    return padBooleanArray(patternArray)
  },

  /** Pattern string for a gosper glider gun. */
  gosperGliderGunString: `
........................O
......................O.O
............OO......OO............OO
...........O...O....OO............OO
OO........O.....O...OO
OO........O...O.OO....O.O
..........O.....O.......O
...........O...O
............OO
`,

  /** 
   * Pattern for a gosper glider gun.
   * See: http://www.conwaylife.com/w/index.php?title=Gosper_glider_gun 
   */
  gosperGliderGun: function() {
    return this.fromString(this.gosperGliderGunString)
  },

  switchEngineString: `
.O.O
O
.O..O
...OOO
  `,

  /**
   * Pattern for a switch engine.
   * See: http://www.conwaylife.com/wiki/Switch_engine
   */
  switchEngine: function() {
    return this.fromString(this.switchEngineString)
  }
}

export default Patterns
