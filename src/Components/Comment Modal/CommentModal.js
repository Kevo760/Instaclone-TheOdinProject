import React, { useEffect } from 'react'
import styled from "styled-components";
import { CircleProfileSmall } from '../../Styled Components/CircleProfileImg'
import UserComment from './UserComment'
import CommentTopBar from './CommentTopBar'
import CommentTextBar from './CommentTextBar'
import { useCommentModal } from '../../Context/CommentModalContext';
import { useAuth } from '../../Context/AuthContext';


const CommentModalBox = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: white;
  z-index: 3;
  .error-msg{
    color: tomato;
    font-weight: bold;
    text-align: center;
  }
`
const CommentSection = styled.div`
    padding: 16px;
    overflow: auto;
    height: fit-content;
    font-size: 15px;
    margin: 80px auto;
    width: 480px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
`
const CommentSectionOwnerDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .comment-section-owner {
      font-weight: bold;
      font-size: 14px;
    }
    .comment-section-owner-date {
      color: grey;
      font-size: 12px;
      margin-left: 5px;
    }
    .comment-section-owner-description {
      margin-right: 1rem;
    }
`
const CommentSectionOwnerPost = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 10px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(229, 229, 229);
`


function CommentModal() {
  const {postData} = useCommentModal()
  const authUser = useAuth()
  
  const serverTime = new Date(postData.timestamp.seconds * 1000)
  const formatDate = serverTime.getMonth() + '/' + serverTime.getDate() + '/' + serverTime.getFullYear()

  const commentsArray = Object.entries(postData.comments)
  const sortComments = commentsArray.sort(function(x,y) {
    return y[1].timestamp - x[1].timestamp
  })

  const loadComments = sortComments ? sortComments.map(data => <UserComment key={data[1].commentID} userData={data[1]}/>) : null

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
    <CommentModalBox>
      <CommentSection >
        <CommentTopBar />
          <CommentSectionOwnerPost>
            <CircleProfileSmall src={postData.userPhotoURL} alt='Profile picture' />

            <CommentSectionOwnerDescription>
                <p className='comment-section-owner'>
                  {postData.displayName}
                  <span className='comment-section-owner-date'>{formatDate}</span>
                </p>
                <p className='comment-section-owner-description'>
                  {postData.description}
                </p>
            </CommentSectionOwnerDescription>
          </CommentSectionOwnerPost>
          {/* Load comments */}
          {
            loadComments
          }
          {/* If authUser show text bar so your can add comments */}
          {
            authUser ?
            <CommentTextBar />
            :
            null
          }
      </CommentSection>
    </CommentModalBox>
  )
}

export default CommentModal