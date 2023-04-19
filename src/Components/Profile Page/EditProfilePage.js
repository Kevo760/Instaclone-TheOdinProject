import React, { useEffect } from 'react'
import styled from "styled-components";
import { CircleProfileLarge } from '../../Styled Components/CircleProfileImg'
import EditProfileTopBar from './EditProfileTopBar'
import ProfilePic from '../../images/profile.jpg'

const EditProfileModal = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: white;
    top: 0;
    left: 0;
`
const EditProfileBioInput = styled.textarea`
    width: 100%;
    height: 80px;
    padding: 10px;
    resize: none;
    border: 2px solid #ccc;
    border-radius: 4px;
    outline: none;
`

const EditProfileBox = styled.div`
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    width: 670px;
    padding: 26px;
    overflow: visible;
    height: fit-content;
    font-size: 15px;
    gap: 20px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;

    @media(max-width: 800px) {
    width: 480px;
  }
`

const SubmitButton = styled.button`
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

const EditButton = styled(SubmitButton)`
    background-color: rgb(108, 117, 125);
    &:Hover {
        background-color: rgb(33, 37, 41);
    }
`

const BioSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`


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

        <EditButton>Edit Photo</EditButton>

        <BioSection>
            <b>Bio</b>
            <EditProfileBioInput 
                type='text'
                placeholder='Add something about yourself'
            />
        </BioSection>

        <SubmitButton>Submit Changes</SubmitButton>
        
    </EditProfileBox>
    </EditProfileModal>
  )
}

export default EditProfilePage