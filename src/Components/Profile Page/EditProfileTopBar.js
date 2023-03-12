import React from 'react'
import { ProfileTop } from '../../Styled Components/Navbars'
import { BiArrowBack} from 'react-icons/bi'

function EditProfileTopBar() {
  return (
    <ProfileTop>
        <BiArrowBack className='back-icon' />
        <h3>Edit Profile</h3> 
    </ProfileTop>
  )
}

export default EditProfileTopBar