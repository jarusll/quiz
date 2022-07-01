
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
    })
})
