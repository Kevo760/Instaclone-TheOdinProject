import React from 'react'
import styled from "styled-components"
import { LogoText } from '../Styled Components/TextStyles'



const SignUpSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`


const SignUpBox = styled.form`
    width: 350px;
    height: 400px;
    padding: 16px;
    border: 1px solid rgba(229, 229, 229);
    height: 450px;
`

const SmallSignBox = styled.div`
    width: 350px;
    height: 100px;
    padding: 16px;
    border: 1px solid rgba(229, 229, 229);
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    a {
      outline: none;
      text-decoration: none;
      font-weight: bold;
      color: black;
      cursor: pointer;
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

function Signup() {
  return (
    <SignUpSection>
        <SignUpBox>
            <LogoText>Instaclone</LogoText>

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

        <SmallSignBox>Have an account? <a>Log in</a></SmallSignBox>
    </SignUpSection>
  )
}

export default Signup