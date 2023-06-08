import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { CircleProfileSmall } from '../../Styled Components/CircleProfileImg'
import { useAuth } from '../../Context/AuthContext'
import { doc, serverTimestamp, setDoc} from "firebase/firestore"
import { db } from '../../firebase'
import { v4 as uuid } from 'uuid';
import { useCommentModal } from '../../Context/CommentModalContext';


const CommentBottom = styled.form`
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
  const authUser = useAuth()
  const [commentText, setCommentText] = useState('')
  const [disableBtn, setDisableBtn] = useState(true)
  const {postID} = useCommentModal()
  
  const handleSubmitComment = async(e) => {
    e.preventDefault()
    // Generates uniqueID and makes the uniqueID 8 characters
    const uniqueID = uuid()
    const smallUID = uniqueID.slice(0,8)

    try {
      const mainRef = doc(db, 'mainPagePost', 'post')
      const postRef = doc(db, 'userPost', authUser.currentUser.uid)

      await setDoc(mainRef, {
        [postID]: {
          'comments': {
            [smallUID]: {
              timestamp: serverTimestamp(),
              textValue: commentText,
              userCommenting: authUser.currentUser.displayName,
              userCommentingUID: authUser.currentUser.uid,
              commentID: smallUID,
              photoURL: authUser.currentUser.photoURL,
            }
          }
        }
      }, {merge: true})

      await setDoc(postRef, {
        [postID]: {
          'comments': {
            [smallUID]: {
              timestamp: serverTimestamp(),
              textValue: commentText,
              userCommenting: authUser.currentUser.displayName,
              userCommentingUID: authUser.currentUser.uid,
              commentID: smallUID,
              photoURL: authUser.currentUser.photoURL,
            }
          }
        }
      }, {merge: true})
      setCommentText('')
    } catch(error) {
      console.log(error)
      setCommentText('')
    }
  }

  // If comment text is an empty string disbale button
  useEffect(() => {
    if(commentText === '') {
      setDisableBtn(true)
    } else {
      setDisableBtn(false)
    }
  }, [commentText])

  return (
    <CommentBottom onSubmit={handleSubmitComment}>
        <CircleProfileSmall src={authUser.currentUser.photoURL} alt='Main user picture'/>
        <CommentTextBarInput 
            placeholder='Add a comment'
            type='text'
            id='comment-bar'
            onChange={e => setCommentText(e.target.value)}
            autoComplete="off"
        />
        <CommentTextBarButton type='submit' disabled={disableBtn}>Post</CommentTextBarButton>
    </CommentBottom>
  )
}

export default CommentTextBar