import './App.css'
import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    const handleADD = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    return (
        <div className='counter'>
            <h3>Counter: {count} </h3>
            <button onClick={handleADD}>ADD</button>
        </div>
    )
}