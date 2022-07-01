class Operation {
    #operationMap = {
	"+": (a, b) => a + b,
	"-": (a, b) => a - b,
	"*": (a, b) => a * b,
	"/": (a, b) => a / b,
    }

    constructor(left, right, operator){
	this.left = left
	this.right = right
	this.operator = operator
    }

    value(){
	return this.#operationMap[this.operator](this.left, this.right)
    }
}

export default Operation
