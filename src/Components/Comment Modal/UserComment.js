import React from 'react'
import styled from "styled-components";
import { CircleProfileSmall } from '../../Styled Components/CircleProfileImg'
import { useUserProfile } from '../../Context/UserProfileContext';
import { useNavigate } from 'react-router-dom';
import { useCommentModal } from '../../Context/CommentModalContext';

const UserCommentDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    .user-comment-name {
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
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
    const {handleUserProfileID} = useUserProfile()
    const navigate = useNavigate()
    const {handleExitCommentModal} = useCommentModal()
    // Gets firebase timestamp and times it by 1000 to get actual date
    const serverTime = new Date(userData.timestamp.seconds * 1000)
    // Formats that date to MM/DD/YYYY
    const formatDate = serverTime.getMonth() + '/' + serverTime.getDate() + '/' + serverTime.getFullYear()

    const showUserProfile = () => {
        handleUserProfileID(userData.userCommentingUID)
        navigate('/userprofile')
        handleExitCommentModal()
    }

  return (
    <UserCommentPost>
        <CircleProfileSmall src={userData.photoURL} alt='Profile picture' />

        <UserCommentDescription>
            <p className='user-comment-name' onClick={showUserProfile}>
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