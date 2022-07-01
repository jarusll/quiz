const Operation = require("./Operation.js")
const Math = require("./Math.js")
const Array = require("./Array.js")

class RandomOperation extends Operation {
    constructor(minAllowed, maxAllowed){
	super()
	this.left = Math.randomRange(minAllowed, maxAllowed)
	this.right = Math.randomRange(minAllowed, maxAllowed)
	this.operator = ["+", "-", "*", "/"].random()
    }
}

module.exports = RandomOperation
