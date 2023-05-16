import React from 'react'
import {IoArrowForward }from 'react-icons/io5'
import styled from 'styled-components'

const ImageUploadTopBar = styled.div`
    display: flex;
    position: fixed;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid rgba(229, 229, 229);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    background-color: white;
    z-index: 1;
    align-items: center;
    padding-left: 20px;
    .forward-icon {
      scale: 2;
      margin-right: 20px;
      cursor: pointer;
    }
    .disabled {
      opacity: .2;
    }
`

function ImageUploadNavBar(prop) {
  const {imgSrc, onDownloadCropClick} = prop

  const showFordwardIcon = imgSrc ? <IoArrowForward onClick={() => onDownloadCropClick()}  className='forward-icon'/> : <IoArrowForward  className='forward-icon disabled'/>

  return (
    <ImageUploadTopBar>
        <h2>New post</h2>
        {showFordwardIcon}
    </ImageUploadTopBar>
  )
}

export default ImageUploadNavBar