const Math = require("./Math.js")
const RandomOperation = require("./RandomOperation.js")

class Quiz {
    constructor(count, minAllowed, maxAllowed){
	this.total = count
	this.minAllowed = minAllowed
	this.maxAllowed = maxAllowed
    }

    next(){
	if (this.total <= 0)
	    return false
	this.total--
	return new RandomOperation(this.minAllowed, this.maxAllowed)
    }
}

module.exports = Quiz
