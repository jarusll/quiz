import { useRef } from "react"

function QuizUI({ left, right, operator, submit }) {
	const inputRef = useRef(null)
	return (
		<div>
			<div>{left} {operator} {right}</div>
			<input type="text" ref={inputRef} />
			<button onClick={() => {
				submit(inputRef.current.value)
				inputRef.current.value = ""
			}}>Submit</button>
		</div>
	)
}

export default QuizUI