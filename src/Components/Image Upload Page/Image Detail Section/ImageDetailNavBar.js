import React from 'react'
import {IoArrowBack, IoCheckmarkSharp }from 'react-icons/io5'
import styled from 'styled-components';
import { useShowFilterSection } from '../../../Context/ImgPageHandlerContext';

const ImageDetailTopBar = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid rgba(229, 229, 229);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    background-color: white;
    z-index: 1;
    text-align: center;
    .back-icon {
      scale: 2;
      margin-left: 20px;
      cursor: pointer;
    }
    .check-icon {
      scale: 2;
      margin-left: auto;
      margin-right: 20px;
      cursor: pointer;
    }
`


function ImageDetailNavBar() {
  const showFilterSection = useShowFilterSection()

  return (
    <ImageDetailTopBar>
        <IoArrowBack onClick={showFilterSection} className='back-icon'/>
        <h2>New post</h2>
        <IoCheckmarkSharp className='check-icon' />
    </ImageDetailTopBar>
  )
}

export default ImageDetailNavBar