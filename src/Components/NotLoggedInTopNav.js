import React from 'react'
import { TopbarLogInButton, TopbarNotLoggedIn, TopbarSignUpButton} from '../Styled Components/Navbars'

function NotLoggedInTopNav() {
  return (
    <TopbarNotLoggedIn>
        <h1 className='logo-text-top'>Instaclone</h1>
        <div>
            <TopbarLogInButton>
                Log in
            </TopbarLogInButton>

            <TopbarSignUpButton>
                Sign Up
            </TopbarSignUpButton>
        </div>
    </TopbarNotLoggedIn>
  )
}

export default NotLoggedInTopNav