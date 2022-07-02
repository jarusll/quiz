import { useState } from "react"
import QuizUI from "./components/QuizUI/index.js"
import Report from "./components/Report/index.js"
import Quiz from "./classes/Quiz.js"

function App() {
	const [quiz, setQuiz] = useState(new Quiz(2, 1, 10))
	quiz.start()

	const submit = x => {
		quiz.check(x)
		quiz.next()
		let clone = Object.assign(Object.create(Object.getPrototypeOf(quiz)), quiz)
		setQuiz(clone)
	}
	return (
		<div>
			{(quiz.submissions.length < quiz.total) ? <QuizUI {...quiz.current} submit={submit} /> : <Report {...quiz.report()} />}
		</div>
	);
}

export default App;
