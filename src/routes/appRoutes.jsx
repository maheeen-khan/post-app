import React, { useEffect,useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import {auth, onAuthStateChanged} from '../firebaseConfig/firebase.js'
const AppRoutes = () => {

  const [isUser,setUser]= useState(false)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const uid = user.uid;
        console.log("user logged in",user);
        
        setUser(true)
      } else {
        console.log("user not exist");
        setUser(false)
      }
    });
  })

  
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