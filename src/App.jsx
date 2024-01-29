import React from 'react'
import './App.scss'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Login from './components/Login'

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App