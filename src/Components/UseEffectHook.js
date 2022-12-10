import React,{useEffect, useState} from 'react'

const UseEffectHook = () => {
    const [count,setCount] = useState(0)


    //useEffect runs afetr every render ur componet

    //conditionally run effect

    const [name,setName] = useState('')

    useEffect(()=>{
       
        console.log("useEffect-title updated..")
        document.title = `Clicked ${count} times`
    },[count])

    const increamentCount = () =>{
        setCount(count+1)
    }
  return (
    <div>
        <input type='text' value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={increamentCount}>Count:{count}</button>
    </div>
  )
}

export default UseEffectHook