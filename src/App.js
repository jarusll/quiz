import { useState } from "react"
import QuizApp from "./components/QuizApp/index.js";
import "./App.css"

function App() {
	const [score1, setScore1] = useState(0)
	const [score2, setScore2] = useState(0)
	const getScore1 = x => setScore1(x)
	const getScore2 = x => setScore2(x)
	return (<div>
		<div className="flex flex-column app">
			<h2 className="f2 tc">{score1 + score2}</h2>
			<div className="flex flex-row w-100">
				<div className="w-50">
					<QuizApp score={getScore1} />
				</div>
				<div className="w-50">
					<QuizApp score={getScore2} />
				</div>
			</div>
		</div>
	</div>)
}

export default App;
