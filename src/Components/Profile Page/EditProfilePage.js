import React, { useEffect } from 'react'
import { CircleProfileLarge } from '../../Styled Components/CircleProfileImg'
import { EditProfileBioInput, EditProfileBox, EditProfileButton, EditProfileModal, ProfileUnFollowButton } from '../../Styled Components/Profile'
import EditProfileTopBar from './EditProfileTopBar'
import ProfilePic from '../../images/profile.jpg'


function EditProfilePage() {


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
    <EditProfileModal>
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
    </EditProfileModal>
  )
}

export default EditProfilePage