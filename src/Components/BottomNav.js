import React from 'react'
import {FaSearch, FaHome, FaPlusSquare, FaUserCircle} from 'react-icons/fa'
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
  return (
    <BottomBar>
        <FaHome className='icons'/>
        <FaSearch className='icons'/>
        <FaPlusSquare className='icons'/>
        <FaUserCircle className='icons'/>
    </BottomBar>
  )
}

export default BottomNav