import React from 'react'
import styled from 'styled-components'
import { CircleProfileSmall } from '../../Styled Components/CircleProfileImg'
import profile from '../../images/profile.jpg'

const UserBar = styled.div`
    width: 500px;
    max-width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    &:hover {
        background-color: rgb(173, 181, 189);
    }
`

const UserInfoSection = styled.div`

`

function SearchUserBar({user, viewProfile}) {
    

  return (
    <UserBar onClick={viewProfile}>
        <CircleProfileSmall src={profile} alt='profile picture'/>

        <UserInfoSection>
            <b>Username</b>
            <p>full name</p>
        </UserInfoSection>
    </UserBar>
  )
}

export default SearchUserBar