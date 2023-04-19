import React from 'react'
import styled from "styled-components";
import { CircleProfileSmall } from '../../Styled Components/CircleProfileImg'
import ProfilePic from '../../images/profile.jpg'

const CommentBottom = styled.div`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 50px;
overflow: hidden;
display: flex;
flex-direction: row;
align-items: center;
background-color: white;
border-top: 1px solid rgba(229, 229, 229);
justify-content: left;
padding: 10px;
gap: 16px;
`

const CommentTextBarButton = styled.button`
font-weight: bold;
border: none;
background-color: white;
font-size: 18px;
width: 60px;
cursor: pointer;
`
const CommentTextBarInput = styled.input`
border: none;
padding: 10px;
width: 100%;
outline: none;
border-bottom: 1px solid rgb(52, 58, 64);
`

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