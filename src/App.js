import { useState } from "react"
import QuizUI from "./components/QuizUI/index.js"
import Report from "./components/Report/index.js"
import Quiz from "./classes/Quiz.js"
import "./App.css"

function App() {
	const [quiz, setQuiz] = useState(new Quiz(2, 1, 10))

	const submit = x => {
		quiz.check(x)
		quiz.next()
		let clone = Object.assign(Object.create(Object.getPrototypeOf(quiz)), quiz)
		setQuiz(clone)
	}
	const start = () => {
		quiz.start()
		let clone = Object.assign(Object.create(Object.getPrototypeOf(quiz)), quiz)
		setQuiz(clone)
	}

	const QuizApp = () => {
		if (quiz.status == "initial")
			return (<div className="pt4 flex flex-column justify-center items-center">
				<h2 className="f1">QUIZ</h2>
				<button className="f2 pointer" onClick={() => start()}>Start</button>
			</div>)
		if (quiz.status == "running")
			return (<QuizUI left={quiz.current.left} right={quiz.current.right}
				operator={quiz.current.operator} submit={submit} />)
		return <Report {...quiz.report()} />
	}
	return (
		<div className="vh-100 app">
			<QuizApp />
		</div>
	);
}

export default App;
