import Math from "./Math.js"
import RandomOperation from "./RandomOperation.js"
import Operation from "./Operation.js"

class Quiz {
    constructor(count, minAllowed, maxAllowed){
	this.total = count
	this.minAllowed = minAllowed
	this.maxAllowed = maxAllowed
	this.current = null
	this.submissions = []
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
	this.submissions.push([this.current, value])
	return opValue === givenValue
    }
}

export default Quiz
