const Math = require("./Math.js")
const RandomOperation = require("./RandomOperation.js")

class Quiz {
    constructor(count){
	this.total = count
	this.min = 1
	this.max = 10
    }

    next(){
	this.total--
	return new RandomOperation(this.min, this.max)
    }
}

module.exports = Quiz
