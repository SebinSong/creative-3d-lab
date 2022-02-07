import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// global styles
import '@scss/main.scss'
// root component
import App from '@components/root/App.js'

const rootEl = document.querySelector('#root')
const RootComponent = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(
  <RootComponent />,
  rootEl
)