import React, { useState } from 'react'

const HookCounterThree = () => {
    const [name, setName] = useState({
        fistName: "", lastName: ""
    })
    return (
        <form>
            <input type='text' value={name.fistName} onChange={e => setName({...name ,fistName: e.target.value })} />
            <input type='text' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value })} />
            <h1>
                {
                    name.fistName
                }
            </h1>
            <h2>
                {
                    name.lastName
                }
            </h2>
            <h1>
                {
                    JSON.stringify(name)
                }
            </h1>
        </form>
    )
}

export default HookCounterThree