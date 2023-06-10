import React, { useContext } from 'react'
import BottomNav from './BottomNav';
import Logobar from './Logobar';
import NotLoggedInTopNav from './NotLoggedInTopNav';
import PostBox from './PostBox';
import styled from "styled-components";
import { useAuth } from '../Context/AuthContext';

const MainPageBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5rem auto;
`

function MainPage() {
    const authUser = useAuth()
    
    const CurrentNavBar = authUser ? <Logobar /> : <NotLoggedInTopNav />
    const showBottomNav = authUser ? <BottomNav /> : null

  return (
    <MainPageBox>
        {CurrentNavBar}
        {showBottomNav}
    </MainPageBox>
  )
}

export default MainPage