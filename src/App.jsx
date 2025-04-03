import React from 'react'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
// import Home from './Components/Home/Home'

const App = () => {
  const isLogin = true

  return (
    <div>
        { isLogin ? <Login/> : <Signup/> }
    </div>
  )
}

export default App
