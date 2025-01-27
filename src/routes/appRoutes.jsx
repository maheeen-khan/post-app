import React, { useEffect,useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import {auth, onAuthStateChanged} from '../firebaseConfig/firebase.js'
import HomePage from '../pages/HomePage.jsx'


const AppRoutes = () => {

  //here we defined onAuthStateChanged bcoz of protected Routes to see whether user logged in or not!

  const [isUser,setUser]= useState(false);

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

                <Route path='/' element={isUser ? <HomePage/> : <LoginPage/>}></Route>
                <Route path='/register' element={isUser ? <HomePage/> : <RegisterPage/>}></Route>
                <Route path='/home' element={isUser ? <HomePage/> : <LoginPage/>}></Route>


            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRoutes