import { expect } from 'chai'
import {padBooleanArray} from '../../../src/domain/helpers/Padder'

describe("padBooleanArray", () =>
  it("should pad a two-dimensional boolean array up to a given width and height", function() {
    let booleanArray = [
      [false, true, false],
      [true, false, false]
    ]

    let paddedArray = padBooleanArray(booleanArray, 100, 100)

    expect(paddedArray).to.have.lengthOf(100)
    paddedArray.forEach((row) => expect(row).to.have.lengthOf(100))
    expect(paddedArray[0][0]).to.be.false
    expect(paddedArray[0][1]).to.be.true
    expect(paddedArray[1][0]).to.be.true
  }),

  it("should offset the padded array if an offset is specified", function() {
    let offset = 5
    let booleanArray = [
      [false, true, false],
      [true, false, false]
    ]

    let paddedArray = padBooleanArray(booleanArray, 100, 100, offset)

    expect(paddedArray).to.have.lengthOf(100)
    paddedArray.forEach((row) => expect(row).to.have.lengthOf(100))
    expect(paddedArray[0 + offset][0 + offset]).to.be.false
    expect(paddedArray[0 + offset][1 + offset]).to.be.true
    expect(paddedArray[1 + offset][0 + offset]).to.be.true
  })
)
