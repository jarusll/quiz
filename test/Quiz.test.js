const Quiz = require('../src/classes/Quiz.js')
const RandomOperation = require('../src/classes/RandomOperation.js')
const expect = require("chai").expect

describe("Quiz", function(){
    it("inits", function(){
	const quiz = new Quiz(10)
	expect(quiz).to.be.instanceOf(Quiz)
    })

    it("generates random operation", function(){
	const quiz = new Quiz(10)
	const op = quiz.next()
	console.log(op)
	expect(op).to.be.instanceOf(RandomOperation)
    })
})
