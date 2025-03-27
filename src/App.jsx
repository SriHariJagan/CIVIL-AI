import React from 'react'

import Login from './Pages/LoginPage/LoginPage'
import Header from './Pages/Header/Header'
import Overview from './Pages/Overview/Overview'
import { Route, Routes } from 'react-router-dom'
import Projects from './Pages/Projects/Projects'
import Task from './Pages/Task/Task'
import User from './Pages/User/User'


const App = () => {
  return (
    <div>
       <Header /> {/* Fixed Header */}
      <div >
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/users" element={<User />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App