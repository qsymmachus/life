import { expect } from 'chai'
import Grid from '../../src/domain/Grid'
import Position from '../../src/domain/Position'

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
  ),

  describe("generateFromBooleans", () =>
    it("should return a Grid with cells whose 'isAlive' state is determined by the booleans", function() {
      let bools = [
        [true, false, true],
        [false, true, false],
        [true, true, true]
      ]
      let grid = Grid.generateFromBooleans(bools)
      
      expect(grid).to.have.property('cells').with.lengthOf(bools.length)

      grid.cells.map((row, y) =>
        row.map((cell, x) =>
          expect(cell.isAlive).to.equal(bools[y][x])
        )
      )
    })
  ),

  describe("getCell", () =>
    it("should return an Option containing a well if a cell is found", function () {
      let size = 5
      let grid = Grid.generate(size, size)
      let option = grid.getCell(new Position(1, 1))
      let cell = option.get()

      expect(option.isDefined()).to.be.true
      expect(cell.position.x).to.equal(1)
      expect(cell.position.y).to.equal(1)
    }),

    it("should return a None if no cell is found", function() {
      let size = 5
      let grid = Grid.generate(size, size)
      let option = grid.getCell(new Position(10, 10))

      expect(option.isEmpty()).to.be.true
    })
  ),

  describe("getNeighbors", () =>
    it("should return the neighbors of a cell", function() {
      let grid = Grid.generate(3, 3)
      let cell = grid.getCell(new Position(1, 1)).get()
      let neighbors = grid.getNeighbors(cell)

      expect(neighbors).to.have.lengthOf(8)
    }),

    it("should return the neighbors of a cell on the edge of the grid", function() {
      let grid = Grid.generate(3, 3)
      let cell = grid.getCell(new Position(1, 0)).get()
      let neighbors = grid.getNeighbors(cell)

      expect(neighbors).to.have.lengthOf(5)
    }),

    it("should return the neighbors of a cell on the corner of the grid", function() {
      let grid = Grid.generate(3, 3)
      let cell = grid.getCell(new Position(0, 0)).get()
      let neighbors = grid.getNeighbors(cell)

      expect(neighbors).to.have.lengthOf(3)
    })
  )
)
