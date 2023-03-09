import React from 'react'
import { ProfileTop } from '../../Styled Components/Navbars'
import { BiArrowBack} from 'react-icons/bi'

function ProfileTopBar() {
  return (
    <ProfileTop>
        <BiArrowBack className='back-icon' />
        <h3>USER</h3> 
    </ProfileTop>
  )
}

export default ProfileTopBar