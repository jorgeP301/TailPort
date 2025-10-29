import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Header from './components/Header.jsx'
import Projects from './pages/Projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header />
      <About />
      <Projects />
  </StrictMode>,
)
