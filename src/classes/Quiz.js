import Math from "./Math.js"
import RandomOperation from "./RandomOperation.js"
import Operation from "./Operation.js"

class Quiz {
	correct = 0
    constructor(count, minAllowed, maxAllowed){
	this._status = "initial"
	this.total = count
	this.minAllowed = minAllowed
	this.maxAllowed = maxAllowed
	this.current = null
	this.submissions = []
    }

	get status(){
		return this._status
	}

	set status(newStatus){
		this._status = newStatus
	}

    next(){
	if (this.submissions.length >= this.total){
		this.status = "ended"
	    return false
	}
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
	const result = opValue === givenValue
	if (result)
		this.correct++
	return result
    }

    start(){
	if (this.status === "initial"){
	    this.next()
	    this.status = "running"
	}
    }

    score(){
		return this.correct
    }

	report(){
		return {
			score: this.score(),
			submissions: this.submissions
		}
	}

	reset(){
		this.correct = 0
		this.status = "initial"
		this.submissions = []
	}
}

export default Quiz
