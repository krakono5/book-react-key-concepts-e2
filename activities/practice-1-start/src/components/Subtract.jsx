import { useState } from "react"

function Subtract() {
    const [enteredNumbers, setEnteredNumbers] = useState({ first: 0, second: 0 })

    function handleFirstNumberChanged(event) {
        setEnteredNumbers( (prevNumber) => ({
            first: +event.target.value,
            second: prevNumber.second
        }));
    }

    
    function handleSecondNumberChanged(event) {
        setEnteredNumbers( (prevNumber) => ({
            first: prevNumber.first,
            second: +event.target.value
        }));
    }

    const result = enteredNumbers.first - enteredNumbers.second;

    return <div>
        <input type="number" onChange={handleFirstNumberChanged}></input>
        {' '}-{' '}
        <input type="number" onChange={handleSecondNumberChanged}></input>
        {' = '}{result}
    </div>
}

export default Subtract