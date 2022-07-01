const RandomOperation = require("../src/classes/RandomOperation.js")
const expect = require("chai").expect

describe("RandomOperation", function(){
    it("inits", function(){
	const randomOp = new RandomOperation(1, 10)
	console.log(randomOp)
	expect(randomOp).to.be.instanceOf(RandomOperation)
    })

    it("#value", function(){
	const randomOp = new RandomOperation(1, 10)
	const {left, right, operator} = randomOp
	const value = eval(`${left} ${operator} ${right}`)
	console.log(randomOp)
	console.log("value", value)
	expect(randomOp.value()).to.be.equal(value)
    })
})
