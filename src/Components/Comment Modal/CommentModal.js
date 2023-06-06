import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { CircleProfileSmall } from '../../Styled Components/CircleProfileImg'
import ProfilePic from '../../images/profile.jpg'
import UserComment from './UserComment'
import CommentTopBar from './CommentTopBar'
import CommentTextBar from './CommentTextBar'
import { doc, getDocs, getDoc, query, where, collection } from 'firebase/firestore';
import { db } from '../../firebase';


const CommentModalBox = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: white;
  z-index: 3;
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

  const [comData, setComData] = useState()

  const getComments = async() => {
    try {
    const postDataRef = doc(db,'userPost', 'Dv6cBEmfDiPdnsMso85Q8TU2ISQ2')
    const postSnap = await getDoc(postDataRef)

    if(postSnap.exists()) {
      const postValue = postSnap.data()
      // converts object data into array
      const postValueArray = Object.entries(postValue)
      console.log(postValueArray[1][1])
      setComData(postValueArray[1][1])
    } else {
      console.log('data does not exist')
    }


    } catch(error) {
      console.log(error)
    }
    
  }

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
        <button onClick={getComments}>Test</button>
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
    </CommentModalBox>
  )
}

export default CommentModal