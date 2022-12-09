import React, { useState } from 'react'

const HookCounterTwo = () => {
    const initialValue = 0;
    const [count,setCount] = useState(initialValue)
    const increamentCount = () =>{
        setCount(count+1)
    }
    const decreamentCount = () =>{
        setCount(count-1)
    }
    const resetCounter = () =>{
        setCount(0)
    }
  return (
    <div>
        <h1>
            {
                count
            }
        </h1>

        <button onClick={()=>resetCounter()}> Reset </button>
        <button onClick={()=>increamentCount()}> Increament </button>
        <button onClick={()=>decreamentCount()}> Decreament </button>

    </div>
  )
}

export default HookCounterTwo