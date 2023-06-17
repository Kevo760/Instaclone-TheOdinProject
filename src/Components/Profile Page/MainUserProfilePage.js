import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { CircleProfileLarge } from '../../Styled Components/CircleProfileImg'
import BottomNav from '../BottomNav'
import { signOut } from 'firebase/auth'
import MainProfileTopBar from './MainProfileTopBar'
import EditProfilePage from './EditProfilePage'
import { useAuth } from '../../Context/AuthContext'
import ImagePostMainUserModal from '../Image Post Modal/ImagePostMainUserModal'
import { useMainUserData } from '../../Context/MainUserDataContext'
import { auth, db } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { doc, onSnapshot } from "firebase/firestore"

const ProfileBox = styled.div`
    margin: 70px auto 40px auto;
    display: flex;
    flex-direction: column;
    width: 670px;
    padding: 16px;
    overflow: visible;
    height: fit-content;
    font-size: 15px;
    gap: 10px;

    @media(max-width: 800px) {
    width: 480px;
  }
`
const ProfileTopSection = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    align-items: center;
    justify-items: center;
     height: 100px;
`

const ProfileUserInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    gap: 10px;
`

const ProfileColumnTextBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const ProfileFollowButton = styled.button`
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

const ProfileImagesSection = styled.div`
    width: 100%;
    padding-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid rgba(229, 229, 229);
    grid-gap: 2px;
`
const ProfilePostImage = styled.img`
    height: 100%;
    width: 100%; 
    object-fit: contain;
    cursor: pointer;
    background-color: rgba(0, 0, 0, .7);
    &:Hover {
        opacity: 0.4;
    }
`

const ProfileUnFollowButton = styled(ProfileFollowButton)`
    background-color: rgb(108, 117, 125);
    &:Hover {
        background-color: rgb(33, 37, 41);
    }
`

const ProfileLogOutBtn = styled(ProfileFollowButton)`
    background-color: tomato;
    &:Hover {
        background-color: red;
    }
`

function MainUserProfilePage() {
  const [openEditPage, setOpenEditPage] = useState(false)
  const [showCurrentPost, setShowCurrentPost] = useState()
  const {handleMainUserData, handleMainUserPostData, mainUserData, mainUserPostData} = useMainUserData()

  const navigate = useNavigate()
  const authUser = useAuth()
  const user = authUser.currentUser

  // shows main users post as a photo gallery with an onclick function to open the photo post
  const showPostGallery = mainUserPostData ? mainUserPostData.map(dataObject => 
    <ProfilePostImage 
      src={dataObject[1].imgURL} 
      key={dataObject[1].postID} 
      alt='user post image' 
      onClick={e => handleOpenCurrentPost(dataObject[1])}
    />) : null
 
  const handleOpen = () => setOpenEditPage(true)
  const handleClose = () => setOpenEditPage(false)

  // sets showCurrentPost to null
  const handleCloseCurrentPost = () => {
    setShowCurrentPost(null)
  }
  // sets showCurrentPost to an Image Post Modal component and pass the data to it
  const handleOpenCurrentPost = (userPostData) => {
    setShowCurrentPost(<ImagePostMainUserModal backFunction={handleCloseCurrentPost} mainUserPost={userPostData}/>)
  }
  // handles sign out and sets userPostData and userData to null
  const signOutHandler = () => {
    signOut(auth).then(() => {
      handleMainUserPostData(null)
      handleMainUserData(null)
      navigate('/')
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    // Grabs userPost and user data from firebase
    const getMainUserData = () => {
      const unsub = onSnapshot(doc(db, 'userPost', authUser.currentUser.uid), (doc) => {
        // converts object data into array
        const postValue = doc.data()
        const postValueArray = Object.entries(postValue)
        // sorts the array by newest first
        const sortPostByTime = postValueArray.sort(function(x,y) {
        return y[1].timestamp - x[1].timestamp })
        handleMainUserPostData(sortPostByTime)
      })

      const unsub2 = onSnapshot(doc(db, 'users', authUser.currentUser.uid), (doc) => {
        const userValue = doc.data()
        handleMainUserData(userValue)
      })

      return () => {
        unsub()
        unsub2()
      }
    }
    
   if(authUser.currentUser && !mainUserPostData) {
    getMainUserData()
    console.log('mainUserData')
   } else return

  }, [authUser.currentUser, handleMainUserData, handleMainUserPostData, mainUserData, mainUserPostData])
 

    return (
      <>
        {
          openEditPage ?
          <EditProfilePage handleClose={handleClose} backFunction={handleClose}/>
          :
          null
        }

        {
          mainUserPostData && mainUserData ?
          <ProfileBox>
            <MainProfileTopBar user={user.displayName} />
            <BottomNav />
            
            <ProfileTopSection >
              <CircleProfileLarge src={user.photoURL} alt='Profile Picture'/>
    
              <ProfileColumnTextBox>
                {/* shows how many post based on mainUserPostData */}
                <h3>
                  {mainUserPostData.length}
                </h3>
                <p>Post</p>
              </ProfileColumnTextBox>
    
              <ProfileColumnTextBox>
                {/* Displays total followers */}
                <h3>
                  {mainUserData.followers.length}
                </h3>
                <p>Followers</p>
              </ProfileColumnTextBox>
    
              <ProfileColumnTextBox>
                {/* Displays total following */}
                <h3>
                  {mainUserData.following.length}
                </h3>
                <p>Following</p>
              </ProfileColumnTextBox>
            </ProfileTopSection >
    
            <ProfileUserInfoSection>
              {/* Display Name */}
              <b>{user.displayName}</b>
              {/* About Me */}
              <p>
                {mainUserData.aboutMe}
              </p>
            </ProfileUserInfoSection>
              <ProfileUnFollowButton onClick={handleOpen}>Edit Profile</ProfileUnFollowButton>
              <ProfileLogOutBtn onClick={signOutHandler}>Log Out</ProfileLogOutBtn>
            <ProfileImagesSection>
              {/* If showPostGallery exist showPostGallery */}
              {
                showPostGallery ?
                showPostGallery
                :
                null
              }
            </ProfileImagesSection>
          </ProfileBox>
          :
          null
        }

        {
          showCurrentPost ?
          showCurrentPost
          :
          null
        }
        
      </>
        
    )
}

export default MainUserProfilePage