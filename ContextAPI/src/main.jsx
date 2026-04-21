// File logic note: This file is documented for revision-friendly learning.
// React entrypoint: mounts the ContextAPI app into the root DOM node.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
