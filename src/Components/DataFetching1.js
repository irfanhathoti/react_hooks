import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataFetching1 = () => {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idFromBtnClick,setIdFromBtnClick] = useState(1)

    const handleClick = () =>{
        setIdFromBtnClick(id)
    }

    //trigger useEffect on button click
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[idFromBtnClick])
  return (
    <div>
        <input type='text' value={id} onChange={e=>setId(e.target.value)} />
        <button onClick={handleClick}>Fetch Post</button>


        <div>
            {
                post.title
            }
        </div>


    </div>
  )
}

export default DataFetching1