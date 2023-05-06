import React from 'react'
import {FaSearch, FaHome, FaPlusSquare, FaUserCircle} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const BottomBar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-top: 1px solid rgba(229, 229, 229);
    z-index: 1;
    .icons {
      transform: scale(1.5);
      cursor: pointer;
    }
`

function BottomNav() {
  const navigate = useNavigate()

  return (
    <BottomBar>
        <FaHome className='icons' onClick={() => navigate('/')}/>
        <FaSearch className='icons' onClick={() => navigate('/search')}/>
        <FaPlusSquare className='icons' onClick={() => navigate('/post')}/>
        <FaUserCircle className='icons' onClick={() => navigate('/myprofile')}/>
    </BottomBar>
  )
}

export default BottomNav