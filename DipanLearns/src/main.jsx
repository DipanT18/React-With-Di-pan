import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dipan from './dipan.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dipan />
  </StrictMode>,
)
