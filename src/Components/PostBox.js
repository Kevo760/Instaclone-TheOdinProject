import React from 'react'
import { ImgPost, Post } from '../Styled Components/Post'
import gtr from '../images/gtr.jpg'
import sti from '../images/sti.jpg'
import bot from '../images/bot.jpg'
import profile from '../images/profile.jpg'
import { CircleProfileSmall } from '../Styled Components/CircleProfileImg'

function PostBox() {
  return (
    <Post>
        <div className='post-top-bar'>
            <CircleProfileSmall src={profile}/>
            <b>user</b>
        </div>

        <ImgPost src={bot}/>
        <div className='post-bottom-section'>
            <div className='like-comment-post'>
                <p>Like</p> 
                <p>Comment</p>
            </div>

            <div className='likes-total-post'>
                <b>100 Likes</b>
            </div>

            <div className='user-comment-post'>
                <b>Username</b> 
                <p>User Comment</p>
            </div>

            <p>View all comments</p>
        </div>
        
    </Post>
  )
}

export default PostBox