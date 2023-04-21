import React from 'react'
import styled from "styled-components";
import {IoArrowBack, IoArrowForward }from 'react-icons/io5'

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
    `
const backIconStyle = {
  transform: 'scale(2)',
  marginLeft: '10px',
  cursor: 'pointer'
}

const forwardIconStyle = {
  transform: 'scale(2)',
  marginLeft: 'auto',
  marginRight: '20px',
  cursor: 'pointer'
}


function ImageFilterTopNav(backArrowFunction, forwardArrowFunction) {

    
  return (
    <ImageFilterTopBar>
        <IoArrowBack onClick={backArrowFunction} style={backIconStyle}/>
        <h2>New post</h2>
        <IoArrowForward onClick={forwardArrowFunction} style={forwardIconStyle} />
    </ImageFilterTopBar>
  )
}

export default ImageFilterTopNav