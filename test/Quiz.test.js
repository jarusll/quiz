
import Quiz from '../src/classes/Quiz.js'
import RandomOperation from '../src/classes/RandomOperation.js'
import Operation from '../src/classes/Operation.js'
import { expect } from "chai"

describe("Quiz", function(){
    describe("#constructor", function(){
	it("inits", function(){
	    const quiz = new Quiz(10)
	    expect(quiz).to.be.instanceOf(Quiz)
	})
    })

    describe("#next", function(){
	const quiz = new Quiz(10)
	it("returns random operation with 0 arguments", function(){
	    const op = quiz.next()
	    console.table(op)
	    expect(op.constructor.name).to.equal("RandomOperation")
	})

	it("returns operation with 3 arguments", function(){
	    const quiz = new Quiz(10, 2, 22)
	    const op = quiz.next(7, 8, "*")
	    console.table(op)
	    expect(op.constructor.name).to.equal("Operation")
	})

	it("returns false when submissions.length >= this.total", function(){
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

    describe("#check", function(){
	it("checks given value against operation value", function(){
	    const quiz = new Quiz(2, 4, 20)
	    const next = quiz.next(12, 5, "/") 
	    expect(quiz.check(2.4)).to.be.true
	})

	it("stores the results in submissions", function(){
	    const quiz = new Quiz(2, 4, 20)
	    const next1 = quiz.next(4, 5, "*") 
	    quiz.check(20)
	    expect(quiz.submissions).to.deep.equal([[next1, 20]])
	    const next2 = quiz.next(4, 5, "*") 
	    quiz.check(2)
	    expect(quiz.submissions).to.deep.equal([[next1, 20], [next2, 2]])
	})
    })

    describe("#score", function(){
	it("keeps count of correct answers", function(){
	    const quiz = new Quiz(10, 2, 7)
		quiz.next(2, 3, "*") 
		quiz.check(6) // correct
		quiz.next(2, 1, "+")
		quiz.check(5) // wrong
		quiz.next(4, 3, "-")
		quiz.check(1) // correct
	    expect(quiz.score()).to.be.equal(2)
	})
    })

    describe("#report", function(){
	it("keeps count of correct answers", function(){
	    const quiz = new Quiz(10, 2, 7)
		const next1 = quiz.next(2, 3, "*") 
		quiz.check(6) // correct
		const next2 = quiz.next(2, 1, "+")
		quiz.check(5) // wrong
		const next3 = quiz.next(4, 3, "-")
		quiz.check(2) // wrong
		const report = quiz.report()
	    expect(report.score).to.be.equal(1)
	    expect(report.submissions).to.be.deep.equal([[next1, 6], [next2, 5], [next3, 2]])
	})
    })

	describe("#status", function(){
		it("returns `initial` when quiz is not started", function(){
			const quiz = new Quiz(10, 1, 10)
			expect(quiz.status).to.be.equal("initial")
		})
		it("returns `running` when quiz is running", function(){
			const quiz = new Quiz(10, 1, 10)
			quiz.start()
			expect(quiz.status).to.be.equal("running")
		})
		it("returns `ended` when quiz is finished", function(){
			const quiz = new Quiz(2, 1, 10)
			quiz.start()
			quiz.check(4)
			quiz.next()
			quiz.check(4)
			quiz.next()
			expect(quiz.status).to.be.equal("ended")
		})
	})

	describe("#reset", function(){
		it("resets submissions to [] and quiz status to initial", function(){
			const quiz = new Quiz(10, 1, 10)
			quiz.start()
			quiz.check(4)
			quiz.next()
			quiz.check(4)
			quiz.next()
			quiz.reset()
			expect(quiz.status).to.be.equal("initial")
			expect(quiz.score()).to.be.equal(0)
			expect(quiz.submissions).to.be.deep.equal([])
		})
	})
})
