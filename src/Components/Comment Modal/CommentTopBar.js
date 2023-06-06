import React from 'react'
import styled from "styled-components";
import {BiArrowBack} from 'react-icons/bi'
import { useCommentModal } from '../../Context/CommentModalContext';

const CommentTop = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid rgba(229, 229, 229);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    background-color: white;
    z-index: 1;
    justify-content: left;
    padding: 20px;
    gap: 20px;
    align-items: center;
    .back-icon {
      scale: 2.5;
      cursor: pointer;
      width: 50px;
    }
`


function CommentTopBar() {
  const {handleExitCommentModal} = useCommentModal()

  return (
    <CommentTop>
        <BiArrowBack className='back-icon' onClick={handleExitCommentModal}/>
        <h2>COMMENTS</h2>
    </CommentTop>
  )
}

export default CommentTopBar