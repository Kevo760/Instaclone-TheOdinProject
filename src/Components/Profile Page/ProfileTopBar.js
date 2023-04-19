import React from 'react'
import styled from "styled-components"
import { BiArrowBack} from 'react-icons/bi'


const ProfileTop = styled.div`
    display: flex;
    justify-content: left;
    padding: 20px;
    gap: 20px;
    align-items: center;
    position: fixed;
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

function ProfileTopBar() {
  return (
    <ProfileTop>
        <BiArrowBack className='back-icon' />
        <h2>USER</h2> 
    </ProfileTop>
  )
}

export default ProfileTopBar