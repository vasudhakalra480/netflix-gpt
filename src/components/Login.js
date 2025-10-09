import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  
  return (
    <div>
      <Header />
      <div className='absolute'>
          <img
              src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg"
              alt="background"
          />
      </div>
      <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && (
          <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />
        )}
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm 
          ? 'New to Netflix? Sign Up Now' 
          : 'Already have an account? Sign In'
        }</p>
      </form>
    </div>
  )
}

export default Login