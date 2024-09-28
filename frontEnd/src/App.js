import React from 'react'
import './App.css'
import Hello from './components/Hello'
import Menu from './components/Menu'
import Button from './components/Button'
import CheckLogin from './components/CheckLogin'
import Car from './components/Car'
import Login from './components/Login'

function App() {
  const [isLogin, setIsLogin] =
    React.useState(false)

  const userName = 'Nguyễn Lê Tấn Đạt'

  return (
    <div className='App'>
      <Hello />
      <Menu userName={userName} />  
      <Button />
      <CheckLogin isLogin={isLogin} />
      <Car />
      <Login />
    </div>
  )
}

export default App
