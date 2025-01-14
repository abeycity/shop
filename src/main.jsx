import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import  fonts 
import "./components/fonts/Fontspring-DEMO-integralcf-boldoblique.otf"
import "./components/fonts/Fontspring-DEMO-integralcf-mediumoblique.otf"
import "./components/fonts/Fontspring-DEMO-integralcf-regularoblique.otf"
import "./components/fonts/Fontspring-DEMO-integralcf-heavyoblique.otf"
import "./components/fonts/Fontspring-DEMO-integralcf-demiboldoblique.otf"
import Routelayout from './layout/layout.jsx'
import ErrorBoundary from './components/errorboundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ErrorBoundary>
     <Routelayout>
        <App />
      </Routelayout>
    </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
)
