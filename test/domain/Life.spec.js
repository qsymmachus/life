import { expect } from 'chai'
import Life from '../../src/domain/Life'
import Cell from '../../src/domain/Cell'
import Grid from '../../src/domain/Grid'
import Position from '../../src/domain/Position'

describe("Life", () =>
  describe("willLive", () =>
    it("should return false if the cell is alive and has fewer than two living neighbors", function() {
      let grid = Grid.generateFromBooleans([
        [true, false, false],
        [false, true, false],
        [false, false, false]
      ])
      let cell = grid.getCell(new Position(1, 1)).get()
      let neighbors = grid.getNeighbors(cell)

      expect(Life.willLive(cell, neighbors)).to.be.false
    }),

    it("should return true if the cell is alive and has two living neighbors", function() {
      let grid = Grid.generateFromBooleans([
        [true, true, false],
        [false, true, false],
        [false, false, false]
      ])
      let cell = grid.getCell(new Position(1, 1)).get()
      let neighbors = grid.getNeighbors(cell)

      expect(Life.willLive(cell, neighbors)).to.be.true
    }),

    it("should return true if the cell is alive and has three living neighbors", function() {
      let grid = Grid.generateFromBooleans([
        [true, true, true],
        [false, true, false],
        [false, false, false]
      ])
      let cell = grid.getCell(new Position(1, 1)).get()
      let neighbors = grid.getNeighbors(cell)

      expect(Life.willLive(cell, neighbors)).to.be.true
    }),

    it("should return false if the cell is alive and has more than three living neighbors", function() {
      let grid = Grid.generateFromBooleans([
        [true, true, true],
        [true, true, false],
        [false, false, false]
      ])
      let cell = grid.getCell(new Position(1, 1)).get()
      let neighbors = grid.getNeighbors(cell)

      expect(Life.willLive(cell, neighbors)).to.be.false
    }),

    it("should return false if the cell is dead and has less than three living neighbors", function() {
      let grid = Grid.generateFromBooleans([
        [true, false, false],
        [true, false, false],
        [false, false, false]
      ])
      let cell = grid.getCell(new Position(1, 1)).get()
      let neighbors = grid.getNeighbors(cell)

      expect(Life.willLive(cell, neighbors)).to.be.false
    }),

    it("should return false if the cell is dead and has more than three living neighbors", function() {
      let grid = Grid.generateFromBooleans([
        [true, true, true],
        [true, false, false],
        [false, false, false]
      ])
      let cell = grid.getCell(new Position(1, 1)).get()
      let neighbors = grid.getNeighbors(cell)

      expect(Life.willLive(cell, neighbors)).to.be.false
    }),

    it("should return true if the cell is dead and has exactly three living neighbors", function() {
      let grid = Grid.generateFromBooleans([
        [true, true, true],
        [false, false, false],
        [false, false, false]
      ])
      let cell = grid.getCell(new Position(1, 1)).get()
      let neighbors = grid.getNeighbors(cell)

      expect(Life.willLive(cell, neighbors)).to.be.true
    })
  )
)
