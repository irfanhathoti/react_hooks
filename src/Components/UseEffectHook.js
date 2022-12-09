import React,{useEffect, useState} from 'react'

const UseEffectHook = () => {
    const [count,setCount] = useState(0)


    //useEffect runs afetr every render ur componet

    useEffect(()=>{
        console.log("Hello World")
        document.title = `Clicked ${count} times`
    })

    const increamentCount = () =>{
        setCount(count+1)
    }
  return (
    <div>
        <button onClick={increamentCount}>Count:{count}</button>
    </div>
  )
}

export default UseEffectHook