import React, { useEffect,useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import {auth, onAuthStateChanged} from '../firebaseConfig/firebase.js'
import HomePage from '../pages/HomePage.jsx'
import PageNotFound from '../pages/PageNotFound.jsx'
import MyLayout from '../components/Layout.jsx'

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

                <Route path='/' element={isUser ? <MyLayout> <HomePage/> </MyLayout> : <LoginPage/>}></Route>
                <Route path='/register' element={isUser ? <MyLayout> <HomePage/> </MyLayout> : <RegisterPage/>}></Route>
                <Route path='/home' element={isUser ? <MyLayout> <HomePage/> </MyLayout> : <LoginPage/>}></Route>
                <Route path='*' element={<MyLayout> <PageNotFound/> </MyLayout>}></Route>


            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRoutes