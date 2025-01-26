import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

const AppRoutes = () => {
  return (
    <>
        <BrowserRouter>
        
            <Routes>

                <Route path='/' element={<LoginPage/>}></Route>
                <Route path='/register' element={<RegisterPage/>}></Route>
                


            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRoutes