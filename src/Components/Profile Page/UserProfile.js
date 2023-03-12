import React, { useState } from 'react'
import { CircleProfileLarge } from '../../Styled Components/CircleProfileImg'
import { ProfileBox, ProfileTopSection, ProfileUserInfoSection, ProfileColumnTextBox, ProfileFollowButton, ProfileImagesSection, ProfilePostImage, ProfileUnFollowButton, EditProfileButton } from '../../Styled Components/Profile'
import ProfileTopBar from './ProfileTopBar'
import ProfilePic from '../../images/profile.jpg'
import supra from '../../images/supra.jpg'
import sti from '../../images/sti.jpg'
import EditProfilePage from './EditProfilePage'

function UserProfile() {
  const AuthUser = true;

  const follow = true;

  const showFollowing = !follow ? <ProfileFollowButton>Follow</ProfileFollowButton> : <ProfileUnFollowButton>Unfollow</ProfileUnFollowButton>;

  const [showEditPage, setShowEditPage] = useState(false)

  return (
     showEditPage ?
      <EditProfilePage />
      :
      <ProfileBox>
        <ProfileTopBar />

        <ProfileTopSection >
          <CircleProfileLarge src={ProfilePic} alt='Profile Picture'/>

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
          <b>Username</b>

          <p>
          Twenty-five stars were neatly placed on the piece of paper. There was room for five more stars but they would be difficult ones to earn. It had taken years to earn the first twenty-five, and they were considered the "easy" ones.
          </p>
        </ProfileUserInfoSection>
        
        {
          AuthUser ?
            <EditProfileButton>Edit Profile</EditProfileButton>
            :
            showFollowing
        }
        

        <ProfileImagesSection>

          <ProfilePostImage src={supra} />
          <ProfilePostImage src={sti} />
          <ProfilePostImage src={supra} />
          <ProfilePostImage src={sti} />
          <ProfilePostImage src={supra} />
          <ProfilePostImage src={sti} />
          <ProfilePostImage src={supra} />
          <ProfilePostImage src={sti} />
          <ProfilePostImage src={supra} />
          <ProfilePostImage src={sti} />
          <ProfilePostImage src={supra} />
          <ProfilePostImage src={sti} />
          <ProfilePostImage src={supra} />
          <ProfilePostImage src={sti} />
          <ProfilePostImage src={supra} />
          <ProfilePostImage src={sti} />
          <ProfilePostImage src={supra} />
          <ProfilePostImage src={sti} />
          <ProfilePostImage src={supra} />
          <ProfilePostImage src={sti} />

        </ProfileImagesSection>
    </ProfileBox>
  )
}

export default UserProfile