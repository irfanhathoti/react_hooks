import React, { useState } from 'react'

const HookArray = () => {
    const[items,setItem] = useState([])
    const addItems = () =>{
        setItem([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10) +1
        }])
    }
  return (
    <div>
        <button onClick={addItems}>
            Add
        </button>
        <ul>
            {
                items.map(item=>(<li key={item.id}>
                    {
                        item.value
                    }
                </li>))
            }
        </ul>

    </div>
  )
}

export default HookArray