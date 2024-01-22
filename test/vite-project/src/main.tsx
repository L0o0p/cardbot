import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'reset-css'
import Router from './Router/index.tsx'
import { BrowserRouter } from 'react-router-dom'
import Home from './views/Home.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </React.StrictMode>,
  <Home />
)
