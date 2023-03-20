import React from 'react'
import { MainPageBox } from '../Styled Components/MainPageStyles';
import BottomNav from './BottomNav';
import Logobar from './Logobar';
import NotLoggedInTopNav from './NotLoggedInTopNav';
import PostBox from './PostBox';

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