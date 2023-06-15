import React, {useEffect, useState}from 'react'
import styled from "styled-components"
import { CircleProfileLarge } from '../../Styled Components/CircleProfileImg'
import ProfileTopBar from './ProfileTopBar'
import BottomNav from '../BottomNav'
import { useAuth } from '../../Context/AuthContext'
import { useUserProfile } from '../../Context/UserProfileContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'
import ImagePostModal from '../Image Post Modal/ImagePostModal'
import LoadingBox from '../LoadingBox'


const ProfileBox = styled.div`
    margin: 70px auto 40px auto;
    display: flex;
    flex-direction: column;
    width: 670px;
    padding: 16px;
    overflow: visible;
    height: fit-content;
    font-size: 15px;
    gap: 20px;

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

function UserProfile() {
  const AuthUser = useAuth()
  const {userProfileID} = useUserProfile()
  const [userPost, setUserPost] = useState()
  const [userData, setUserData] = useState()
  const [showCurrentPost, setShowCurrentPost] = useState()
  console.log(userData)
  console.log(userPost)

  const follow = false
  const showFollowing = !follow ? <ProfileFollowButton>Follow</ProfileFollowButton> : <ProfileUnFollowButton>Unfollow</ProfileUnFollowButton>

  const showPostGallery = userPost ? userPost.map(dataObject =>
    <ProfilePostImage
      src={dataObject[1].imgURL} 
      key={dataObject[1].postID} 
      alt='user post image' 
      onClick={e => handleOpenCurrentPost(dataObject[1])}
    />) : null

  // sets showCurrentPost to null
  const handleCloseCurrentPost = () => {
    setShowCurrentPost(null)
  }
  // sets showCurrentPost to an Image Post Modal component and pass the data to it
  const handleOpenCurrentPost = (userPostData) => {
    setShowCurrentPost(<ImagePostModal post={userPostData} backFunction={handleCloseCurrentPost} />)
  }

  useEffect(() => {
    console.log('rerender')
    const getUserData = () => {
      try {
        const unsub = onSnapshot(doc(db, 'userPost', userProfileID), (doc) => {
          // converts object data into array
          const postValue = doc.data()
          const postValueArray = Object.entries(postValue)
          // sorts the array by newest first
          const sortPostByTime = postValueArray.sort(function(x,y) {
          return y[1].timestamp - x[1].timestamp })
          setUserPost(sortPostByTime)
        })
  
        const unsub2 = onSnapshot(doc(db, 'users', userProfileID), (doc) => {
          const userDoc = doc.data()
          setUserData(userDoc)
        })
        return () => {
          unsub()
          unsub2()
        }
      } catch(error) {
        console.log(error)
      }
      
    }
    
    getUserData()
  }, [userProfileID])

  return (
    <>
    {
      !userPost && !userData ?
      <LoadingBox />
      :
      <ProfileBox>
        <ProfileTopBar displayName={userData.displayName}/>
        <BottomNav />

        <ProfileTopSection >
          <CircleProfileLarge src={userData.photoURL} alt='Profile Picture'/>

          <ProfileColumnTextBox>
            {/* Shows how many post the user has */}
            <h3>
              {userPost.length}
            </h3>
            <p>Post</p>
          </ProfileColumnTextBox>

          <ProfileColumnTextBox>
            {/* Shows how many followers user has */}
            <h3>{userData.followers.length}</h3>
            <p>Followers</p>
          </ProfileColumnTextBox>

          <ProfileColumnTextBox>
            {/* Shows how many user is following */}
            <h3>{userData.following.length}</h3>
            <p>Following</p>
          </ProfileColumnTextBox>
        </ProfileTopSection >

        <ProfileUserInfoSection>
          {/* Displays user name */}
          <b>{userData.displayName}</b>
          {/* Displays users about me */}
          <p>{userData.aboutMe}</p>
        </ProfileUserInfoSection>
        {/* If authUser show the follow buttons */}
        { AuthUser ?
          showFollowing
          :
          null
        }
      
        <ProfileImagesSection>
          {
            showPostGallery

          }
        </ProfileImagesSection>
        {
          showCurrentPost ?
          showCurrentPost
          :
          null
        }
      </ProfileBox>
    }
    </>
  )
}

export default UserProfile