import React from 'react'
import styled from "styled-components";
import { IoArrowBack, IoArrowForward }from 'react-icons/io5'
import { useShowCropSection, useShowDetailSection } from '../../../Context/ImgPageHandlerContext';


const ImageFilterTopBar = styled.div`
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
          cursor: pointer;
          margin-left: 20px;
        }
        .fordward-icon {
          scale: 2;
          cursor: pointer;
          margin-right: 20px;
          margin-left: auto;
        }
    `


function ImageFilterTopNav() {
    const showCropSection = useShowCropSection()
    const showDetailSection = useShowDetailSection()
    
  return (
    <ImageFilterTopBar>
        <IoArrowBack onClick={showCropSection} className='back-icon'/>
        <h2>New post</h2>
        <IoArrowForward onClick={showDetailSection} className='fordward-icon' />
    </ImageFilterTopBar>
  )
}

export default ImageFilterTopNav