import React from 'react'
import styled from "styled-components";
import { CircleProfileSmall } from '../../Styled Components/CircleProfileImg'
import ProfilePic from '../../images/profile.jpg'

const UserCommentDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .user-comment-name {
        font-weight: bold;
        font-size: 14px;
    }
    .user-comment-date {
        color: grey;
        font-size: 12px;
        margin-left: 5px;
    }
    .user-comment-description {
        margin-right: 1rem;
    }
`
const UserCommentPost = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 10px;
    padding-bottom: 16px;
    border-bottom: none;
`
function UserComment(userData) {
  return (
    <UserCommentPost>
        <CircleProfileSmall src={userData.photoURL} alt='Profile picture' />

        <UserCommentDescription>
            <p className='user-comment-name'>
                {userData.userCommenting}
                <span className='user-comment-date'>12/1/1990</span>
            </p>

            <p className='user-comment-description'>
                {userData.textValue}
            </p>
        </UserCommentDescription>

    </UserCommentPost>
  )
}

export default UserComment