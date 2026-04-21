// File logic note: This file is documented for revision-friendly learning.
// Profile view: reads context user and renders either fallback or greeting.

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