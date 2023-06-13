import React from 'react'
import { NavLink } from 'react-router-dom';
import './Css/error.css';
import './Css/button.css';

const ErrorPage = () => {
    return (
        <div>
            <div className='error-container'>
                <div>
                    <h2 className='h2'>404</h2>
                    <h3 className='h3'>UH OH! You're lost.</h3>
                    <p className='para'>The page you are looking for does not exist. How you got here is a mystery.
                        But you can click the button below to go back to the homapage.</p>
                    <NavLink to='/'>  <button>Go Back To Home </button></NavLink>
                </div>
            </div>


        </div>
    )
}

export default ErrorPage