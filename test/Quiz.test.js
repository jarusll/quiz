
const Quiz = require('../src/classes/Quiz.js')
const RandomOperation = require('../src/classes/RandomOperation.js')
const expect = require("chai").expect

describe("Quiz", function(){
    describe("#constructor", function(){
	it("inits", function(){
	    const quiz = new Quiz(10)
	    expect(quiz).to.be.instanceOf(Quiz)
	})
    })

    describe("#next", function(){
	const quiz = new Quiz(10)
	it("generates and returns random operation", function(){
	    const op = quiz.next()
	    console.table(op)
	    expect(op).to.be.instanceOf(RandomOperation)
	})

	it("decrement question count", function(){
	    expect(quiz.total).to.be.equal(9)
	})
	it("returns false when total = 0", function(){
	    const quiz = new Quiz(0)
	    expect(quiz.next()).to.be.false
	})

	it("generates test case with given bounds", function(){
	    const quiz = new Quiz(5, 7, 22)
	    const next = quiz.next() 
	    expect(next.minAllowed).to.equal(7)
	    expect(next.maxAllowed).to.equal(22)
	})

	it("sets the current prop to generated operation", function(){
	    const quiz = new Quiz(5, 7, 22)
	    const next = quiz.next() 
	    expect(quiz.current).to.equal(next)
	})
    })
})
