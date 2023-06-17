import React from 'react'
import BottomNav from './BottomNav';
import Logobar from './Logobar';
import NotLoggedInTopNav from './NotLoggedInTopNav';
import PostBox from './PostBox';
import styled from "styled-components";
import { useAuth } from '../Context/AuthContext';
import { useMainPagePost } from '../Context/MainPagePostContext';

const MainPageBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5rem auto;
`

function MainPage() {
    const authUser = useAuth()
    const {mainPagePostData} = useMainPagePost()
    
    const CurrentNavBar = authUser.currentUser ? <Logobar /> : <NotLoggedInTopNav />
    const showBottomNav = authUser.currentUser ? <BottomNav /> : null

    const showMainPagePosts = mainPagePostData ? mainPagePostData.map(dataObject => <PostBox postData={dataObject[1]} key={dataObject[1].postID} />) : null

  return (
    <MainPageBox>
        {CurrentNavBar}
        {showBottomNav}

        {showMainPagePosts}
    </MainPageBox>
  )
}

export default MainPage