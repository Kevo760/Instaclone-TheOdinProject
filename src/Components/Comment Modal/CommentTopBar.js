import React from 'react'
import { CommentTop } from '../../Styled Components/Navbars'
import {BiArrowBack} from 'react-icons/bi'


function CommentTopBar() {
  return (
    <CommentTop>
        <BiArrowBack className='back-icon' />
        <h1>COMMENTS</h1>
    </CommentTop>
  )
}

export default CommentTopBar