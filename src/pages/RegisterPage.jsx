import React from 'react'
import RegisterForm from '../components/RegisterForm'
import {auth,getAuth,createUserWithEmailAndPassword} from '../firebaseConfig/firebase.js'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {

    const navigate = useNavigate();

    const register = (a) =>{

        createUserWithEmailAndPassword(auth, a.email, a.password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          
          alert("user register!", user);
          navigate('/')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          
          alert("Error has been occured! ", errorMessage);
        });
      
    }
    return (
        <>
            <div className="container text-center">

                <h1 className='my-5 pt-5 pb-4 login'>Register <span className='sub-head'> your Account</span></h1>

                <RegisterForm register={register}/>

            </div>

        </>
    )
}

export default RegisterPage