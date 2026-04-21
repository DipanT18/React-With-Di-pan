// File logic note: This file is documented for revision-friendly learning.
// Counter demo: shows functional updates and guarded decrement logic.

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function dipan() {
  let [counter, DipanCounter] = useState(5)

  // let counter = 5

  const addValue = () => { 
    DipanCounter((prevcounter) => prevcounter + 1) 
    DipanCounter((prevcounter) => prevcounter + 1) 
    DipanCounter((prevcounter) => prevcounter + 1) 
    DipanCounter((prevcounter) => prevcounter + 1) 
    DipanCounter((prevcounter) => prevcounter + 1) 
    // counter = counter + 1
    console.log("Value Added", counter);
  }

  const removeValue = () => {
    if(counter > 0){
    DipanCounter(counter - 1)
    console.log("Value Removed", counter);
    }
  }
  return (
    <>
      <h1>Dipan With React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick = {addValue}> Add Value </button>
      <br />
      <button onClick = {removeValue}>Remove Value</button>
    </>
  )
}

export default dipan
