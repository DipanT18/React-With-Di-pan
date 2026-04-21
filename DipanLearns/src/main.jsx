// File logic note: This file is documented for revision-friendly learning.
// React entrypoint: mounts the beginner greeting component.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dipan from './dipan.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dipan />
  </StrictMode>,
)
