import React from 'react'

import Login from './Pages/LoginPage/LoginPage'
import Header from './Pages/Header/Header'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Projects from './Pages/Projects/Projects'


const App = () => {
  return (
    <div>
       <Header /> {/* Fixed Header */}
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App