import { expect } from 'chai'
import Grid from '../../src/domain/Grid'

describe("Grid", () =>
  describe("generate", () =>
    it("should return a randomly generated Grid", function() {
      let size = 10
      let grid = Grid.generate(size, size)
      expect(grid).to.be.a('object')
      expect(grid).to.have.property('cells').with.lengthOf(size)

      grid.cells.map(row =>
        expect(row).to.have.lengthOf(size)
      )
    })
  )
)
