import { useEffect, useRef } from "react"
import { useTimer } from 'use-timer';

function QuizUI({ left, right, operator, submit, reset }) {
	const inputRef = useRef(null)
	const { time, start } = useTimer({
		initialTime: 30,
		endTime: 0,
		timerType: 'DECREMENTAL',
		onTimeOver: () => submit("")
	});
	useEffect(() => {
		start()
		inputRef.current.focus()
	}, [])

	return (
		<div className="pa2 mw-100">
			<div className="flex flex-row center">
				<button onClick={() => reset()} className="f4">Reset</button>
			</div>
			<form className="flex flex-column f2 items-center">
				{/* timer */}
				<pre>{time}s</pre>
				{/* operation */}
				<div>{left} {operator} {right}</div>
				{/* answer input */}
				<input type="text" ref={inputRef} className="w-50"/>
				<button className="f4 ma2 bn pa2 br1" onClick={() => {
					submit(inputRef.current.value)
					inputRef.current.value = ""
				}}>Submit</button>
			</form>
		</div>
	)
}

export default QuizUI