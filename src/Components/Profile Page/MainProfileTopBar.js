import React from 'react'
import styled from "styled-components"



const ProfileTop = styled.div`
    display: flex;
    justify-content: left;
    padding: 20px;
    gap: 20px;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid rgba(229, 229, 229);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    background-color: white;
    z-index: 2;
`

function MainProfileTopBar({user}) {
  return (
    <ProfileTop>
        <h2>{user}</h2> 
    </ProfileTop>
  )
}

export default MainProfileTopBar