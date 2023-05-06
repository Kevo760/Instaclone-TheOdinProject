import React, { useState } from 'react'
import styled from 'styled-components'
import { LogoText } from '../Styled Components/TextStyles'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase'

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`

const SignInForm = styled.form`
    margin-top: 80px;
    width: 350px;
    height: 350px;
    padding: 16px;
    border: 1px solid rgba(229, 229, 229);
    
`
const SmallSignBox = styled(SignInForm)`
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
    outline: none;
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

const ErrorBox = styled.b`
  display: block;
  margin-top: 20px;
  color: tomato;
`

function Login() {
  const [showErr, setShowErr] = useState(false)
  const navigate = useNavigate()

  const errMessage = <ErrorBox>Something went wrong, try again.</ErrorBox>


  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value
    const password = e.target[1].value

    try {
      await signInWithEmailAndPassword(auth, email, password)
        navigate('/')
    } catch (err) {
      setShowErr(true)
    }
  }

  return (
    <LoginBox>
        <SignInForm onSubmit={handleLogin}>
          <LogoText>Instaclone</LogoText>
          <SignInput
            placeholder='Email'
            type='email'
            required
          />
          <SignInput
            placeholder='Password'
            type='password'
            required
          />

          <SignButton type='submit'>Log In</SignButton>

          {
            showErr ?
            errMessage
            :
            null
          }
        </SignInForm>

        <SmallSignBox>
          <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
        </SmallSignBox>

    </LoginBox>
  )
}

export default Login