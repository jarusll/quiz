const Operation = require("../src/classes/Operation.js")
const expect = require("chai").expect

describe("Operation", function(){
    it("should be initialized", function(){
	const operation = new Operation(10, 20, "*")
	expect(operation).to.be.instanceOf(Operation)
    })

    it("should return value of operation", function(){
	const operation = new Operation(10, 20, "*")
	expect(operation.value()).to.equal(200)
    })
})
