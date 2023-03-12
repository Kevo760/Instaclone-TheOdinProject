import React from 'react'
import { CircleProfileLarge } from '../../Styled Components/CircleProfileImg'
import { EditProfileBioInput, EditProfileBox, EditProfileButton, ProfileUnFollowButton } from '../../Styled Components/Profile'
import EditProfileTopBar from './EditProfileTopBar'
import ProfilePic from '../../images/profile.jpg'


function EditProfilePage() {
  return (
    <EditProfileBox>
        <EditProfileTopBar />
        <CircleProfileLarge src={ProfilePic} alt='Profile Image' />
        <ProfileUnFollowButton>Edit Photo</ProfileUnFollowButton>
        <div className='Edit-profile-bio'>
            <b>Bio</b>
            <EditProfileBioInput 
                type='text'
                placeholder='Add something about yourself'
            />
        </div>

        <EditProfileButton>Submit Changes</EditProfileButton>
        
    </EditProfileBox>
  )
}

export default EditProfilePage