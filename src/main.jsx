import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './Components/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HomePage/>
  </StrictMode>,
)
