import React from 'react'
import { CircleProfileSmall } from '../../Styled Components/CircleProfileImg'
import { CommentSection, CommentSectionOwnerDescription, CommentSectionOwnerPost } from '../../Styled Components/Post'
import ProfilePic from '../../images/profile.jpg'
import UserComment from './UserComment'
import CommentTopBar from './CommentTopBar'
import CommentTextBar from './CommentTextBar'

function CommentPage() {
  return (
    <CommentSection >
      <CommentTopBar />

        <CommentSectionOwnerPost>
            <CircleProfileSmall src={ProfilePic} alt='Profile picture' />

            <CommentSectionOwnerDescription>
                <p className='comment-section-owner'>
                  Post Owner 
                  <span className='comment-section-owner-date'> 12/1/2022</span>
                </p>
                <p className='comment-section-owner-description'>
                  Nobody really understood Kevin. It wasn't that he was super strange or difficult. It was more that there wasn't enough there that anyone wanted to take the time to understand him. This was a shame as Kevin had many of the answers to the important questions most people who knew him had. It was even more of a shame that they'd refuse to listen even if Kevin offered to give them the answers. So, Kevin remained silent, misunderstood, and kept those important answers to life to himself.
                  He stepped away from the mic.
                </p>
            </CommentSectionOwnerDescription>
        </CommentSectionOwnerPost>

        <UserComment />
        <UserComment />
        <UserComment />

      <CommentTextBar />
    </CommentSection>
  )
}

export default CommentPage