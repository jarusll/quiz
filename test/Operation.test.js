import Operation from "../src/classes/Operation.js"
import { expect } from "chai"

describe("Operation", function(){
    describe("constructor", function(){
	it("should be initialized", function(){
	    const operation = new Operation(10, 20, "*")
	    expect(operation).to.be.instanceOf(Operation)
	})
    })

    describe("#value", function(){
	it("should return value of operation", function(){
	    const operation = new Operation(10, 20, "*")
	    expect(operation.value()).to.equal(200)
	})
    })

    describe("#set left and right", function(){
	it("should set value of left operand to given value", function(){
	    const operation = new Operation(10, 20, "*")
		operation.left = 20
		operation.right = 10
	    expect(operation.left).to.equal(20)
	    expect(operation.right).to.equal(10)
	})
    })
})
