// File logic note: This file is documented for revision-friendly learning.
// GitHub page: fetches and displays profile metadata from GitHub API.

import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setdata] = useState({})
    useEffect (() => {
        fetch('https://api.github.com/users/DipanT18')
        .then(res => res.json())
        .then(data => {
            setdata(data)
        })
    }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data?.followers || 0}
    <img className = 'text-center rounded-full 'src = {data.avatar_url} alt = "Git Picture" width={300}/>
    
    </div>
  )
}

export default Github  