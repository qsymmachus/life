import { expect } from 'chai'
import Cell from '../../src/domain/Cell'

describe("Cell", () =>
  describe("generate", () =>
    it("should return a randomly generated Cell", function() {
      let cell = Cell.generate()
      expect(cell).to.be.a('object')
      expect(cell.isAlive).to.be.a('boolean')
    })
  )
)
