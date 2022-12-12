import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataFetching = () => {
    const [post, setPost] = useState({})
    const [id,setId] = useState(1)
    useEffect(() => {
        console.log(id)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    },[id])
    return (
        <div>
            <input type='text' value={id} onChange = {e=>setId(e.target.value)} />
          <div> {post.title} </div>
          
        </div>
    )
}

export default DataFetching