import React, { useEffect } from 'react'
import styled from "styled-components"
import ImagePostTopBar from './ImagePostTopBar'
import MainUserPostBox from './MainUserPostBox'

const ImagePostBox = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 670px;
    overflow: visible;
    height: fit-content;
    font-size: 15px;

    @media(max-width: 800px) {
    width: 480px;
  }
`

const ImagePostBoxModal = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: white;
    top: 0;
    left: 0;
    z-index: 2;
`
function ImagePostMainUserModal({backFunction, mainUserPost}) {

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
    <ImagePostBoxModal>
      <ImagePostBox>
        <ImagePostTopBar backFunction={backFunction} userName={mainUserPost.displayName}/>
        <MainUserPostBox mainUserPost={mainUserPost} closePostModal={backFunction}/>
      </ImagePostBox>
    </ImagePostBoxModal>
  )
}

export default ImagePostMainUserModal