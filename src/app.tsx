import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './app/routes'
import './style/a.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
