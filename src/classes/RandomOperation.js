const Operation = require("./Operation.js")
const Math = require("./Math.js")
const Array = require("./Array.js")

class RandomOperation extends Operation {
    operators = ["+", "-", "*", "/"]
    constructor(minAllowed, maxAllowed){
	super()
	this.minAllowed = minAllowed
	this.maxAllowed = maxAllowed
	this.left = Math.randomRange(minAllowed, maxAllowed)
	this.right = Math.randomRange(minAllowed, maxAllowed)
	this.operator = this.operators.random()
    }

    randomize(minAllowed, maxAllowed){
	this.left = Math.randomRange(this.minAllowed, this.maxAllowed)
	this.right = Math.randomRange(this.minAllowed, this.maxAllowed)
	this.operator = this.operators.random()
    }
}

module.exports = RandomOperation
