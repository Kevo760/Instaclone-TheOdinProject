import React, { useEffect } from 'react'
import { ImagePostBox, ImagePostBoxModal } from '../../Styled Components/ImageModal'
import PostBox from '../PostBox'
import ImagePostTopBar from './ImagePostTopBar'

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