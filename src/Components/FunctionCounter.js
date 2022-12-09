import React, { useState } from 'react'

const FunctionCounter = () => {
    const [count, setCount] = useState(0)
    const increamentCout = () =>{
        setCount(count+1)
    }
  return (
    <div>
        <h1>
            Function counter 
        </h1>
        <p>
            {
                count
            }
        </p>
        <button onClick={()=>increamentCout()}>
            Increament
        </button>


    </div>
  )
}

export default FunctionCounter