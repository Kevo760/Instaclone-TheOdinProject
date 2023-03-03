import React from 'react'
import { SignButton, SignInBox, SignInput, SmallSignBox } from '../Styled Components/Signform'

function Login() {
  return (
    <div className='login-box'>
        <SignInBox>
          <h1 className='logo-text'>Instaclone</h1>
          <SignInput
            placeholder='Email'
            type='email'
          />
          <SignInput
            placeholder='Password'
            type='password'
          />

          <SignButton>Log In</SignButton>
        </SignInBox>

        <SmallSignBox>
          <p>Don't have an account? Sign up</p>
        </SmallSignBox>

    </div>
  )
}

export default Login