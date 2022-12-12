import React, { useState } from 'react'
import UseEffectHook from './UseEffectHook'

const UseEffectUnmount = () => {
    const [display,setDisplay] = useState(true)
  return (
    <div>

        <button onClick={()=>setDisplay(!display)} > Toggle </button>

        {display && <UseEffectHook/> }

    </div>
  )
}

export default UseEffectUnmount