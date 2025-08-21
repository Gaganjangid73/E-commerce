import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/Auth/layout'
import AuthLogin from './Pages/Auth/Login'
import AuthSignup from './Pages/Auth/SignUp'

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path='/auth' element={<AuthLayout/>}> 
          <Route path='login' element={<AuthLogin/>} />
          <Route path='signup' element={<AuthSignup/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

