// File logic note: This file is documented for revision-friendly learning.
// Redux demo root: composes add form and todo list components.

import './App.css'
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'

function App() {
  return (
    <>
     <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
