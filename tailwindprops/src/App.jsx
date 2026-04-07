import './App.css'
import Card from './components/card.jsx'

function App() {
  return (  
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind With Dipan</h1>
      <Card name = "Mukesh Ambani" position = "CEO" message = "Suggest" />
      <Card name = "Dipan Timalsina" position = "CTO" />
    </>
  )
}

export default App
