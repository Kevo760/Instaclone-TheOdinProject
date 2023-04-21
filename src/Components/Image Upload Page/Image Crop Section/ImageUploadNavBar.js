import React from 'react'
import { BiArrowBack} from 'react-icons/bi'
import styled from 'styled-components';

const ImageUploadTopBar = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid rgba(229, 229, 229);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    background-color: white;
    z-index: 1;
    justify-content: left;
    gap: 50px;
    align-items: center;
    padding-left: 20px;
`

const backIconStyle = {
  transform: 'scale(2)',
  marginLeft: '10px',
  cursor: 'pointer'
}


function ImageUploadNavBar(backArrowFunction) {
  return (
    <ImageUploadTopBar>
        <BiArrowBack style={backIconStyle} onClick={backArrowFunction}/>
        <h3>New post</h3>
    </ImageUploadTopBar>
  )
}

export default ImageUploadNavBar