import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js'
import { ThemeContextProvider } from './components/context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ThemeContextProvider>
    <App />
    </ThemeContextProvider>
    </BrowserRouter>
)
