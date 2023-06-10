import React from 'react'
import styled from "styled-components"
import { CircleProfileSmall } from '../../Styled Components/CircleProfileImg'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import { useAuth } from '../../Context/AuthContext'
import { checkIsLiked, likePostHander } from '../LikeFunctions'
import { useCommentModal } from '../../Context/CommentModalContext'


const Post = styled.div`
    width: 480px;
    height: fit-content;
    margin: auto;
    display: flex;
    flex-direction: column;
    overflow: auto;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
    .like-icon {
        transform: scale(1.5);
        cursor: pointer;
    }
    .comment-icon {
        transform: scale(1.2);
        cursor: pointer;
    }
    .red {
        fill: orangered;
        cursor: auto;
    }
    .view-comments {
        cursor: pointer;
    }
`
const ImgPost = styled.img`
    height: 100%;
    object-fit: contain;
`

const PostTopBar = styled.div`
  height: 58px;
  width: 100%;
  padding: 10px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  gap: 10px;
  b {
  margin: auto 0 ;
 }
  .user-top-section {
    display: flex;
    flex-direction: row;
    gap: 10px;
}
  button {
    padding: 6px;
    background-color: tomato;
    border: none;
    border-radius: 6px;
    color: white;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
    cursor: pointer;
    &:hover {
        background-color: rgb(169,26,0);
    }
    &:active {
        background-color: tomato;
    }
}
`

const PostBottomSection = styled.div`
  padding: 10px 16px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  .like-comment-post, .user-comment-post {
  display: flex;
  flex-direction: row;
  gap: 12px;
}
`

function MainUserPostBox(prop) {
    const {mainUserData} = prop
    const {handleShowCommentModal} = useCommentModal()
    const authUser = useAuth()

    const whoLikedPost = mainUserData.likes
    const like = checkIsLiked(whoLikedPost, authUser.currentUser.uid)
    //if like is true use red heart if not use outline heart
    const isLiked = like ? <AiFillHeart className='like-icon red'/> : <AiOutlineHeart className='like-icon' onClick={e => likePostHander(mainUserData.postID, authUser.currentUser.uid, authUser.currentUser.uid)}/>

    const openComments = () => {
        handleShowCommentModal(mainUserData)
    }


  return (
    <Post>
        <PostTopBar>
            <div className='user-top-section'>
                <CircleProfileSmall src={mainUserData.userPhotoURL}/>
                <b>{mainUserData.displayName}</b>
            </div>

            <button>Delete Post</button>
        </PostTopBar>

        <ImgPost src={mainUserData.imgURL}/>
        <PostBottomSection>
            <div className='like-comment-post'>
                {isLiked}
                <FaRegComment className='comment-icon' onClick={e => openComments()}/>
            </div>

            <div className='likes-total-post'>
                <b>{mainUserData.comments.length} Likes</b>
            </div>

            <div className='user-comment-post'>
                <b>{mainUserData.displayName}</b> 
                <p>{mainUserData.description}</p>
            </div>

            <span className='view-comments' onClick={e => openComments()}>View all comments</span>
        </PostBottomSection>
        
    </Post>
  )
}

export default MainUserPostBox