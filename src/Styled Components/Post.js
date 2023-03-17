import styled from "styled-components";

const Post = styled.div`
    width: 480px;
    height: 460px;
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
    overflow: auto;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
`

const ImgPost = styled.img`
    width: 100%;
    object-fit: fill;
`

const CommentSection = styled(Post)`
    padding: 16px;
    overflow: visible;
    height: fit-content;
    font-size: 15px;
`

const CommentSectionOwnerPost = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 10px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(229, 229, 229);
`

const CommentSectionOwnerDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const UserCommentPost = styled(CommentSectionOwnerPost)`
    border-bottom: none;
`

const UserCommentDescription = styled(CommentSectionOwnerDescription)`

`



export {Post, ImgPost, CommentSection, CommentSectionOwnerPost, CommentSectionOwnerDescription, UserCommentPost, UserCommentDescription}