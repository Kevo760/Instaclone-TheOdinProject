import React from 'react'
import styled from "styled-components";
import { BiArrowBack} from 'react-icons/bi'



const ProfileTop = styled.div`
    display: flex;
    justify-content: left;
    position: fixed;
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
    z-index: 3;
    .back-icon {
      scale: 2.5;
      cursor: pointer;
      width: 50px;
    }
`

function ImagePostTopBar({backFunction, userName}) {
  return (
    <ProfileTop>
        <BiArrowBack className='back-icon' onClick={backFunction}/>
        <h2>{userName}</h2> 
    </ProfileTop>
  )
}

export default ImagePostTopBar