import React from 'react'
import { Route, Routes, Redirect } from 'react-router-dom'

// page components
import Home from '../pages/home'

import './App.scss'

function App (props) {

  return (
    <div className="app-container">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App