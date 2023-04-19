import React from 'react'
import styled from 'styled-components'
import { LogoText } from '../Styled Components/TextStyles'

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`

const Signform = styled.form`
    width: 350px;
    height: 400px;
    padding: 16px;
    border: 1px solid rgba(229, 229, 229);
    
`

const SignInBox = styled(Signform)`
    height: 350px;
`

const SmallSignBox = styled(Signform)`
    margin-top: 20px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      outline: none;
      text-decoration: none;
      font-weight: bold;
      color: black;
    }
`

const SignInput = styled.input`
    padding: 10px;
    width: 80%;
    margin-top: 10px;
    border: 1px solid rgba(229, 229, 229);
    border-radius: 4px;
    background-color: rgba(248, 249, 250);
`

const SignButton = styled.button`
    margin-top: 20px;
    width: 80%;
    padding: 10px;
    color: white;
    font-weight: bold;
    background-color: rgba(0, 168, 232);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: rgba(1, 80, 110);
    }
    &:active{
        background-color: rgba(0, 168, 232);
    }
`

function Login() {
  return (
    <LoginBox>
        <SignInBox>
          <LogoText>Instaclone</LogoText>
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
          <p>Don't have an account? <a href='www.google.com'>Sign up</a></p>
        </SmallSignBox>

    </LoginBox>
  )
}

export default Login