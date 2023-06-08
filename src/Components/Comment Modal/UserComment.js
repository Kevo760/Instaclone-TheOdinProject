import React from 'react'
import styled from "styled-components";
import { CircleProfileSmall } from '../../Styled Components/CircleProfileImg'

const UserCommentDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
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
function UserComment(props) {
    const {userData} = props

    const serverTime = new Date(userData.timestamp.seconds * 1000)
    const formatDate = serverTime.getMonth() + '/' + serverTime.getDate() + '/' + serverTime.getFullYear()

  return (
    <UserCommentPost>
        <CircleProfileSmall src={userData.photoURL} alt='Profile picture' />

        <UserCommentDescription>
            <p className='user-comment-name'>
                {userData.userCommenting}
                <span className='user-comment-date'>{formatDate}</span>
            </p>

            <p className='user-comment-description'>
                {userData.textValue}
            </p>
        </UserCommentDescription>

    </UserCommentPost>
  )
}

export default UserComment