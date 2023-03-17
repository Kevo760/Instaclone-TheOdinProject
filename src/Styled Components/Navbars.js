import styled from "styled-components";

const Topbar = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid rgba(229, 229, 229);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    background-color: white;
`

const BottomBar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-top: 1px solid rgba(229, 229, 229);
`

const CommentTop = styled(Topbar)`
    justify-content: left;
    padding: 20px;
    gap: 50px;
    align-items: center;
`

const CommentBottom = styled(BottomBar)`
    justify-content: left;
    padding: 10px;
    gap: 16px;
`

const CommentTextBarInput = styled.input`
    border: none;
    padding: 10px;
    width: 100%;
`

const CommentTextBarButton = styled.button`
    font-weight: bold;
    border: none;
    background-color: white;
    font-size: 18px;
    width: 60px;
    cursor: pointer;
`

const TopbarNotLoggedIn = styled(Topbar)`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 16px;
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
    &:hover {
    background-color: white;
    color: rgba(1, 80, 110);
  }
`

const ProfileTop = styled(Topbar)`
    justify-content: left;
    padding: 20px;
    gap: 50px;
    align-items: center;
`


export {Topbar, BottomBar, 
    CommentTop, CommentBottom, CommentTextBarInput, CommentTextBarButton, 
    TopbarNotLoggedIn, TopbarLogInButton, TopbarSignUpButton, 
    ProfileTop }