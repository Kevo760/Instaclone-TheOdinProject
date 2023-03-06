import React from 'react'
import { CircleProfileSmall } from '../../Styled Components/CircleProfileImg'
import { CommentBottom, CommentTextBarButton, CommentTextBarInput } from '../../Styled Components/Navbars'
import ProfilePic from '../../images/profile.jpg'

function CommentTextBar() {
  return (
    <CommentBottom>
        <CircleProfileSmall src={ProfilePic} alt='Main user picture'/>
        <CommentTextBarInput 
            placeholder='Add a comment'
            type='text'
        />
        <CommentTextBarButton>
            Post
        </CommentTextBarButton>
    </CommentBottom>
  )
}

export default CommentTextBar