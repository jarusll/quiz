import RandomOperation from "../src/classes/RandomOperation.js"
import { expect } from "chai"

describe("RandomOperation", function(){
    describe("#constructor", function(){
	it("inits", function(){
	    const randomOp = new RandomOperation(1, 10)
	    console.table(randomOp)
	    expect(randomOp).to.be.instanceOf(RandomOperation)
	})
    })

    describe("#value", function(){
	it("returns the value of operation", function(){
	    const randomOp = new RandomOperation(1, 10)
	    const {left, right, operator} = randomOp
	    const value = eval(`${left} ${operator} ${right}`)
	    console.table(randomOp)
	    console.log("value", value)
	    expect(randomOp.value()).to.be.equal(value)
	})
    })
})
