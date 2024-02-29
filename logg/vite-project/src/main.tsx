// import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css'
import Router from './Router/Router.tsx'
import { Provider } from 'react-redux'
import store from './Store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
    <Router />
  </Provider>,
)
