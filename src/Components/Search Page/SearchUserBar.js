import React from 'react'
import styled from 'styled-components'
import { CircleProfileSmall } from '../../Styled Components/CircleProfileImg'

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
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    &:hover {
        background-color: rgb(173, 181, 189);
    }
`

const UserInfoSection = styled.div`

`

const SearchUserBar =({user, viewProfile}) => {
    

  return (
    <UserBar onClick={viewProfile}>
        <CircleProfileSmall src={user.photoURL} alt='profile picture'/>

        <UserInfoSection>
            <b>{user.displayName}</b>
            <p>{user.fullName}</p>
        </UserInfoSection>
    </UserBar>
  )
}

export default SearchUserBar