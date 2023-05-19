import React, { useState } from 'react'
import profile from '../../../images/profile.jpg'
import ImageDetailNavBar from './ImageDetailNavBar'
import styled from 'styled-components';
import ImgWrapperDetail from './ImgWrapperDetail';
import { useUploadedImg } from '../../../Context/ImgUploadContext';

const ImageDetailBox = styled.div`
    width: 480px;
    margin: 30px auto;
    padding: 10px;
  `

const FormSection = styled.form`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  border-radius: 5px;
  background-color: rgb(173, 181, 189);
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
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
  const upImg = useUploadedImg()
  const [textValue, setTextValue] = useState()

  const handleOnChangeText = (e) => {
    setTextValue(e.target.value)
  }
  
  const handlePostUpload = (e) => {
    e.preventDefault()

    console.log(textValue)
  }

 

  return (
    <ImageDetailBox>
        <ImageDetailNavBar handlePostUpload={handlePostUpload} />
        <ImgWrapperDetail imgSrc={upImg} filterClass={'filter-xpro-ii'} />

        <FormSection onSubmit={handlePostUpload}>
          <textarea
            id="img-description"
            placeholder='Add description'
            onChange={handleOnChangeText}

          />
        </FormSection>
        
    </ImageDetailBox>
  )
}

export default ImageDetailSection