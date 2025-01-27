import React from 'react'
import google from '../assets/google.png'
import '../pages/styles.css'

const GoogleBtn = ({googleLogin}) => {
    return (
        <>
            <div className="all-networks d-flex justify-content-center align-items-center mb-4">

                <button className='btn' onClick={googleLogin}>

                    <img src={google} alt="Google" className="google" id="google"/>

                </button>

                

            </div>
        </>
    )
}

export default GoogleBtn