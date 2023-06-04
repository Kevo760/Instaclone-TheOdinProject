import React, { useState } from 'react'
import styled from "styled-components"
import { CircleProfileLarge } from '../../Styled Components/CircleProfileImg'
import BottomNav from '../BottomNav'
import { signOut } from 'firebase/auth'
import MainProfileTopBar from './MainProfileTopBar'
import EditProfilePage from './EditProfilePage'
import { useAuth } from '../../Context/AuthContext'
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from '../../firebase'
import ImagePostMainUserModal from '../Image Post Modal/ImagePostMainUserModal'

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
  const [showCurrentPost, setShowCurrentPost] = useState(null)

  const [userData, setUserData] = useState()
  const [userPostData, setUserPostData] = useState()

  const auth = useAuth()
  const user = auth.currentUser


  const handleOpen = () => setOpenEditPage(true)
  const handleClose = () => setOpenEditPage(false)

  const getData = async() => {
    const postDataRef = doc(db,'userPost', 'Dv6cBEmfDiPdnsMso85Q8TU2ISQ2')
    const userDataRef = doc(db, 'users','Dv6cBEmfDiPdnsMso85Q8TU2ISQ2')

    const postSnap = await getDoc(postDataRef)
    const userSnap = await getDoc(userDataRef)

    if(postSnap.exists()) {
      const postValue = postSnap.data()
      // converts object data into array
      const postValueArray = Object.entries(postValue)
      // sorts the array by timestamp
      const sortPostByTime = postValueArray.sort(function(x,y) {
        return y[1].timestamp - x[1].timestamp
      })
      setUserPostData(sortPostByTime)
    } else {
      console.log('data does not exist')
    }

    if(userSnap.exists()) {
      const userValue = userSnap.data()
      setUserData(userValue)
    } else {
      console.log('data does not exist')
    }
  }

  const handleCloseCurrentPost = () => {
    setShowCurrentPost(null)
  }

  const handleOpenCurrentPost = (mainUserData) => {
    setShowCurrentPost(<ImagePostMainUserModal backFunction={handleCloseCurrentPost} mainUserData={mainUserData}/>)
  }

  const showPostGallery = userPostData ? userPostData.map(dataObject => 
    <ProfilePostImage 
    src={dataObject[1].imgURL} 
    key={dataObject[1].postID} 
    alt='user post image' 
    onClick={e => handleOpenCurrentPost(dataObject[1])}
    />) : null

    const handleLike = async() => {
      const postID = '3807a05a-2484-4745-bcc8-5a2bc9c585ef'
      try {
        const mainRef = doc(db, 'mainPagePost', 'post')
        const postRef = doc(db, 'userPost', user.uid)

        await updateDoc(postRef, {
          [postID + '.likes']: arrayUnion(user.uid)
        })

        await updateDoc(mainRef, {
          [postID + '.likes']: arrayUnion(user.uid)
        })
      } catch(error) {
        console.log(error)
      }
    }
 

    return (
      <>
        {
          openEditPage ?
          <EditProfilePage handleClose={handleClose} backFunction={handleClose}/>
          :
          <ProfileBox>
            <MainProfileTopBar user={user.displayName} />
            <BottomNav />
            
            <ProfileTopSection >
              <CircleProfileLarge src={user.photoURL} alt='Profile Picture'/>
    
              <ProfileColumnTextBox>
                <h3>1,000</h3>
                <p>Post</p>
              </ProfileColumnTextBox>
    
              <ProfileColumnTextBox>
                <h3>2,000</h3>
                <p>Followers</p>
              </ProfileColumnTextBox>
    
              <ProfileColumnTextBox>
                <h3>3,000</h3>
                <p>Following</p>
              </ProfileColumnTextBox>
            </ProfileTopSection >
    
            <ProfileUserInfoSection>
              <b>{user.displayName}</b>
    
              <p>
                
              </p>
            </ProfileUserInfoSection>
              <ProfileUnFollowButton onClick={handleOpen}>Edit Profile</ProfileUnFollowButton>
              <ProfileLogOutBtn onClick={() => signOut(auth)}>Log Out</ProfileLogOutBtn>
              <button onClick={getData}>Get Data</button>
              <button onClick={handleLike}>Handle Like</button>
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