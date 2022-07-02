const Operation = ({ operation }) => {
    return (<>
        {/* <div>{JSON.stringify(operation)}</div> */}
        <div>{operation.left} {operation.operator} {operation.right}</div>
    </>)
}

function Report({ score, submissions }) {
    return (<div className="flex flex-column items-center justify-center">
        <h2 className="f2">Score: {score}</h2>
        <table className="ba f4 fw5 avenir br1">
            <thead className="athelas">
                <tr>
                    {
                        ["Operation", "Answered", "Value"].map(x => <th key={x} className="pv1 ph2 tableHeader" >{x}</th>)
                    }
                </tr>
            </thead>
            {submissions.map(([operation, answered]) => {
                const isCorrect = Number(operation.value()).toFixed(1) === Number(answered).toFixed(1) 
                return (<tr className={`tc ${isCorrect ? "correct" : "wrong"}`}>
                    <td>
                        <Operation operation={operation} />
                    </td>
                    <td>
                        <span>{answered}</span>
                    </td>
                    <td>
                        <span>{operation.value()}</span>
                    </td>
                </tr>)})}
        </table>
    </div>)
}

export default Report
