import React from 'react'
import LoginForm from '../components/LoginForm'
import './styles.css'
const LoginPage = () => {
  return (
    <>
    <div className="container text-center">
    <h1 className='my-5 pt-5 login'>Login</h1>
    <LoginForm/>
  
    </div>
    </>
  )
}

export default LoginPage