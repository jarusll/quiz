const Math = require("./Math.js")
const RandomOperation = require("./RandomOperation.js")

class Quiz {
    constructor(count, minAllowed, maxAllowed){
	this.total = count
	this.minAllowed = minAllowed
	this.maxAllowed = maxAllowed
	this.current = null
    }

    next(){
	if (this.total <= 0)
	    return false
	this.total--
	this.current = new RandomOperation(this.minAllowed, this.maxAllowed)
	return this.current
    }
}

module.exports = Quiz
