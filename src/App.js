import { useState, useEffect } from "react"
import QuizUI from "./components/QuizUI/index.js"
import Quiz from "./classes/Quiz.js"

function App() {
    const [quiz, setQuiz] = useState(new Quiz(10, 1, 10))
    quiz.start()
    useEffect(() => console.log(quiz.current), [quiz.current.left, quiz.current.right, quiz.current.operator])
    return (
	    <div>
	    <QuizUI {...quiz.current} check={x => quiz.check(x)} next={() => quiz.next()}/>
	    <div>
	    {quiz.current.left} {quiz.current.operator} {quiz.current.right}
	    </div>
	    </div>
    );
}

export default App;
