import { useState, useEffect, useRef } from "react"

function QuizUI({left, right, operator, next, check}){
    const inputRef = useRef(null)
    useEffect(() => console.log(left, right, operator), [left, right, operator])
    return (<>
	    <div>
	    <div>{left} {operator} {right}</div>
	    <input type="text" ref={inputRef} />
	    <button onClick={() => {
		check(inputRef.current.value)
		next()
	    }}>Submit</button>
	    </div>
	    </>
	   )
}

export default QuizUI
