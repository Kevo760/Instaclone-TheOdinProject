import React from 'react'
import profile from '../../../images/profile.jpg'
import ImageDetailNavBar from './ImageDetailNavBar'
import styled from 'styled-components';
import ImgWrapperDetail from './ImgWrapperDetail';

const ImageDetailBox = styled.div`
    width: 480px;
    margin: 30px auto;
    background-color: rgb(206, 212, 218);
  `

const FormSection = styled.form`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  textarea {
    resize: none;
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
  }
`

function ImageDetailSection() {
  
  return (
    <ImageDetailBox>
        <ImageDetailNavBar />
        <ImgWrapperDetail imgSrc={profile} filterClass={'filter-xpro-ii'} />

        <FormSection>
          <textarea
            id="img-description"
            placeholder='Add description'
          />
        </FormSection>
        
    </ImageDetailBox>
  )
}

export default ImageDetailSection