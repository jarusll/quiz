const Math = require("./Math.js")

class Quiz {
    constructor(count){
	this.count = count
	this.min = 1
	this.max = 10
    }

    next(){
	const left = Math.randomRange(this.min, this.max)
	const right = Math.randomRange(this.min, this.max)
    }
}

module.exports = Quiz
