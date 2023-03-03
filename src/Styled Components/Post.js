import styled from "styled-components";

const Post = styled.div`
    width: 500px;
    height: 500px;
    background-color: grey;
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
    overflow: auto;
`

const ImgPost = styled.img`
    width: 100%;
    object-fit: fill;
`



export {Post, ImgPost}