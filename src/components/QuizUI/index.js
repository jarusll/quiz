import { useEffect, useRef, useState } from "react"
import { useTimer } from 'use-timer';

function QuizUI({ left, right, operator, submit }) {
	const inputRef = useRef(null)
	const { time, start } = useTimer({
		initialTime: 10,
		endTime: 0,
		timerType: 'DECREMENTAL',
		onTimeOver: () => submit("")
	});
	useEffect(() => {
		start()
		inputRef.current.focus()
	}, [])

	return (
		<div>
			<form className="flex flex-column f2 items-center">
				<pre>{time}s</pre>
				<div>{left} {operator} {right}</div>
				<input type="text" ref={inputRef} />
				<button className="f4 ma2 bn pa2 br1" onClick={() => {
					submit(inputRef.current.value)
					inputRef.current.value = ""
				}}>Submit</button>
			</form>
		</div>
	)
}

export default QuizUI