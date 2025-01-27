import React from 'react'
import LoginForm from '../components/LoginForm'
import './styles.css'
import { auth, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,provider } from '../firebaseConfig/firebase.js'
import { useNavigate } from 'react-router-dom'
import GoogleBtn from '../components/GoogleBtn.jsx'


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


  const googleLogin = (googleData) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        
        alert("User logged in with google.");
        nav('/home');

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        
        alert("Error in google authentication.")
      });
  }


  return (
    <>
      <div className="container text-center">

        <h1 className='my-4 pt-5 pb-4 login'>Login<span className='sub-head'> to your Account </span></h1>

        <GoogleBtn googleLogin={googleLogin}/>

        <p id="or" class="mx-auto"> <span> OR </span></p>
        <LoginForm login={login} />

      </div>
    </>
  )
}

export default LoginPage