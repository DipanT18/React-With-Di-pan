// File logic note: This file is documented for revision-friendly learning.
// Login form: captures credentials locally and pushes them to context state.

import React from 'react'
import { useState, useContext } from 'react'
import userContext from '../Context/UserContext'

function Login() {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    //Using Context to get access of another fuction i.e. setUser form userContextProviders
    const {setUser} = useContext(userContext    )

  return (  
    <div>
        <h2>Login</h2>
        <input type='text'
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'/>
        <input type='text'
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'/>
        <button onClick={
            (e) => {
                e.preventDefault()
                setUser({Username, Password}) 
            }
        }>Login</button>
    </div>
  )
}

export default Login