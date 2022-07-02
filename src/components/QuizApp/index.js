import { useState } from "react"
import QuizUI from "../QuizUI/index.js"
import Report from "../Report/index.js"
import Quiz from "../../classes/Quiz.js"

function QuizApp({ score }) {
	const [quiz, setQuiz] = useState(new Quiz(2, 1, 10))

	const submit = x => {
		quiz.check(x)
		quiz.next()
		let clone = Object.assign(Object.create(Object.getPrototypeOf(quiz)), quiz)
		setQuiz(clone) 
        score(quiz.score())
	}
	const start = () => {
		quiz.start()
		let clone = Object.assign(Object.create(Object.getPrototypeOf(quiz)), quiz)
		setQuiz(clone)
        score(0)
	}

	const reset = () => {
		quiz.reset()
		let clone = Object.assign(Object.create(Object.getPrototypeOf(quiz)), quiz)
		setQuiz(clone)
        score(0)
	}

	const QuizRouter = () => {
		if (quiz.status == "initial")
			return (<div className="pt4 flex flex-column justify-center items-center">
				<h2 className="f1">QUIZ</h2>
				<button className="f2 pointer" onClick={() => start()}>Start</button>
			</div>)
		if (quiz.status == "running")
			return (<QuizUI left={quiz.current.left} right={quiz.current.right}
				operator={quiz.current.operator} submit={submit} reset={reset}/>)
        const report = quiz.report()
        console.log("report", report)
		return <Report score={report.score} submissions={report.submissions} reset={reset}/>
	}
	return (
		<div className="vh-100 app mw-100">
			<QuizRouter />
		</div>
	);
}

export default QuizApp;