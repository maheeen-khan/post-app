import React from 'react'
import LoginForm from '../components/LoginForm'
import './styles.css'
import { auth, getAuth, signInWithEmailAndPassword } from '../firebaseConfig/firebase.js'
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {

  const nav = useNavigate();

  const login = (loginData) => {
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        alert("Youh! Logged in!", user);
        nav('/home')

      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);

      });
  }
  return (
    <>
      <div className="container text-center">

        <h1 className='my-5 pt-5 pb-4 login'>Login<span className='sub-head'> to your Account </span></h1>

        <LoginForm login={login} />

      </div>
    </>
  )
}

export default LoginPage