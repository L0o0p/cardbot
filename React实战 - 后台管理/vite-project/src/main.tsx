// 路由写法1️⃣
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import 'reset-css'
// import './assets/style/global.scss'
// import Router from './router/index.js' // 确保导入语句正确

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Router />
//   </React.StrictMode>,
// )

// 路由写法2️⃣
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css'
import './assets/style/global.scss'
import App from './App.tsx' // 确保导入语句正确
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
)