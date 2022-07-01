const Math = require("./Math.js")
const RandomOperation = require("./RandomOperation.js")
const Operation = require("./Operation.js")

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
	if (arguments.length === 3)
	    this.current = new Operation(...arguments)
	if (arguments.length === 0)
	    this.current = new RandomOperation(this.minAllowed, this.maxAllowed)
	return this.current
    }

    check(value){
	const opValue = Number(this.current.value()).toFixed(1)
	const givenValue = Number(value).toFixed(1)
	return opValue === givenValue
    }
}

module.exports = Quiz
