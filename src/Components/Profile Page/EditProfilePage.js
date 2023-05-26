import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { CircleProfileLarge } from '../../Styled Components/CircleProfileImg'
import EditProfileTopBar from './EditProfileTopBar'
import { useAuth } from '../../Context/AuthContext'
import LoadingBox from '../LoadingBox'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import {BiImageAdd} from 'react-icons/bi'


const EditProfileModal = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: white;
    top: 0;
    left: 0;
`
const EditProfileBioInput = styled.textarea`
    width: 100%;
    height: 80px;
    padding: 10px;
    resize: none;
    border: 2px solid #ccc;
    border-radius: 4px;
    outline: none;
`

const EditProfileBox = styled.form`
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    width: 670px;
    padding: 16px;
    overflow: visible;
    height: fit-content;
    font-size: 15px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
    .add-profile-pic {
        margin: 20px auto;
        font-weight: bold;

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
    .submit-box {
      width: 100%;
      margin: 10px auto;
    }


    @media(max-width: 800px) {
    width: 480px;
  }
`

const SubmitButton = styled.button`
    margin: auto;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    background-color: rgba(0, 168, 232);
    &:Hover {
        background-color: rgba(1, 80, 110);
    }
`

const BioSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`


function EditProfilePage({backFunction}) {
  const [isLoading, setIsLoading] = useState(false)
  const [profileImg, setProfileImg] = useState()
  const [showError, setShowError] = useState(false)
  const auth = useAuth()
  const mainUser = auth.currentUser
  const userUID = auth.currentUser.uid

  // if user adds image to edit profile picture display the file if not use main users photo
  const currentProfileImg = profileImg ? profileImg : mainUser.photoURL

  const handleSubmit = async(e) => {
    e.preventDefault()
    setIsLoading(true)

    const aboutMeText = e.target[1].value

    const userRef = doc(db, 'users', userUID)

    try {
      await updateDoc(userRef, {
        aboutMe: aboutMeText
      })
    }catch(error) {
      setIsLoading(false)
      setShowError(true)
    }
  }

  // Shows selected profile image on sign up page
  const onImageChange = (e) => {
    if(e.target.files && e.target.files[0]) {
        setProfileImg(URL.createObjectURL(e.target.files[0]))
    }
  }


  // Hides scroll bar behind modal
  useEffect(() => {
    function hideOverflow() {
      document.body.style.overflow = 'hidden';
    }
    
    hideOverflow();
    return function showAutoOverflow() {
      document.body.style.overflow = 'auto'
    };
  }, [])

  return (
    <>
      {
        isLoading ?
        <LoadingBox />
        :
        null
      }
      <EditProfileModal onSubmit={handleSubmit}>
        <EditProfileBox>
          <EditProfileTopBar backFunction={backFunction} />

          <CircleProfileLarge src={currentProfileImg} alt='Profile Image' />

          <div className='add-profile-pic'>
                <input 
                    style={{display: 'none'}}
                    type='file'
                    id='file'
                    accept="image/*"
                    onChange={onImageChange}
                />
                <label htmlFor='file'>
                    <BiImageAdd className='add-img-icon'/>
                    <span>Edit profile picture</span>
                </label>
            </div>

          <BioSection>
              <b>Bio</b>
              <EditProfileBioInput 
                  type='text'
                  placeholder='Add something about yourself'
                  required
              />
          </BioSection>

          <div className='submit-box'>
            <SubmitButton type='submit'>Submit Changes</SubmitButton>
          </div>

          {
            showError ?
            <span className='error-text'>Something went wrong, try again.</span>
            :
            null
          }
        </EditProfileBox>
      </EditProfileModal>
    </>
  )
}

export default EditProfilePage