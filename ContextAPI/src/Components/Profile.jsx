import React from 'react'
import { useState, useContext } from 'react'
import userContext from '../Context/UserContext'

function Profile(){
    const{user} = useContext(userContext)
    if(!user) return <div>Please Login</div>
  return (
    <div>
        Welcome {user.Username}
    </div>
  )
}

export default Profile