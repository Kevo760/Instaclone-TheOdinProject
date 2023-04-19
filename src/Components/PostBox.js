import React from 'react'
import styled from "styled-components";
import bot from '../images/bot.jpg'
import profile from '../images/profile.jpg'
import { CircleProfileSmall } from '../Styled Components/CircleProfileImg'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'


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
  align-content: center;
  gap: 10px;
  b {
  margin: auto 0 ;
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

function PostBox() {
    const like = true;

    const isLiked = like ? <AiFillHeart className='like-icon red'/> : <AiOutlineHeart className='like-icon'/>

  return (
    <Post>
        <PostTopBar>
            <CircleProfileSmall src={profile}/>
            <b>user</b>
        </PostTopBar>

        <ImgPost src={bot}/>
        <PostBottomSection>
            <div className='like-comment-post'>
                {isLiked}
                 <FaRegComment className='comment-icon'/>
            </div>

            <div className='likes-total-post'>
                <b>100 Likes</b>
            </div>

            <div className='user-comment-post'>
                <b>Username</b> 
                <p>User Comment</p>
            </div>

            <p>View all comments</p>
        </PostBottomSection>
        
    </Post>
  )
}

export default PostBox