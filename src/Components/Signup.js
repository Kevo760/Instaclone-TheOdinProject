import React, { useState } from 'react'
import styled from "styled-components"
import { LogoText } from '../Styled Components/TextStyles'
import {BiImageAdd} from 'react-icons/bi'
import { CircleProfileLarge } from '../Styled Components/CircleProfileImg'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, storage, db } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"
import LoadingBox from './LoadingBox'
import { Link, useNavigate } from 'react-router-dom'




const SignUpSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  padding: 80px 10px 10px 10px;

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
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const showProfileImg = <div><CircleProfileLarge src={profileImage} alt='profile image'/></div>

  const handleCreateAccount = async(e) => {
    e.preventDefault()
    setIsLoading(true)
    
    const email = e.target[0].value
    const fullName = e.target[1].value
    const displayName = e.target[2].value
    const password = e.target[3].value
    const file = e.target[4].files[0]

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const userID = res.user.uid
        const user = res.user
        
        const storageRef = ref(storage, displayName)
        const uploadTask = uploadBytesResumable(storageRef, file)

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', 
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
            default:
                    console.log(`Upload`);
            }
        }, 
        (error) => {
            // Handle unsuccessful uploads
            setShowError(true)
            setIsLoading(false)
        }, 
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                await updateProfile(user, {
                displayName,
                photoURL: downloadURL,

                });
                // Create a user on firebase storage
                await setDoc(doc(db,'users', userID), {
                    uid: userID,
                    displayName,
                    email,
                    fullName,
                    photoURL: downloadURL,
                    followers: [],
                    following: [],
                    aboutMe: '',
                });
                // After finishing navigate to home
                navigate('/')
            });
        }
        );
    }catch(err) {
        setShowError(true)
        setIsLoading(false)
    }
  }
  // Shows selected profile image on sign up page
  const onImageChange = (e) => {
    if(e.target.files && e.target.files[0]) {
        setProfileImage(URL.createObjectURL(e.target.files[0]))
    }
  }

  return (
    <>
    {
        isLoading ?
        <LoadingBox />
        :
        null
    }
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
                // No spaces allowed
                pattern='^\w[a-zA-Z@#0-9.]*$'
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

        <SmallSignBox>Have an account? <Link to='/login'>Log In</Link></SmallSignBox>
    </SignUpSection>
    </>
  )
}

export default Signup