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

	get left(){
		return this._left
	}

	set left(newLeft){
		this._left = newLeft
	}

	get operator(){
		return this._operator
	}

	set operator(newOp){
		this._operator = newOp
	}

	get right(){
		return this._right
	}

	set right(newRight){
		this._right = newRight
	}
    value(){
	return this.#operationMap[this._operator](this._left, this._right)
    }
}

export default Operation
