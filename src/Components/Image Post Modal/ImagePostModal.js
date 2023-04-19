import React, { useEffect } from 'react'
import styled from "styled-components";
import PostBox from '../PostBox'
import ImagePostTopBar from './ImagePostTopBar'


const ImagePostBox = styled.div`
    margin: 80px auto;
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
    width: 100vw;
    height: 100vh;
    background-color: white;
    top: 0;
    left: 0;
`

function ImagePostModal() {

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
        <ImagePostTopBar />
        <PostBox />
      </ImagePostBox>
    </ImagePostBoxModal>
  )
}

export default ImagePostModal