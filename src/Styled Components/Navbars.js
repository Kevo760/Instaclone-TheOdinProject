import styled from "styled-components";

const Topbar = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid rgba(229, 229, 229);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    background-color: white;
`

const BottomBar = styled.div`
    position: fixed;
    bottom: 0;
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

export {Topbar, BottomBar}