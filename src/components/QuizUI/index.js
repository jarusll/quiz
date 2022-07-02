import { useRef } from "react"

function QuizUI({ left, right, operator, submit }) {
	const inputRef = useRef(null)
	return (
		<div className="flex flex-column f2 items-center">
			<div>{left} {operator} {right}</div>
			<input type="text" ref={inputRef} />
			<button className="f4 ma2 bg-blue white bn pa2 br1" onClick={() => {
				submit(inputRef.current.value)
				inputRef.current.value = ""
			}}>Submit</button>
		</div>
	)
}

export default QuizUI