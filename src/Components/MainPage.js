import React from 'react'
import BottomNav from './BottomNav';
import Logobar from './Logobar';
import NotLoggedInTopNav from './NotLoggedInTopNav';
import PostBox from './PostBox';
import styled from "styled-components";

const MainPageBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5rem auto;
`

function MainPage() {
    const AuthUser = true;

    const CurrentNavBar = AuthUser ? <Logobar /> : <NotLoggedInTopNav />

    const showBottomNav = AuthUser ? <BottomNav /> : null

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