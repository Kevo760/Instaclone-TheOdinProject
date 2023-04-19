import styled from "styled-components";

const Signform = styled.form`
    width: 350px;
    height: 400px;
    padding: 16px;
    border: 1px solid rgba(229, 229, 229);
    
`

const SignInBox = styled(Signform)`
    height: 350px;
`

const SignUpBox = styled(Signform)`
    height: 450px;
`

const SmallSignBox = styled(Signform)`
    margin-top: 20px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const SignInput = styled.input`
    padding: 10px;
    width: 80%;
    margin-top: 10px;
    border: 1px solid rgba(229, 229, 229);
    border-radius: 4px;
    background-color: rgba(248, 249, 250);
`

const SignButton = styled.button`
    margin-top: 20px;
    width: 80%;
    padding: 10px;
    color: white;
    font-weight: bold;
    background-color: rgba(0, 168, 232);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: rgba(1, 80, 110);
    }
    &:active{
        background-color: rgba(0, 168, 232);
    }
`

export {SignInBox, SmallSignBox, SignInput, SignButton, SignUpBox}