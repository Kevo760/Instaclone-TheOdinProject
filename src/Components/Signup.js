import React, { useState } from 'react'
import styled from "styled-components"
import { LogoText } from '../Styled Components/TextStyles'
import {BiImageAdd} from 'react-icons/bi'
import { CircleProfileLarge } from '../Styled Components/CircleProfileImg'



const SignUpSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  
`

const SignUpForm = styled.form`
    width: 350px;
    height: 400px;
    padding: 16px;
    border: 1px solid rgba(229, 229, 229);
    height: fit-content;
    .add-profile-pic {
        margin-top: 16px;
    }
    .add-profile-pic label {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
    }
    .add-img-icon {
        scale: 1.8;
    }
    .error-text {
        color: tomato;
        font-weight: bold;
    }
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
    margin: 20px;
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
  const [profileImage, setProfileImage] = useState(null)
  const [showError, setShowError] = useState(false)

  const showProfileImg = <div><CircleProfileLarge src={profileImage} alt='profile image'/></div>

  const handleCreateAccount = (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const fullName = e.target[1].value
    const userName = e.target[2].value
    const password = e.target[3].value
    const file = e.target[4].files[0]
    console.log(password)
  }

  const onImageChange = (e) => {
    if(e.target.files && e.target.files[0]) {
        setProfileImage(URL.createObjectURL(e.target.files[0]))
    }
  }

  return (
    <SignUpSection>
        <SignUpForm onSubmit={handleCreateAccount}>
            <LogoText>Instaclone</LogoText>
            {
                profileImage ?
                showProfileImg
                :
                null
            }

            <SignInput 
                placeholder='Email'
                type='email'
                required
            />
            <SignInput 
                placeholder='Full Name'
                type='text'
                required
            />
            <SignInput 
                placeholder='Username'
                type='text'
                required
            />
            <SignInput 
                placeholder='Password'
                type='password'
                required
            />
            <div className='add-profile-pic'>
                <input 
                    style={{display: 'none'}}
                    type='file'
                    id='file'
                    accept="image/*"
                    onChange={onImageChange}
                    required
                />
                <label htmlFor='file'>
                    <BiImageAdd className='add-img-icon'/>
                    <span>Add profile picture</span>
                </label>
            </div>
            
            <SignButton type='submit'>Sign up</SignButton>

            {
                showError ?
                <span className='error-text'>Something went wrong, try again.</span>
                :
                null
            }

        </SignUpForm>

        <SmallSignBox>Have an account? <a>Log in</a></SmallSignBox>
    </SignUpSection>
  )
}

export default Signup