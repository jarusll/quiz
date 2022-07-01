const Quiz = require('../src/classes/Quiz.js')
const expect = require("chai").expect

describe("Quiz", function(){
    it("should be initialized", function(){
	const quiz = new Quiz(10)
	expect(quiz).to.be.instanceOf(Quiz)
    })
})
