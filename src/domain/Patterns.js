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
  fromString: function(patternString, offset=0) {
    let patternArray = patternString
      .split("\n")
      .filter((line) => line !== '')
      .map((line) => 
        line.split('').map((char) => char === 'O' ? true : false)
      )
      
    return padBooleanArray(patternArray, 100, 100, offset)
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
   * Pattern for a Gosper Glider Gun.
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
   * Pattern for a Switch Engine.
   * See: http://www.conwaylife.com/wiki/Switch_engine
   * 
   * Since this pattern needs space to expand, we offset it 35 spaces within the grid.
   */
  switchEngine: function() {
    return this.fromString(this.switchEngineString, 35)
  },

  noahsArkString: `
..........O.O
.........O
..........O..O
............OOO
.
.
.
.
.
.O
O.O
.
O..O
..OO
...O
`,

  /**
   * Pattern for a Noah's Ark.
   * See: http://www.conwaylife.com/wiki/Noah%27s_ark
   */
  noahsArk: function() {
    return this.fromString(this.noahsArkString, 70)
  }
}

export default Patterns
