import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App(props) {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
