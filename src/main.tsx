import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextProvider } from './context/index.context'
import './index.css'
import { App } from './app'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
)
