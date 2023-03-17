import React from 'react'
import { ImagePostBox } from '../../Styled Components/ImagePost'
import PostBox from '../PostBox'
import ImagePostTopBar from './ImagePostTopBar'

function ImagePostModal() {
  return (
    <ImagePostBox>
        <ImagePostTopBar />
        <PostBox />
    </ImagePostBox>
  )
}

export default ImagePostModal