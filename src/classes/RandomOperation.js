import Operation from "./Operation.js"
import Math from "./Math.js"
import Array from "./Array.js"

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

export default RandomOperation
