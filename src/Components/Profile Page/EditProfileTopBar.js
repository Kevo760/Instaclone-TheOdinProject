import React from 'react'
import styled from "styled-components"
import { BiArrowBack} from 'react-icons/bi'

const ProfileTop = styled.div`
    display: flex;
    position: fixed;
    justify-content: left;
    padding: 20px;
    gap: 20px;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid rgba(229, 229, 229);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    background-color: white;
    z-index: 1;
    .back-icon {
      scale: 2.5;
      cursor: pointer;
      width: 50px;
    }
`

function EditProfileTopBar({backFunction}) {
  return (
    <ProfileTop>
        <BiArrowBack className='back-icon' onClick={backFunction} />
        <h2>Edit Profile</h2> 
    </ProfileTop>
  )
}

export default EditProfileTopBar