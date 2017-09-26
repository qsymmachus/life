import { expect } from 'chai'
import Grid from '../../src/domain/Grid'

describe("Grid", () =>
  describe("generate", () =>
    it("should return a randomly generated Grid", function() {
      let grid = Grid.generate()
      expect(grid).to.be.a('object')
      expect(grid).to.have.property('cells')
    }),

    it("should return a grid with 100 x 100 cells", function() {
      let grid = Grid.generate()
      expect(grid).to.have.property('cells').with.lengthOf(100)

      grid.cells.map(row =>
        expect(row).to.have.lengthOf(100)
      )
    })
  )
)
