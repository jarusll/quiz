import { useState } from "react"
import QuizUI from "./components/QuizUI/index.js"
import Quiz from "./classes/Quiz.js"

function App() {
	const [quiz, setQuiz] = useState(new Quiz(10, 1, 10))
	quiz.start()

	const submit = x => {
		quiz.check(x)
		quiz.next()
		let clone = Object.assign(Object.create(Object.getPrototypeOf(quiz)), quiz)
		setQuiz(clone)
	}
	return (
		<div>
			<QuizUI {...quiz.current} submit={submit} />
		</div>
	);
}

export default App;
