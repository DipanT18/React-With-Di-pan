// File logic note: This file is documented for revision-friendly learning.
// Password generator: composes hooks for generation rules, visibility, and clipboard copy.

import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
import { use } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [num, setnum] = useState(false)
  const [character, setcharacter] = useState(false)
  const [IDk, setpass] = useState("")
  
  //This is for taking reference
  const passRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select()
    // passRef.current?.setSelectionRange(0, 99)  This is for selection in Range
    window.navigator.clipboard.writeText(IDk)
  }, [IDk])
  //This is for visibility
  const [show, setShow] = useState(false)


  const password_generator = useCallback( () => {
    let pass= ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) string += "0123456789"
    if (character) string += "!@#$%^&*()_-~"

    for (let i =1; i <= length; i++ ){
      let char = Math.floor(Math.random() * string.length);
      pass += string.charAt(char)
    }

    setpass(pass) 
  }, [length, num, character, IDk])
    useEffect ( () => {
    password_generator()
    } , [length, num, character] )
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 px-4 bg-olive-900 py-4'>
        <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white text-center mx-2 my-3'>
        <input type={show ? "text" : "password"} value={IDk} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passRef}/>
        <button className='outline-none bg-blue-500 text-white px-3 py-0.5' onClick={copyPasswordToClipboard}>Copy</button>
      </div>

      <button className='flex items-center gap-x-1 text-white' onClick={() => {setShow((prev) =>  !prev)}}>
        {show ? "🙈" : "👁️"}
      </button>
      
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'> 
          <input type='range' min={8} max={100} value={length} className='cursor-pointer' 
          onChange={(i) => {setlength(i.target.value)}}
          />
          <label className='text-white sans-serif'>Length : {length}</label>
        </div>
      </div>
      
      <div className='flex items-center gap-x-1'>
      <input
          type="checkbox"
          checked={num}
          id="numberInput"
          onChange={() => {
              setnum((prev) => !prev); //This actually converts true to false and false to true
          }}
      />
      <label className = 'text-white'htmlFor="numberInput">Numbers</label>  
      </div>

      <div className='flex items-center gap-x-1'>
      <input
          type="checkbox"
          checked={character}
          id="characterInput"
          onChange={() => {
              setcharacter((prev) => !prev); //This actually converts true to false and false to true
          }} 
      />
      <label className = 'text-white'htmlFor="characterInput">Characters</label>  
      </div>
          <button className='outline-none bg-blue-500 text-white px-3 py-0.5 rounded-full' onClick={password_generator}>Make Another</button>
      </div>
    </> 
  )
}

export default App
