import Math from "./Math.js"
import RandomOperation from "./RandomOperation.js"
import Operation from "./Operation.js"

class Quiz {
	#score = 0
    constructor(count, minAllowed, maxAllowed){
	this.status = "initial"
	this.total = count
	this.minAllowed = minAllowed
	this.maxAllowed = maxAllowed
	this.current = null
	this.submissions = []
    }

    next(){
	if (this.submissions.length >= this.total)
	    return false
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
		this.#score++
	return result
    }

    start(){
	if (this.status === "initial"){
	    this.next()
	    this.status = "running"
	}
    }

    score(){
		return this.#score
    }

	report(){
		const wrong = this.submissions.filter(([expr, answered]) => Number(expr.value()).toFixed(1) !== Number(answered).toFixed(1))
			.map(([expr, answered]) => ({
				operation: expr,
				answered
			}))
		return {
			score: this.score(),
			wrong
		}
	}
}

export default Quiz
