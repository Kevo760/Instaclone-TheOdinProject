import React, { useContext } from 'react'
import BottomNav from './BottomNav';
import Logobar from './Logobar';
import NotLoggedInTopNav from './NotLoggedInTopNav';
import PostBox from './PostBox';
import styled from "styled-components";
import { AuthContext } from '../Context/AuthContext';

const MainPageBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5rem auto;
`

function MainPage() {
    const {currentUser} = useContext(AuthContext)
    
    const CurrentNavBar = currentUser ? <Logobar /> : <NotLoggedInTopNav />
    const showBottomNav = currentUser ? <BottomNav /> : null

  return (
    <MainPageBox>
        {CurrentNavBar}
        {showBottomNav}
        <PostBox />
        <PostBox />
        <PostBox />
        <PostBox />
        <PostBox />

    </MainPageBox>
  )
}

export default MainPage