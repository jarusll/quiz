const Operation = require("../src/classes/Operation.js")
const expect = require("chai").expect

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
})
