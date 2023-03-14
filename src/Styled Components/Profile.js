import styled from "styled-components";

const ProfileBox = styled.div`
    margin: 70px auto;
    display: flex;
    flex-direction: column;
    width: 670px;
    padding: 16px;
    overflow: visible;
    height: fit-content;
    font-size: 15px;
    gap: 20px;

    @media(max-width: 800px) {
    width: 480px;
  }
`

const ProfileTopSection = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    align-items: center;
    justify-items: center;
     height: 100px;
`

const ProfileUserInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    gap: 10px;
`

const ProfileImagesSection = styled.div`
    width: 100%;
    padding-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid rgba(229, 229, 229);
    
`

const ProfileColumnTextBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const ProfileFollowButton = styled.button`
    margin: auto;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    background-color: rgba(0, 168, 232);
    &:Hover {
        background-color: rgba(1, 80, 110);
    }
`

const ProfileUnFollowButton = styled(ProfileFollowButton)`
    background-color: rgb(108, 117, 125);
    &:Hover {
        background-color: rgb(33, 37, 41);
    }
`

const EditProfileButton = styled(ProfileFollowButton)`

`

const ProfilePostImage = styled.img`
    height: 100%;
    width: 100%; 
    object-fit: contain;
    cursor: pointer;
    background-color: rgba(0, 0, 0, .7);
`

const EditProfileModal = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: white;
    top: 0;
    left: 0;
`

const EditProfileBox = styled(ProfileBox)`
   align-items: center;
`

const EditProfileBioInput = styled.textarea`
    width: 100%;
    height: 80px;
    padding: 10px;
    resize: none;
    border: 2px solid #ccc;
    border-radius: 4px;
`


export {
    ProfileBox,ProfileTopSection, ProfileUserInfoSection,
    ProfileColumnTextBox, ProfileFollowButton, ProfileUnFollowButton,
    ProfileImagesSection, ProfilePostImage, EditProfileButton, 
    EditProfileBox, EditProfileBioInput, EditProfileModal
}