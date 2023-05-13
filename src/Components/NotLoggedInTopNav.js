import React from 'react'
import styled from "styled-components";
import { LogoText } from '../Styled Components/TextStyles';
import { useNavigate } from 'react-router-dom';


const TopbarNotLoggedIn = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid rgba(229, 229, 229);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    background-color: white;
    align-items: center;
    padding: 0 16px;
    z-index: 1;
    .not-loggedin-logo {
      width: 50px;
    }
    .not-loggedin-buttons{
      display: flex;
      flex-direction: row;
      gap: 4px;
    }
`

const TopbarLogInButton = styled.button`
    width: 70px;
    padding: 8px;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    background-color: rgba(0, 168, 232);
    cursor: pointer;
    &:hover {
    background-color: rgba(1, 80, 110);
  }
`

const TopbarSignUpButton = styled(TopbarLogInButton)`
    background-color: white;
    color: rgba(0, 168, 232);
    border: 1px solid rgb(222, 226, 230);
    &:hover {
    background-color: white;
    color: rgba(1, 80, 110);
  }
`

function NotLoggedInTopNav() {
  const navigate = useNavigate()

  return (
    <TopbarNotLoggedIn>
        <LogoText className='not-loggedin-logo'>Instaclone</LogoText>
        <div className='not-loggedin-buttons'>
            <TopbarLogInButton onClick={() => navigate('/login')}>
                Log in
            </TopbarLogInButton>

            <TopbarSignUpButton onClick={() => navigate('/signup')}>
                Sign Up
            </TopbarSignUpButton>
        </div>
    </TopbarNotLoggedIn>
  )
}

export default NotLoggedInTopNav