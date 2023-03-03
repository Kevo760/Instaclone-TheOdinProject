import React from 'react'
import { SignButton, SignInBox, SignInput, SignUpBox, SmallSignBox } from '../Styled Components/Signform'

function Signup() {
  return (
    <div className='signup-box'>
        <SignUpBox>
            <h1 className='logo-text'>Instaclone</h1>

            <SignInput 
                placeholder='Email'
                type='email'
            />
            <SignInput 
                placeholder='Full Name'
                type='text'
            />
            <SignInput 
                placeholder='Username'
                type='text'
            />
            <SignInput 
                placeholder='Password'
                type='password'
            />

            <SignButton>Sign up</SignButton>

        </SignUpBox>

        <SmallSignBox>Have an account? Log in</SmallSignBox>
    </div>
  )
}

export default Signup