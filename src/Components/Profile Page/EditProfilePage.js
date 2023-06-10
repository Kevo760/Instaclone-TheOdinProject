import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { CircleProfileLarge } from '../../Styled Components/CircleProfileImg'
import EditProfileTopBar from './EditProfileTopBar'
import { useAuth } from '../../Context/AuthContext'
import LoadingBox from '../LoadingBox'
import { doc, updateDoc } from 'firebase/firestore'
import { db, storage } from '../../firebase'
import {BiImageAdd} from 'react-icons/bi'
import { ref,uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { updateProfile } from "firebase/auth"


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
  const [profileImg, setProfileImg] = useState(null)
  const [showError, setShowError] = useState(false)
  const auth = useAuth()
  const user = auth.currentUser
  const userUID = auth.currentUser.uid
  const displayName = auth.currentUser.displayName

  // if user adds image to edit profile picture display the file if not use main users photo
  const currentProfileImg = profileImg ? profileImg : user.photoURL

  const handleSubmit = async(e) => {
    e.preventDefault()
    setIsLoading(true)
    // handles about me text value
    const aboutMeText = e.target[1].value
    const file = e.target[0].files[0]

    const userRef = doc(db, 'users', userUID)
    const storageRef = ref(storage, displayName)

    try {
      // if there is an about me text udate about me from main profile
      if(aboutMeText) {
        await updateDoc(userRef, {
          aboutMe: aboutMeText
        })
      }
      
      // If there is file on profileImg variable upload new profile image and change profile image on firebase photoURL and on user object
      if(profileImg) {
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
                  photoURL: downloadURL,
                })

                await updateDoc(userRef, {
                  photoURL: downloadURL,
                })
            });
        }
        );
      }
      setIsLoading(false)
      backFunction()
      // if there is an error set error true and set loading to false
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
                    <span>Change profile picture</span>
                </label>
            </div>

          <BioSection>
              <b>Bio</b>
              <EditProfileBioInput 
                  type='text'
                  placeholder='Add something about yourself'
                  id='aboutme'
                  name='aboutme'
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