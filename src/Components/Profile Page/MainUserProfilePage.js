import React, { useState } from 'react'
import styled from "styled-components"
import { CircleProfileLarge } from '../../Styled Components/CircleProfileImg'
import BottomNav from '../BottomNav'
import { signOut } from 'firebase/auth'
import MainProfileTopBar from './MainProfileTopBar'
import EditProfilePage from './EditProfilePage'
import { useAuth } from '../../Context/AuthContext'



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
  const [open, setOpen] = useState(false)
  const auth = useAuth()
  const user = auth.currentUser


  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

    return (
      <>
        {
          open ?
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
            Twenty-five stars were neatly placed on the piece of paper. There was room for five more stars but they would be difficult ones to earn. It had taken years to earn the first twenty-five, and they were considered the "easy" ones.
            </p>
          </ProfileUserInfoSection>
          
    
          <ProfileUnFollowButton onClick={handleOpen}>Edit Profile</ProfileUnFollowButton>
          <ProfileLogOutBtn onClick={() => signOut(auth)}>Log Out</ProfileLogOutBtn>
        
          
          <ProfileImagesSection>
            
          </ProfileImagesSection>
          
      </ProfileBox>
        }
      
      </>
        
    )
}

export default MainUserProfilePage