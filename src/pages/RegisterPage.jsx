import React from 'react'
import RegisterForm from '../components/RegisterForm'

const RegisterPage = () => {
    return (
        <>
            <div className="container text-center">
                <h1 className='my-5 pt-5 pb-4 login'>Register <span className='sub-head'> your Account</span></h1>
                <RegisterForm />

            </div>

        </>
    )
}

export default RegisterPage